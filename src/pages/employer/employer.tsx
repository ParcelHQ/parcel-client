import React from 'react';
import { Heading, Text, Box, Button, Link, Flex } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

export default function Employer(): JSX.Element {
    const { active } = useWeb3React<Web3Provider>();

    return (
        <Box pb="6rem" pt="10rem">
            <Box mx="auto" maxWidth="1280px" px="1.5rem" w="100%">
                <Box mx="auto" maxWidth="36rem" textAlign="center">
                    <Heading as="h1" size="2xl" fontSize="2.25rem" fontWeight="800">
                        Welcome to <span style={{ color: '#6F6BE9' }}>Parcel</span>
                    </Heading>

                    <Text fontSize="1.5rem">Manage Crypto Payroll Seamlessly</Text>

                    <Flex mt="2rem" justify="space-evenly">
                        <NextLink href="/create" passHref>
                            <Link _hover={{ cursor: 'pointer' }}>
                                <Button
                                    leftIcon="add"
                                    height="96px"
                                    width="auto"
                                    border="2px"
                                    borderColor="purple.500"
                                    isDisabled={!active}
                                >
                                    Create an Organization
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href="/organizations" passHref>
                            <Link _hover={{ cursor: 'pointer' }}>
                                <Button
                                    leftIcon="search"
                                    height="96px"
                                    width="auto"
                                    border="2px"
                                    borderColor="purple.500"
                                    isDisabled={!active}
                                >
                                    Open an Organization
                                </Button>
                            </Link>
                        </NextLink>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
