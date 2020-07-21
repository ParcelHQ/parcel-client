import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import { Link, Box, Heading, Stack } from '@chakra-ui/core';

export default function About() {
    return (
        <Box>
            <Heading mb={4}>About</Heading>
            <Stack isInline>
                <Link href="https://twitter.com/parcelHQ" isExternal aria-label="Twitter Link">
                    <Box as={AiOutlineTwitter} size="3rem" />
                </Link>
                <Link href="https://github.com/ParcelHQ" isExternal aria-label="GitHub Link">
                    <Box as={AiOutlineGithub} size="3rem" />
                </Link>
            </Stack>
        </Box>
    );
}
