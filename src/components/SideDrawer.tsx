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
    Image,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import ParcelLogo from '../assets/logo.svg';

export default function SideDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => any }) {
    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Image size="50px" objectFit="cover" src={ParcelLogo} alt="Parcel Logo" />
                    <Text fontSize="3xl">Parcel</Text>
                </DrawerHeader>

                <DrawerBody>
                    <Stack spacing={5}>
                        <NextLink href="/dashboard" passHref>
                            <Link>
                                <Text fontSize="xl">Dashboard</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/accounting" passHref>
                            <Link>
                                <Text fontSize="xl">Accounting</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/payroll" passHref>
                            <Link>
                                <Text fontSize="xl">Payroll</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/addressbook" passHref>
                            <Link>
                                <Text fontSize="xl">Address Book</Text>
                            </Link>
                        </NextLink>
                        <Divider />
                        <NextLink href="/about" passHref>
                            <Link>
                                <Text fontSize="xl">About</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/settings" passHref>
                            <Link>
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
