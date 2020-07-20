import React, { useState } from 'react';
import { Flex, Box, Heading, useColorMode, Skeleton, Button, useDisclosure } from '@chakra-ui/core';
import Entry from './Entry';
import styled from '@emotion/styled';
import AddEmployee from '../../components/Modals/AddEmployee';
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

export default function Payroll(): JSX.Element {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [loading] = useState<boolean>(false);

    const entries: any[] = [
        {
            name: 'John Doe',
            address: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            currency: 'DAI',
            salary: '1800000000000000000',
        },
        {
            name: 'John Doe',
            address: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            currency: 'DAI',
            salary: '1800000000000000000',
        },
        {
            name: 'John Doe',
            address: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
            currency: 'DAI',
            salary: '1800000000000000000',
        },
    ];

    return (
        <>
            <Box my="2rem" rounded="md" boxShadow="md">
                <Flex direction="column" wrap="wrap" justify="space-between" m="0 auto" w="100%" p="1rem 1.5rem">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Manage Employees
                    </Heading>
                    <Button onClick={onOpen}>Add Employee</Button>

                    <Box mt="1rem">
                        <Skeleton isLoaded={!loading}>
                            <Table>
                                <TableHeadTop>
                                    <TableRow colorMode={colorMode}>
                                        <TableHead colorMode={colorMode} roundedLeft>
                                            Name
                                        </TableHead>
                                        <TableHead colorMode={colorMode}>Address/ENS</TableHead>
                                        <TableHead colorMode={colorMode}>Currency</TableHead>
                                        <TableHead colorMode={colorMode}>Salary</TableHead>
                                        <TableHead colorMode={colorMode} roundedRight>
                                            Actions
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
            <AddEmployee isOpen={isOpen} onClose={onClose} />
        </>
    );
}
