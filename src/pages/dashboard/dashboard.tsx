import React, { useState, useEffect, useMemo } from 'react';
import {
    Box,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Text,
    List,
    ListItem,
    ListIcon,
    Spinner,
    Divider,
    Stack,
    Progress,
    BoxProps,
    Grid,
    Tag,
} from '@chakra-ui/core';
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
            textAlign="left"
            fontSize="xs"
            // color="gray.500"
            // backgroundColor="gray.50"
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

export default function Dashboard() {
    const [isEthLoading, setisEthLoading] = useState<boolean>(true);
    const [isDaiLoading, setIsDaiLoading] = useState<boolean>(true);
    const [isUsdcLoading, setIsUsdcLoading] = useState<boolean>(true);
    const [isUsdtLoading, setIsUsdtLoading] = useState<boolean>(true);
    const [isWbtcLoading, setIsWbtcLoading] = useState<boolean>(true);

    useEffect(() => {
        let isStale = false;

        if (!isStale) {
            setTimeout(() => {
                setisEthLoading(false);
                setIsDaiLoading(false);
                setIsUsdcLoading(false);
                setIsUsdtLoading(false);
                setIsWbtcLoading(false);
            }, 1000);
        }
        return () => {
            isStale = true;
        };
    }, []);

    const data = useMemo(
        () => [
            {
                col1: 'Added Software Engineer Time Berners-Lee to Payroll',
                col2: new Date(1595191030609).toUTCString(),
                col3: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col4: '1800000000000000000',
            },
            {
                col1: 'Paid Marketing Team',
                col2: new Date(1595191030609).toUTCString(),
                col3: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col4: '1800000000000000000',
            },
            {
                col1: 'Paid Contractor Larry Ellison',
                col2: new Date(1595191030609).toUTCString(),
                col3: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
                col4: '1800000000000000000',
            },
        ],
        [],
    );

    const columns = useMemo(
        () => [
            {
                Header: 'Remarks',
                accessor: 'col1',
                style: {
                    fontWeight: 'bold',
                },
            },
            {
                Header: 'Date',
                accessor: 'col2',
            },
            {
                Header: 'Receiver',
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
            <Tag mb="1rem" shadow="sm">
                <Text fontSize="2xl">Balances & Streams</Text>
            </Tag>

            <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={6}>
                <Stat p="1rem 2rem" shadow="md" borderWidth="1px" borderRadius="1rem">
                    <StatLabel>ETH</StatLabel>
                    {isEthLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <StatNumber>52.3</StatNumber>
                            <StatHelpText whiteSpace="nowrap">
                                <StatArrow type="increase" />
                                0.4%
                            </StatHelpText>
                        </>
                    )}
                </Stat>
                <Stat p="1rem 2rem" shadow="md" borderWidth="1px" borderRadius="1rem">
                    <StatLabel>DAI</StatLabel>
                    {isDaiLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <StatNumber>5000</StatNumber>
                            <StatHelpText whiteSpace="nowrap">
                                <StatArrow type="decrease" />
                                0.04%
                            </StatHelpText>
                        </>
                    )}
                </Stat>
                <Stat p="1rem 2rem" shadow="md" borderWidth="1px" borderRadius="1rem">
                    <StatLabel>USDC</StatLabel>
                    {isUsdcLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <StatNumber>4000</StatNumber>
                            <StatHelpText whiteSpace="nowrap">
                                <StatArrow type="decrease" />
                                0.02%
                            </StatHelpText>
                        </>
                    )}
                </Stat>
                <Stat p="1rem 2rem" shadow="md" borderWidth="1px" borderRadius="1rem">
                    <StatLabel>USDT</StatLabel>
                    {isUsdtLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <StatNumber>3000</StatNumber>
                            <StatHelpText whiteSpace="nowrap">
                                <StatArrow type="increase" />
                                0.03%
                            </StatHelpText>
                        </>
                    )}
                </Stat>
                <Stat p="1rem 2rem" shadow="md" borderWidth="1px" borderRadius="1rem">
                    <StatLabel>WBTC</StatLabel>
                    {isWbtcLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <StatNumber>5</StatNumber>
                            <StatHelpText whiteSpace="nowrap">
                                <StatArrow type="decrease" />
                                0.02%
                            </StatHelpText>
                        </>
                    )}
                </Stat>
            </Grid>

            <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={6} mt="1rem">
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="1rem" gridColumn="span 2 / auto">
                    <Heading fontSize="xl">Current Streams</Heading>
                    <Stack spacing={5} mt="0.5rem">
                        <Box>
                            <Progress color="purple" value={38} hasStripe isAnimated />
                            <Text>Alan Turing - 38%</Text>
                        </Box>

                        <Box>
                            <Progress color="purple" value={72} hasStripe isAnimated />
                            <Text>Steve Jobs - 72%</Text>
                        </Box>

                        <Box>
                            <Progress color="purple" value={20} hasStripe isAnimated />
                            <Text>Bill Gates - 20%</Text>
                        </Box>
                    </Stack>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="1rem" gridColumn="span 3 / auto">
                    <Heading fontSize="xl">Upcoming Payroll</Heading>
                    <Box mt={4}>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon icon="chalendar" color="red.500" />
                                Marketing Payroll due on 1st August, 2020 at 11am PST - $20k
                            </ListItem>
                            <ListItem>
                                <ListIcon icon="calendar" color="red.500" />
                                Engineering Payroll due on 1st August, 2020 at 11am PST - $90k
                            </ListItem>
                            <ListItem>
                                <ListIcon icon="check-circle" color="green.500" />
                                Paying Larry Page - $15,000 - on 4th August, 2020 at 11am PST
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Grid>

            <Divider my="2rem" />

            <Box>
                <Tag mb="1rem" shadow="sm">
                    <Text fontSize="2xl">Recent Transactions</Text>
                </Tag>

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
                                                {cell.render('Cell')}
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
