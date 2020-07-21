import React, { useState } from 'react';
import {
    Heading,
    Button,
    Input,
    Stack,
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

export default function Create() {
    const [name, setName] = useState<string>('');
    const router = useRouter();

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
                        Register a name
                    </Heading>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
                        <FormControl>
                            {/* <FormLabel htmlFor="name" /> */}
                            <InputGroup size="md" my="2rem">
                                <Input
                                    id="name"
                                    rounded="0"
                                    placeholder="ethglobal"
                                    isRequired
                                    onChange={(e: any) => setName(e.target.value)}
                                    name="name"
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
