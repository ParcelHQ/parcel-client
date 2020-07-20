import React, { useState, forwardRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Select,
    ButtonGroup,
    Button,
    List,
    ListItem,
    ListIcon,
    Skeleton,
    useColorMode,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/core';
// import CircleChart from '../../components/CircleChart.tst';
import Entry from './Entry';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

const Table = styled.table`
    width: 100%;
`;

const TableBody = styled.tbody``;

const TableHeadTop = styled.thead``;

const TableRow = styled.tr<{ colorMode: string }>``;

const TableHead = styled.th<{
    roundedLeft?: boolean;
    roundedRight?: boolean;
    colorMode?: string;
}>``;

export default function AddressBook() {
    const { colorMode } = useColorMode();
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
    ];

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
            <Box>
                <Heading mb={4}>Teams</Heading>
                <Text fontSize="xl">Run payroll for teams</Text>
            </Box>
            <Box>
                <Tabs isFitted variant="enclosed">
                    <TabList>
                        <ActiveTab>Engineering</ActiveTab>
                        <ActiveTab>Marketing</ActiveTab>
                        <ActiveTab>HR</ActiveTab>
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
                <Heading>Select Currency</Heading>
                <Select placeholder="Select option">
                    <option value="eth">ETH</option>
                    <option value="dai">DAI</option>
                    <option value="usdc">USDC</option>
                </Select>
            </Box>
            <Box mt="1rem">
                <Skeleton isLoaded={!loading}>
                    <Table>
                        <TableHeadTop>
                            <TableRow colorMode={colorMode}>
                                <TableHead colorMode={colorMode} roundedLeft>
                                    Name
                                </TableHead>
                                <TableHead colorMode={colorMode}>Address / ENS</TableHead>
                                <TableHead colorMode={colorMode}>Currency</TableHead>
                                <TableHead colorMode={colorMode}>Salary</TableHead>
                                <TableHead colorMode={colorMode} roundedRight>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeadTop>
                        <TableBody>
                            {entries.length > 0 &&
                                entries.map((entry: string) => {
                                    return (
                                        <TableRow colorMode={colorMode} key={uuidv4()}>
                                            <Entry entry={entry} />
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </Skeleton>
            </Box>
            <ButtonGroup spacing={4}>
                <Button>Stream</Button>
                <Button>Pay</Button>
            </ButtonGroup>
        </>
    );
}
