import React, { ReactNode } from 'react';
import { Box, useColorMode } from '@chakra-ui/core';

import Header from './Header';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const { colorMode } = useColorMode();

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
