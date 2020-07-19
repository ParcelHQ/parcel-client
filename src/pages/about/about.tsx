import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import { Icon, Link } from '@chakra-ui/core';

export default function about() {
    return (
        <>
            <Link href="https://twitter.com/parcelHQ" isExternal aria-label="Twitter Link">
                <Icon as={AiOutlineTwitter} size="1.5rem" />
            </Link>
            <Link href="https://github.com/ParcelHQ" isExternal aria-label="GitHub Link">
                <Icon as={AiOutlineGithub} size="1.5rem" />
            </Link>
        </>
    );
}
