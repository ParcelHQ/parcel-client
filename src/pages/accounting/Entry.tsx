import React from 'react';
import { Link, Icon, Box, BoxProps, Text } from '@chakra-ui/core';

import { shortenAddress } from '../../utils';

function TableRow(props: BoxProps) {
    return <Box as="tr" {...props} />;
}

function TableCell(props: BoxProps) {
    return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />;
}

export default function Entry({ entry, index }: any) {
    function isEven(index: number) {
        if (index % 2 == 0) return true;
        else return false;
    }

    return (
        <TableRow bg={isEven(index) ? 'white' : 'gray.50'}>
            <TableCell>
                <Text fontWeight="bold" fontSize="sm">
                    {new Date(entry.date).toUTCString()}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {shortenAddress(entry.receiver)}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {entry.remarks}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {entry.amount}
                </Text>
            </TableCell>
        </TableRow>
    );
}
