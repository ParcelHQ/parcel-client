import React, { useState, useEffect } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Icon,
    Skeleton,
    Box,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    List,
    ListItem,
    ListIcon,
    Spinner,
    Divider,
    Stack,
    Text,
} from '@chakra-ui/core';
// import CircleChart from '../../components/CircleChart.tst';

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

    return (
        <>
            <Box>
                <Heading>Balances</Heading>
                {/* <Breadcrumb spacing="8px" separator={<Icon color="gray.300" name="chevron-right" />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about">About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="/contact">Balances</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb> */}
            </Box>

            <Stack spacing={8} isInline align="center">
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
            </Stack>

            <Stack mt="1rem" isInline align="center">
                <Box p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl">Current Stream</Heading>
                    {/* <CircleChart /> */}
                </Box>
                <Box p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl">Upcoming Payroll</Heading>
                    <Text mt={4}>
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
                    </Text>
                </Box>
            </Stack>

            <Divider />
            <Box>
                <Stack>
                    <Heading>Recent Activity</Heading>
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
                </Stack>
            </Box>
        </>
    );
}
