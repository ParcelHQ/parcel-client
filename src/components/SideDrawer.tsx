import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    Button,
    Text,
    Divider,
    Link,
} from '@chakra-ui/core';
import NextLink from 'next/link';

export default function SideDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => any }) {
    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Text fontSize="3xl">Parcel</Text>
                </DrawerHeader>

                <DrawerBody>
                    <Stack spacing={5}>
                        <NextLink href="/dashboard" passHref>
                            <Link href="/dashboard" _hover={{ cursor: 'pointer' }}>
                                <Text fontSize="xl">Dashboard</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/accounting" passHref>
                            <Link href="/accounting" _hover={{ cursor: 'pointer' }}>
                                <Text fontSize="xl">Accounting</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/payroll" passHref>
                            <Link href="/payroll" _hover={{ cursor: 'pointer' }}>
                                <Text fontSize="xl">Payroll</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/addressbook" passHref>
                            <Link href="/addressbook" _hover={{ cursor: 'pointer' }}>
                                <Text fontSize="xl">Address Book</Text>
                            </Link>
                        </NextLink>

                        <Divider />
                        <NextLink href="/about" passHref>
                            <Link href="/about" _hover={{ cursor: 'pointer' }}>
                                <Text fontSize="xl">About</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/settings" passHref>
                            <Link href="/settings" _hover={{ cursor: 'pointer' }}>
                                <Text fontSize="xl">Settings</Text>
                            </Link>
                        </NextLink>
                    </Stack>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
