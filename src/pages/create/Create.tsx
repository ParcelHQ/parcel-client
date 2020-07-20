import React from 'react';
import { Heading, Button, Input, Stack, InputGroup, InputRightAddon } from '@chakra-ui/core';

export default function Create() {
    return (
        <>
            <Heading as="h1" size="2xl">
                Register a name
            </Heading>
            <Stack spacing={4}>
                <InputGroup size="sm">
                    <Input rounded="0" placeholder="ethglobal" />
                    <InputRightAddon children="pacelid.eth" />
                </InputGroup>
            </Stack>
            <Button>Create</Button>
        </>
    );
}
