import React, { useState, useEffect } from 'react';
import { keccak256 } from '@ethersproject/keccak256';
import { toUtf8Bytes } from '@ethersproject/strings';
import addresses, { RINKEBY_ID } from '../../utils/addresses';
import { useContract } from '../../hooks';
import ParcelFactoryContract from '../../abis/ParcelFactory.json';
import {
    Heading,
    Button,
    Input,
    InputGroup,
    InputRightAddon,
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/core';
import { shortenAddress } from '../../utils';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import namehash from 'eth-ens-namehash';

export default function Create() {
    const router = useRouter();
    const { library } = useWeb3React<Web3Provider>();
    const parcelFactoryContract = useContract(addresses[RINKEBY_ID].parcelFactory, ParcelFactoryContract.abi, true);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const PARCEL_ID_HASH = namehash.hash('parcelid.eth');

    async function onSubmit({ name }: any) {
        setIsSubmitting(true);

        const nameHash = keccak256(toUtf8Bytes(name));
        const ensFullDomainHash = namehash.hash(name + '.parcelid.eth');

        if (!!library) {
            const doesItExist = await library.resolveName(name + '.parcelid.eth');
            if (doesItExist) onOpen();
            else if (!!parcelFactoryContract)
                try {
                    const tx = await parcelFactoryContract.register(PARCEL_ID_HASH, nameHash, ensFullDomainHash);

                    toast({
                        title: 'Transaction Submitted',
                        description: `${shortenAddress(tx.hash)}`,
                        status: 'info',
                        position: 'bottom',
                        duration: 3000,
                        isClosable: true,
                    });

                    const result = await tx.wait();
                    toast({
                        title: 'Transaction Confirmed',
                        description: `${shortenAddress(result.transactionHash)}`,
                        status: 'success',
                        position: 'bottom',
                        duration: 3000,
                        isClosable: true,
                    });
                    router.push('/dashboard');
                } catch (error) {
                    toast({
                        title: 'Transaction Failed',
                        description: `${error.message}`,
                        status: 'error',
                        position: 'bottom',
                        duration: 3000,
                        isClosable: true,
                    });
                }
        }
        setIsSubmitting(false);
    }

    const { register, errors, handleSubmit } = useForm<{ name: string }>({
        mode: 'onChange',
    });

    function validateName(value: any) {
        let error;
        if (!value) {
            error = 'Name is required';
            setIsInvalid(true);
        } else if (value.length < 5) {
            error = 'Name must be longer than 5 characters';
            setIsInvalid(true);
        } else if (value.length > 20) {
            error = 'Name must be longer than 20 characters';
            setIsInvalid(true);
        } else setIsInvalid(false);

        return error || true;
    }

    return (
        <>
            <Box pb="6rem" pt="10rem">
                <Box mx="auto" maxWidth="1280px">
                    <Flex direction="column" justify="center" align="center" textAlign="center">
                        <Heading as="h1" size="2xl" fontSize="2.25rem" fontWeight="800" mb="2rem">
                            Register an Organization
                        </Heading>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* @ts-ignore */}
                            <FormControl isInvalid={errors.name}>
                                <FormLabel aria-labelledby="ensName">
                                    <InputGroup>
                                        <Input
                                            roundedTopRight="0"
                                            roundedBottomRight="0"
                                            id="ensName"
                                            name="name"
                                            placeholder="ethglobal"
                                            isInvalid={isInvalid}
                                            ref={register({ validate: validateName })}
                                        />
                                        <InputRightAddon>parcelid.eth</InputRightAddon>
                                    </InputGroup>
                                </FormLabel>

                                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                            </FormControl>

                            <Button mt="1rem" isLoading={isSubmitting} type="submit">
                                Go
                            </Button>
                        </form>
                    </Flex>
                </Box>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent borderRadius="0.25rem">
                    <ModalHeader>Name already taken</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Please enter in a new name and try again</ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
