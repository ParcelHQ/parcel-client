import React, { useState, useLayoutEffect, useEffect } from 'react';
import { NextComponentType } from 'next';
import NextApp from 'next/app';
import Head from 'next/head';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { Global } from '@emotion/core';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';

import Layout from '../components/Layout';
import Error from '../components/Error';
import theme, { GlobalStyle } from '../utils/theme';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

//eslint-disable-next-line
function Application({ Component }: { Component: NextComponentType }): JSX.Element | null {
    const [ready, setReady] = useState<boolean>(false);
    const { error } = useWeb3React();

    useIsomorphicLayoutEffect(() => {
        setReady(true);
    }, []);

    return !ready ? null : (
        <Layout>
            {!!error && <Error error={error} />}
            <Component />
        </Layout>
    );
}

function getLibrary(provider: any): Web3Provider {
    return new Web3Provider(provider);
}

export default class App extends NextApp {
    render() {
        const { Component } = this.props;

        return (
            <>
                <Head>
                    <title key="title">Parcel</title>
                    <link key="favicon" rel="icon" href={`./favicon.ico`} />
                    <meta name="description" content="crypto payroll with saplier, ipfs, and filecoin" />
                </Head>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <ThemeProvider theme={theme}>
                        <ColorModeProvider>
                            <CSSReset />
                            <Global styles={GlobalStyle} />
                            <Application Component={Component} />
                        </ColorModeProvider>
                    </ThemeProvider>
                </Web3ReactProvider>
            </>
        );
    }
}
