import React from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/core';

import { shortenAddress } from '../../utils';

function TableRow(props: BoxProps) {
    return <Box as="tr" {...props} />;
}

function TableCell(props: BoxProps) {
    return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />;
}

export default function Entry({ entry, index }: { entry: any; index: any }) {
    function isEven(index: number) {
        if (index % 2 == 0) return true;
        else return false;
    }

    return (
        <TableRow bg={isEven(index) ? 'white' : 'gray.50'}>
            <TableCell>
                <Text fontWeight="bold" fontSize="sm">
                    {entry.name}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {shortenAddress(entry.address)}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {entry.currency}
                </Text>
            </TableCell>
            <TableCell>
                <Text fontSize="sm" color="gray.500">
                    {entry.salary}
                </Text>
            </TableCell>
        </TableRow>
    );
}
