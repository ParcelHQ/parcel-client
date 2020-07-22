import React, { useState, useEffect } from 'react';
import {
    Skeleton,
    Box,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
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
    Flex,
    Tooltip,
    Tag,
} from '@chakra-ui/core';
import Entry from './Entry';
import styled from '@emotion/styled';

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
            textAlign="left"
            fontSize="xs"
            color="gray.500"
            backgroundColor="gray.50"
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

    const entries: any[] = [
        {
            remark: 'Paid Marketing Team',
            date: 1595191030609,
            recipients: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
        },
        {
            remark: 'Added Time Berners Lee',
            date: 1595191030609,
            recipients: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
        },
        {
            remark: 'Paid Larry Ellison',
            date: 1595191030609,
            recipients: '0x1d9999be880e7e516dEefdA00a3919BdDE9C1707',
        },
    ];

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
                                <ListIcon icon="check-circle" color="green.500" />
                                Payroll due on 1st August, 2020 of Marketing team - $20k
                            </ListItem>
                            <ListItem>
                                <ListIcon icon="check-circle" color="green.500" />
                                Payroll due on 1st August, 2020 of Engineering team - $90k
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

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Remarks</TableHeader>
                            <TableHeader>Date</TableHeader>
                            <TableHeader>Recipient(s)</TableHeader>
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
