import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Flex, Heading, Button, Icon, Link, Tag, Box, IconButton, useColorMode } from '@chakra-ui/core';

import { shortenAddress } from '../utils';
import { Link as ReactLink } from 'react-router-dom';
import { useEagerConnect, useInactiveListener } from '../hooks';
import { injected } from '../utils/connectors';

const Header = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    // const { account, activate, connector, error } = useWeb3React<Web3Provider>();

    const { account, activate, active, connector, error } = useWeb3React<Web3Provider>();

    const triedEager = useEagerConnect();

    useEffect(() => {
        if (triedEager && !active && !error) activate(injected);
    }, [triedEager, active, error, activate]);

    useInactiveListener(!triedEager);

    return (
        <Flex as="header" align="center" justify="space-between" p="0.75rem 1.25rem" m="0 auto">
            {/* @ts-ignore */}
            <Link as={ReactLink} to="/">
                <Flex direction="row" align="center" justify="center" mr={5} w="100%">
                    <Box as="span" role="img" fontSize="3rem" aria-label="box">
                        📦
                    </Box>
                    <Heading as="h1" size="xl" mx="0.5rem">
                        Parcel
                    </Heading>
                </Flex>
            </Link>
            <Flex align="center" justify="flex-end">
                <IconButton
                    aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                    variant="ghost"
                    mr="2"
                    fontSize="1.5rem"
                    onClick={toggleColorMode}
                    icon={colorMode === 'light' ? 'moon' : 'sun'}
                />
                {/* @ts-ignore */}
                <Link as={ReactLink} to="https://github.com/ParcelHQ" isExternal aria-label="Github Link">
                    <Icon display={{ xs: 'none', md: 'block' }} name="githubIcon" size="1.5rem" mr="2" />
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
    );
};

export default Header;
