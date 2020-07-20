import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import {
    Flex,
    Heading,
    Button,
    Icon,
    Image,
    Box,
    Link,
    Tag,
    List,
    ListItem,
    IconButton,
    useColorMode,
    useDisclosure,
    Avatar,
    AvatarBadge,
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/core';
import { shortenAddress } from '../utils';
import NextLink from 'next/link';
import SignInModal from './Modals/SignInModal';

import SideDrawer from './SideDrawer';
import ParcelLogo from '../assets/logo.svg';

const Header = ({ triedEager }: { triedEager: boolean }): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { account, active, connector, error } = useWeb3React<Web3Provider>();
    const NavDrawer = useDisclosure();
    const WalletsModal = useDisclosure();

    return (
        <>
            <Flex as="header" align="center" justify="space-between" p="0.75rem 1.25rem" m="0 auto">
                <Flex align="center" mr={5} w="100%">
                    <IconButton aria-label="Open Drawer" icon="arrow-forward" onClick={NavDrawer.onOpen} />
                    <NextLink href="/dashboard" passHref>
                        <Link href="/dashboard" _hover={{ cursor: 'pointer' }}>
                            <Flex ml="1rem">
                                <Image size="50px" objectFit="cover" src={ParcelLogo} alt="Parcel Logo" />
                                <Heading as="h1" size="xl" mx="0.5rem">
                                    Parcel
                                </Heading>
                            </Flex>
                        </Link>
                    </NextLink>
                </Flex>

                <Flex align="center" justify="flex-end">
                    <IconButton
                        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                        variant="ghost"
                        mr="2"
                        onClick={toggleColorMode}
                        icon={colorMode === 'light' ? 'moon' : 'sun'}
                    />
                    {active && !error && !!account ? (
                        <Popover>
                            <PopoverTrigger>
                                <Box role="button">
                                    <Tooltip
                                        label={shortenAddress(account)}
                                        placement="bottom"
                                        aria-label="wallet address"
                                    >
                                        <Box>
                                            <Avatar
                                                name="Brennan Fife"
                                                src="https://bit.ly/broken-link"
                                                bg="secondary.100"
                                            >
                                                <AvatarBadge size="1.25em" bg="primary.100" />
                                            </Avatar>
                                        </Box>
                                    </Tooltip>
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Notifications</PopoverHeader>
                                <PopoverBody>
                                    <List>
                                        <ListItem>John has accepted your 200 DAI Stream</ListItem>
                                        <ListItem>Melissa has requested a Stream of 437 USDC</ListItem>
                                    </List>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <Button onClick={WalletsModal.onOpen} isDisabled={!triedEager || !!error}>
                            Connect
                        </Button>
                    )}
                </Flex>
            </Flex>
            <SideDrawer isOpen={NavDrawer.isOpen} onClose={NavDrawer.onClose} />
            <SignInModal isOpen={WalletsModal.isOpen} onClose={WalletsModal.onClose} />
        </>
    );
};

export default Header;
