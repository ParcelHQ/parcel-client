import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Icon,
    Button,
    Text,
    Divider,
    Link,
    Image,
    Flex,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { FiDollarSign, FiSettings, FiHome, FiSmile, FiEdit2, FiFilePlus, FiUsers } from 'react-icons/fi';

const StyledLink = styled.a<{ active: boolean }>`
    padding: 1rem 0;
    text-decoration: none;
    color: ${({ active }) => (active ? '#f4f5f9' : '#eceffb')};
`;

export default function SideDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => any }) {
    const { pathname } = useRouter();
    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Image size="50px" objectFit="cover" src="./logo.svg" alt="Parcel Logo" />
                    <Text fontSize="3xl">Parcel</Text>
                </DrawerHeader>

                <DrawerBody>
                    <NextLink href="/dashboard" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiHome} mr="1rem" />
                                <Text fontSize="xl">Dashboard</Text>
                            </Flex>
                        </Link>
                        {/* <StyledLink active={pathname === '/markets'}></StyledLink> */}
                    </NextLink>
                    <NextLink href="/accounting" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiEdit2} mr="1rem" />
                                <Text fontSize="xl">Accounting</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/payroll" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiDollarSign} mr="1rem" />
                                <Text fontSize="xl">Payroll</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/people" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiUsers} mr="1rem" />
                                <Text fontSize="xl">People</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/documents" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiFilePlus} mr="1rem" />
                                <Text fontSize="xl">Documents</Text>
                            </Flex>
                        </Link>
                    </NextLink>

                    <Divider />

                    <NextLink href="/companydetails" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiHome} mr="1rem" />
                                <Text fontSize="xl">Company Details</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiSmile} mr="1rem" />
                                <Text fontSize="xl">About</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/settings" passHref>
                        <Link>
                            <Flex align="center">
                                <Icon as={FiSettings} mr="1rem" />
                                <Text fontSize="xl">Settings</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
