import React, { useEffect, ReactNode } from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import Header from './Header';
import { useEagerConnect, useInactiveListener } from '../hooks';
import { injected } from '../utils/connectors';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const { colorMode } = useColorMode();
    // const { activate, active, error } = useWeb3React<Web3Provider>();

    // const triedEager = useEagerConnect();

    // useEffect(() => {
    //     if (triedEager && !active && !error) activate(injected);
    // }, [triedEager, active, error, activate]);

    // useInactiveListener(!triedEager);

    return (
        <Box>
            <Header />
            <Box m="auto" p="1rem 1.25rem" h="100vh">
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
