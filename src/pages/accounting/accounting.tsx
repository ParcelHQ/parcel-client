import React, { useState } from 'react';
import { Flex, Box, Heading, useColorMode, Skeleton } from '@chakra-ui/core';
import Entry from './Entry';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

const Table = styled.table`
    width: 100%;
`;

const TableBody = styled.tbody``;

const TableHeadTop = styled.thead``;

const TableRow = styled.tr<{ colorMode: string }>``;

const TableHead = styled.th<{
    roundedLeft?: boolean;
    roundedRight?: boolean;
    colorMode?: string;
}>``;

export default function Accounting(): JSX.Element {
    const { colorMode } = useColorMode();
    const [loading] = useState<boolean>(false);

    const entries: any[] = [
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'paid to john',
            amount: '1800000000000000000',
        },
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'paid to john',
            amount: '1800000000000000000',
        },
        {
            date: 1595191030609,
            receiver: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            remarks: 'paid to john',
            amount: '1800000000000000000',
        },
    ];

    return (
        <Box my="2rem" rounded="md" boxShadow="md">
            <Flex direction="column" wrap="wrap" justify="space-between" m="0 auto" w="100%" p="1rem 1.5rem">
                <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                    Transactions History
                </Heading>

                <Box mt="1rem">
                    <Skeleton isLoaded={!loading}>
                        <Table>
                            <TableHeadTop>
                                <TableRow colorMode={colorMode}>
                                    <TableHead colorMode={colorMode} roundedLeft>
                                        Date
                                    </TableHead>
                                    <TableHead colorMode={colorMode}>Receiver</TableHead>
                                    <TableHead colorMode={colorMode}>Remarks</TableHead>
                                    <TableHead colorMode={colorMode} roundedRight>
                                        Amount
                                    </TableHead>
                                </TableRow>
                            </TableHeadTop>
                            <TableBody>
                                {entries.length > 0 &&
                                    entries.map((entry: string) => {
                                        return (
                                            <TableRow colorMode={colorMode} key={uuidv4()}>
                                                <Entry entry={entry} />
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </Skeleton>
                </Box>
            </Flex>
        </Box>
    );
}
