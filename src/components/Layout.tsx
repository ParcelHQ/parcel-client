import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/core';
import { useEagerConnect, useInactiveListener } from '../hooks';

import Header from './Header';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const triedEager = useEagerConnect();

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
