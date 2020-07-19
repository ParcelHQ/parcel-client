import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Flex, Heading, Button, Icon, Link, Tag, IconButton, useColorMode, useDisclosure } from '@chakra-ui/core';
import { injected } from '../utils/connectors';
import { shortenAddress } from '../utils';
import NextLink from 'next/link';

import SideDrawer from './SideDrawer';

const Header = ({ triedEager }: { triedEager: boolean }): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { account, activate, connector, error } = useWeb3React<Web3Provider>();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex as="header" align="center" justify="space-between" p="0.75rem 1.25rem" m="0 auto">
                <NextLink href="/landing" passHref>
                    <Link href="/landing" _hover={{ cursor: 'pointer' }}>
                        <Flex direction="row" align="center" justify="center" mr={5} w="100%">
                            <IconButton aria-label="Open Drawer" icon="arrow-forward" onClick={onOpen} />
                            <Heading as="h1" size="xl" mx="0.5rem">
                                <span role="img" aria-label="parcel emoji">
                                    📦
                                </span>{' '}
                                Parcel
                            </Heading>
                        </Flex>
                    </Link>
                </NextLink>
                <Flex align="center" justify="flex-end">
                    <IconButton
                        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                        variant="ghost"
                        mr="2"
                        fontSize="1.5rem"
                        onClick={toggleColorMode}
                        icon={colorMode === 'light' ? 'moon' : 'sun'}
                    />
                    <Link mr="1rem" href="https://github.com/ParcelHQ" isExternal aria-label="Github Link">
                        <Icon display={{ xs: 'none', md: 'block' }} name="githubIcon" size="1.5rem" />
                    </Link>

                    {connector === injected && !error ? (
                        <Tag>{!!account && shortenAddress(account)}</Tag>
                    ) : (
                        <Button onClick={() => activate(injected)} isDisabled={!triedEager || !!error}>
                            Connect
                        </Button>
                    )}
                </Flex>
            </Flex>
            <SideDrawer isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Header;
