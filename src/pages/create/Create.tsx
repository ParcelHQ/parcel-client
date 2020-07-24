import React, { useState } from 'react';
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
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import namehash from 'eth-ens-namehash';

export default function Create() {
    const parcelFactoryContract = useContract(addresses[RINKEBY_ID].parcelFactory, ParcelFactoryContract.abi, true);

    const [ensName, setEnsName] = useState('');

    function onSubmit(e: any) {
        e.preventDefault();

        console.log('ensName:', ensName);

        const PARCEL_ID_HASH = namehash.hash('parcelid.eth');

        const nameHash = keccak256(toUtf8Bytes(ensName));
        console.log('nameHash:', nameHash);

        const ensDomain = ensName + '.parcelid.eth';
        console.log('ensDomain:', ensDomain);
        const ensFullDomainHash = namehash.hash(ensDomain);
        console.log('ensFullDomainHash:', ensFullDomainHash);

        //@ts-ignore
        parcelFactoryContract.register(PARCEL_ID_HASH, nameHash, ensFullDomainHash);
    }

    const { register, errors, handleSubmit } = useForm<{ name: string }>({
        mode: 'onChange',
    });

    return (
        <Box pb="6rem" pt="10rem">
            <Box mx="auto" maxWidth="1280px">
                <Flex direction="column" justify="center" align="center">
                    <Heading as="h1" size="2xl" fontSize="2.25rem" fontWeight="800">
                        Register an Organization
                    </Heading>

                    <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
                        <FormControl>
                            <InputGroup my="2rem">
                                <Input
                                    style={{ borderTopLeftRadius: '0.25rem', borderBottomLeftRadius: '0.25rem' }}
                                    rounded="0"
                                    id="ensName"
                                    placeholder="ethglobal"
                                    onChange={(e: any) => setEnsName(e.target.value)}
                                    name="ensName"
                                    value={ensName}
                                    ref={register({
                                        required: 'This is required',
                                        minLength: {
                                            value: 5,
                                            message: 'Min length is 5 characters',
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'Max length is 20 characters',
                                        },
                                    })}
                                />
                                <InputRightAddon>parcelid.eth</InputRightAddon>
                            </InputGroup>
                            {/* {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>} */}
                        </FormControl>
                        <Button type="submit">Go</Button>
                    </form>
                </Flex>
            </Box>
        </Box>
    );
}
