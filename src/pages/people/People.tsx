import React, { forwardRef, useMemo } from 'react';
import {
    Box,
    Heading,
    Text,
    Select,
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    BoxProps,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useDisclosure,
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

export default function People() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const data = useMemo(
        () => [
            {
                col1: 'John Doe',
                // colx: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col2: 'DAI',
                col3: '1800000000000000000',
            },
            {
                col1: 'John Doe',
                // colx: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col2: 'DAI',
                col3: '1800000000000000000',
            },
            {
                col1: 'John Doe',
                // colx: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col2: 'DAI',
                col3: '1800000000000000000',
            },
        ],
        [],
    );

    const columns = useMemo(
        () => [
            {
                Header: 'Employee',
                accessor: 'col1',
            },
            {
                Header: 'Currency',
                accessor: 'col2',
            },
            {
                Header: 'Salary',
                accessor: 'col3',
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

    // eslint-disable-next-line react/display-name
    const ActiveTab = forwardRef((props: any, ref: any) => {
        return (
            <Tab ref={ref} isSelected={props.isSelected} {...props}>
                {props.isSelected && '📦 '}
                {props.children}
            </Tab>
        );
    });

    return (
        <>
            <Flex justify="space-between" align="center">
                <Flex direction="column">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Address Book
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">People</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Button onClick={onOpen}>Add Employee</Button>
            </Flex>
            <Box>
                <Tabs isFitted variant="enclosed">
                    <TabList>
                        <ActiveTab>Engineering</ActiveTab>
                        <ActiveTab>Marketing</ActiveTab>
                        <ActiveTab>Human Resources</ActiveTab>
                        <ActiveTab>Finance</ActiveTab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>Engineering</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Marketing</p>
                        </TabPanel>
                        <TabPanel>
                            <p>HR</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Finance</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Select placeholder="Select Currency">
                    <option value="eth">ETH</option>
                    <option value="dai">DAI</option>
                    <option value="usdc">USDC</option>
                </Select>
            </Box>

            <Box mt="1rem">
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
                {/* <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Address / ENS</TableHeader>
                            <TableHeader>Currency</TableHeader>
                            <TableHeader>Salary</TableHeader>
                            <TableHeader>Actions</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.length > 0 &&
                            entries.map((entry: string, index: number) => {
                                return <Entry entry={entry} key={uuidv4()} index={index} />;
                            })}
                    </TableBody>
                </Table> */}
            </Box>
            <AddEmployee isOpen={isOpen} onClose={onClose} />
        </>
    );
}
