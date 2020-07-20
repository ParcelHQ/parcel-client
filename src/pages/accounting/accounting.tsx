import React, { useState } from 'react';
import { Flex, Box, BoxProps, Heading, useColorMode, Button, Skeleton, Text, Link } from '@chakra-ui/core';
import Entry from './Entry';

function Table(props: BoxProps) {
    return (
        <Box shadow="sm" rounded="lg" overflow="hidden">
            <Box as="table" width="full" {...props} />
        </Box>
    );
}

function TableHead(props: BoxProps) {
    return <Box as="thead" {...props} />;
}

function TableRow(props: BoxProps) {
    return <Box as="tr" {...props} />;
}

function TableHeader(props: BoxProps) {
    return (
        <Box
            as="th"
            px="6"
            py="3"
            borderBottomWidth="1px"
            backgroundColor="gray.50"
            textAlign="left"
            fontSize="xs"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
            lineHeight="1rem"
            fontWeight="medium"
            {...props}
        />
    );
}

function TableBody(props: BoxProps) {
    return <Box as="tbody" {...props} />;
}

function TableCell(props: BoxProps) {
    return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />;
}

export default function Accounting(): JSX.Element {
    const [loading] = useState<boolean>(false);

    const entries: any[] = [
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'Paid to John Doe',
            amount: '1800000000000000000',
        },
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'Paid to John Doe',
            amount: '1800000000000000000',
        },
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'Paid to John Doe',
            amount: '1800000000000000000',
        },
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'Paid to John Doe',
            amount: '1800000000000000000',
        },
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'Paid to John Doe',
            amount: '1800000000000000000',
        },
    ];

    return (
        <>
            <Flex>
                <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                    Transactions History
                </Heading>
                <Button>Export CSV</Button>
            </Flex>
            <Box p="4" height="100vh">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Date</TableHeader>
                            <TableHeader>Receiver</TableHeader>
                            <TableHeader>Remarks</TableHeader>
                            <TableHeader>Amount</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.length > 0 &&
                            entries.map((entry: string, index: number) => {
                                return <Entry entry={entry} key={index} index={index} />;
                            })}
                    </TableBody>
                </Table>
            </Box>
        </>
    );
}
