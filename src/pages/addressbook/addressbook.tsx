import React from 'react';
import { Box, Heading, Text, Select, ButtonGroup, Button, List, ListItem, ListIcon } from '@chakra-ui/core';
// import CircleChart from '../../components/CircleChart.tst';

export default function AddressBook() {
    return (
        <>
            <Box>
                <Heading mb={4}>Teams</Heading>
                <Text fontSize="xl">Run payroll for teams</Text>
            </Box>
            <Box>
                <ButtonGroup spacing={4}>
                    <Button>Engineering</Button>
                    <Button>Marketing</Button>
                    <Button>HR</Button>
                    <Button>Finance</Button>
                </ButtonGroup>
            </Box>

            <Box>
                <Heading>Select Currency</Heading>
                <Select placeholder="Select option">
                    <option value="eth">ETH</option>
                    <option value="dai">DAI</option>
                    <option value="usdc">USDC</option>
                </Select>
            </Box>
            <ButtonGroup spacing={4}>
                <Button>Stream</Button>
                <Button>Pay</Button>
            </ButtonGroup>
        </>
    );
}
