import React, { useMemo, useEffect } from 'react';
import {
    Heading,
    Button,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useDisclosure,
    Box,
    BoxProps,
    Text,
} from '@chakra-ui/core';
import { v4 as uuidv4 } from 'uuid';
import AddDocument from '../../components/Modals/AddDocument';
import { useTable } from 'react-table';
import addresses, { RINKEBY_ID } from '../../utils/addresses';
import ParcelWalletContract from '../../abis/ParcelWallet.json';
import { useContract } from '../../hooks';

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

export default function Documents() {
    const parcelWalletContract = useContract(addresses[RINKEBY_ID].parcelWallet, ParcelWalletContract, true);

    const data = useMemo(
        () => [
            {
                col1: "Jame's Pay Slip",
                col2: 'John Doe',
                col3: 'Sept 16, 2019',
                col4: '500 kb',
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
                Header: 'Owner',
                accessor: 'col2',
            },
            {
                Header: 'Last modified',
                accessor: 'col3',
            },
            {
                Header: 'File Size',
                accessor: 'col4',
            },
        ],
        [],
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        //@ts-ignore
    } = useTable({ columns, data });

    useEffect(() => {
        (async () => {
            if (parcelWalletContract) {
                const result = await parcelWalletContract.files(1);
                console.log('result:', result);
            }
        })();

        return () => {};
    }, [parcelWalletContract]);

    return (
        <>
            <Flex justify="space-between" align="center">
                <Flex direction="column">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Files
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Documents</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Button onClick={onOpen}>Add Document</Button>
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
                    </TableBody>
                </Table>
            </Box>
            <AddDocument isOpen={isOpen} onClose={onClose} />
        </>
    );
}
