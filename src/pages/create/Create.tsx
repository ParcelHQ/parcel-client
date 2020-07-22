import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
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
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Create() {
    const router = useRouter();
    const { account } = useWeb3React<Web3Provider>();

    const [organization, setOrganization] = useState<any>({
        name: '',
        walletAddress: '',
        ens: '',
        logo: '',
        createdBy: '',
        createdOn: '',
    });
    useEffect(() => {
        if (!!account) setOrganization({ ...organization, createdBy: account });
        // return () => {};
    }, [account]);

    const { register, errors, handleSubmit } = useForm<{ name: string }>({
        mode: 'onChange',
    });

    const onSubmit = (e: any) => {
        // e.preventDefault();
        const nameWithId = name + 'parcelid.eth';
        console.log('nameWithId:', nameWithId);

        router.push('/dashboard');
    };

    return (
        <Box pb="6rem" pt="10rem">
            <Box mx="auto" maxWidth="1280px">
                <Flex direction="column" justify="center" align="center">
                    <Heading as="h1" size="2xl" fontSize="2.25rem" fontWeight="800">
                        Register an Organization
                    </Heading>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
                        <FormControl>
                            {/* <FormLabel htmlFor="orgWalletAddress">ENS ID</FormLabel> */}
                            <InputGroup size="md" my="2rem">
                                <Input
                                    id="ensName"
                                    rounded="0"
                                    placeholder="ethglobal"
                                    isRequired
                                    onChange={(e: any) => setOrganization({ ...organization, ens: e.target.value })}
                                    name="ensName"
                                    value={organization.ens}
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
                            {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
                        </FormControl>

                        <Button type="submit">Go</Button>
                    </form>
                </Flex>
            </Box>
        </Box>
    );
}
