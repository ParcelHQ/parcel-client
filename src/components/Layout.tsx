import React, { useEffect, ReactNode } from 'react';
import { Box } from '@chakra-ui/core';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/connectors';
import { useEagerConnect, useInactiveListener } from '../hooks';

import Header from './Header';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const { activate, active, error } = useWeb3React<Web3Provider>();

    const triedEager = useEagerConnect();

    useEffect(() => {
        if (triedEager && !active && !error) activate(injected);
    }, [triedEager, active, error, activate]);

    useInactiveListener(!triedEager);

    return (
        <Box>
            <Header triedEager={triedEager} />
            <Box m="auto" p="1rem 1.25rem" h="100vh">
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
