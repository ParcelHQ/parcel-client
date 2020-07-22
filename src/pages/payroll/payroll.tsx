import React, { useState } from 'react';
import {
    Flex,
    Box,
    Heading,
    useColorMode,
    Skeleton,
    Button,
    BoxProps,
    useDisclosure,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/core';
import Entry from './Entry';
import AddEmployee from '../../components/Modals/AddEmployee';
import { v4 as uuidv4 } from 'uuid';

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
            <Flex justify="space-between" align="center">
                <Flex direction="column">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Manage Employees
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Payroll</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Button onClick={onOpen}>Add Employee</Button>
            </Flex>

            <Box p="4" height="100vh">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Date</TableHeader>
                            <TableHeader>Receiver</TableHeader>
                            <TableHeader>Remarks</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Action</TableHeader>
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

            <AddEmployee isOpen={isOpen} onClose={onClose} />
        </>
    );
}
