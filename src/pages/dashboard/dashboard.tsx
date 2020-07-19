import React from 'react';
import {
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
} from '@chakra-ui/core';
// import CircleChart from '../../components/CircleChart.tst';

export default function dashboard() {
    return (
        <>
            <Box>
                <Heading>Balances</Heading>
                <StatGroup>
                    <Stat>
                        <StatLabel>ETH</StatLabel>
                        <StatNumber>52.3</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            0.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>DAI</StatLabel>
                        <StatNumber>5000</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
                            0.04%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>USDC</StatLabel>
                        <StatNumber>4000</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
                            0.02%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>USDT</StatLabel>
                        <StatNumber>3000</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            0.03%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>WBTC</StatLabel>
                        <StatNumber>5</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
                            0.02%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Box>
            <Box>
                <Heading>Current Stream</Heading>
                {/* <CircleChart /> */}
            </Box>
            <Box>
                <Heading>Upcoming Payroll</Heading>
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
        </>
    );
}
