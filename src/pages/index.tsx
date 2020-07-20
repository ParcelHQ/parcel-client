import React from 'react';
import { Heading, Text, ButtonGroup, Button, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

export default function Redirect(): JSX.Element {
    return (
        <>
            <Heading as="h1" size="2xl">
                Welcome to Parcel
            </Heading>
            <Text>Manage Crypto Payroll Seamlessly</Text>
            <ButtonGroup spacing={4}>
                <NextLink href="/create" passHref>
                    <Link href="/create" _hover={{ cursor: 'pointer' }}>
                        <Button leftIcon="add">Create an Organization</Button>
                    </Link>
                </NextLink>
                <NextLink href="/organizations" passHref>
                    <Link href="/organizations" _hover={{ cursor: 'pointer' }}>
                        <Button rightIcon="search-2">Open an Existing Organization</Button>
                    </Link>
                </NextLink>
            </ButtonGroup>
        </>
    );
}
