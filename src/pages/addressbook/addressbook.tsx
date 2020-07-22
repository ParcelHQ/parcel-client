import React, { useState, forwardRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Select,
    ButtonGroup,
    Button,
    Skeleton,
    useColorMode,
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
    BreadcrumbSeparator,
    useDisclosure,
} from '@chakra-ui/core';
// import CircleChart from '../../components/CircleChart.tst';
import AddEmployee from '../../components/Modals/AddEmployee';
import Entry from './Entry';
import { v4 as uuidv4 } from 'uuid';

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
            backgroundColor="gray.50"
            textAlign="left"
            fontSize="xs"
            color="gray.500"
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

export default function AddressBook() {
    const { colorMode } = useColorMode();
    const [loading] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Flex justify="space-between" align="center">
                <Flex direction="column">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Teams
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Address Book</BreadcrumbLink>
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
                <Select placeholder="Select Currency">
                    <option value="eth">ETH</option>
                    <option value="dai">DAI</option>
                    <option value="usdc">USDC</option>
                </Select>
            </Box>

            <Box mt="1rem">
                <Table>
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
                </Table>
            </Box>
            <AddEmployee isOpen={isOpen} onClose={onClose} />
        </>
    );
}
