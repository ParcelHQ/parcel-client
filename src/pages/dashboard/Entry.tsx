import React from 'react';
import { Box, BoxProps, Text, AvatarGroup, Avatar, Tooltip } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { shortenAddress } from '../../utils';

function TableRow(props: BoxProps) {
    return <Box as="tr" {...props} />;
}

function TableCell(props: BoxProps) {
    return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />;
}

export default function Entry({ entry, index }: { entry: any; index: any }) {
    const router = useRouter();
    function isEven(index: number) {
        if (index % 2 == 0) return true;
        else return false;
    }

    return (
        <TableRow bg={isEven(index) ? 'white' : 'gray.50'}>
            <TableCell>
                <Text fontWeight="bold" fontSize="sm">
                    {entry.remark}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {entry.date}
                </Text>
            </TableCell>
            <TableCell>
                <AvatarGroup size="md" max={2}>
                    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                </AvatarGroup>
            </TableCell>
        </TableRow>
    );
}
