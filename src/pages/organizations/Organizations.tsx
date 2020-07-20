import React from 'react';
import { Heading, Button, Input, Stack, InputGroup, InputRightAddon } from '@chakra-ui/core';

export default function Organizations() {
    return (
        <>
            <Heading as="h1" size="2xl">
                Your Organizations
            </Heading>
            <Stack spacing={4}></Stack>
            <Button>Go</Button>
        </>
    );
}
