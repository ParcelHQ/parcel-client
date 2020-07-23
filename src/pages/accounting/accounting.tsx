import React, { useMemo } from 'react';
import {
    Flex,
    Box,
    BoxProps,
    Heading,
    Button,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/core';
import { shortenAddress } from '../../utils';
import { useTable } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

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
            // backgroundColor="gray.50"
            // color="gray.500"
            textAlign="left"
            fontSize="xs"
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

export default function Accounting(): JSX.Element {
    const data = useMemo(
        () => [
            {
                col1: new Date(1595191030609).toUTCString(),
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'Paid to John Doe',
                col4: '1800000000000000000',
            },
            {
                col1: new Date(1595191030609).toUTCString(),
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'Paid to John Doe',
                col4: '1800000000000000000',
            },
            {
                col1: new Date(1595191030609).toUTCString(),
                col2: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col3: 'Paid to John Doe',
                col4: '1800000000000000000',
            },
        ],
        [],
    );

    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'col1',
            },
            {
                Header: 'Receiver',
                accessor: 'col2',
            },
            {
                Header: 'Remarks',
                accessor: 'col3',
            },
            {
                Header: 'Amount',
                accessor: 'col4',
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
                        Transactions History
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Accounting</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Button>Export CSV</Button>
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
        </>
    );
}
