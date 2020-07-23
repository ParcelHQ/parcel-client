import React, { useMemo, useState, useRef } from 'react';
import {
    Flex,
    Box,
    Heading,
    Button,
    BoxProps,
    useDisclosure,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    ButtonGroup,
    IconButton,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/core';
import AddEmployee from '../../components/Modals/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import { useTable } from 'react-table';

function Table(props: BoxProps) {
    return (
        <Box shadow="sm" rounded="lg" overflow="auto" borderWidth="1px">
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
            textAlign="left"
            fontSize="xs"
            // backgroundColor="gray.50"
            // color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
            lineHeight="1rem"
            fontWeight="bold"
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

export default function Payroll(): JSX.Element {
    const addEmployeeModal = useDisclosure();

    const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState<boolean>(false);
    const cancelRef: any = useRef();

    function editRow(value: any) {
        console.log('editRow value:', value);
    }

    function deleteRow(value: any) {
        console.log('deleteRow value:', value);
        setDeleteAlertIsOpen(true);
    }

    const data = useMemo(
        () => [
            {
                col1: 'John Doe',
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'DAI',
                col4: '1800000000000000000',
            },
            {
                col1: 'John Doe',
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'DAI',
                col4: '1800000000000000000',
            },
            {
                col1: 'John Doe',
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'DAI',
                col4: '1800000000000000000',
            },
            {
                col1: 'John Doe',
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'DAI',
                col4: '1800000000000000000',
            },
            {
                col1: 'John Doe',
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'DAI',
                col4: '1800000000000000000',
            },
        ],
        [],
    );

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'col1',
            },
            {
                Header: 'Address',
                accessor: 'col2',
            },
            {
                Header: 'Currency',
                accessor: 'col3',
            },
            {
                Header: 'Salary',
                accessor: 'col4',
            },
            {
                Header: 'Action',
                Cell: function Buttons({ row }: any) {
                    return (
                        <ButtonGroup spacing={2}>
                            <IconButton aria-label="Remove employee" icon="minus" onClick={() => deleteRow(row)} />
                            <IconButton aria-label="Edit employee" icon="edit" />
                        </ButtonGroup>
                    );
                },
            },
        ],
        [],
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        //@ts-ignore
    } = useTable({ columns, data });

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
                <Button onClick={addEmployeeModal.onOpen}>Add Employee</Button>
            </Flex>

            <Box p="4" height="100vh">
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                                {headerGroup.headers.map((column) => (
                                    <TableHeader {...column.getHeaderProps()} key={uuidv4()}>
                                        {column.render('Header')}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);

                            return (
                                <TableRow {...row.getRowProps()} key={uuidv4()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <TableCell {...cell.getCellProps()} key={uuidv4()}>
                                                <Text fontSize="sm">{cell.render('Cell')}</Text>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                        <AlertDialog
                            isOpen={deleteAlertIsOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={() => setDeleteAlertIsOpen(false)}
                            isCentered
                        >
                            <AlertDialogOverlay />
                            <AlertDialogContent borderRadius="0.25rem">
                                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                    Delete Employee
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                    Are you sure? You can&apos;t undo this action afterwards.
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={() => setDeleteAlertIsOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button variantColor="red" onClick={() => setDeleteAlertIsOpen(false)} ml={3}>
                                        Delete
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </TableBody>
                </Table>
            </Box>

            <AddEmployee isOpen={addEmployeeModal.isOpen} onClose={addEmployeeModal.onClose} />
        </>
    );
}
