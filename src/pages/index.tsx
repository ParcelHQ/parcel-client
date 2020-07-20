import React from 'react';
import { Heading, Text, Box, Button, Link, Flex } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

export default function Landing(): JSX.Element {
    const { active } = useWeb3React<Web3Provider>();

    return (
        <Flex direction="column" justify="space-evenly" align="center">
            <Heading as="h1" size="2xl">
                Welcome to Parcel
            </Heading>
            <Text>Manage Crypto Payroll Seamlessly</Text>
            <Box>
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
                            Open an Existing Organization
                        </Button>
                    </Link>
                </NextLink>
            </Box>
        </Flex>
    );
}
