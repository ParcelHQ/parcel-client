import React from 'react';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Global } from '@emotion/core';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import theme, { GlobalStyle } from './utils/theme';
import App from './App';

function getLibrary(provider: any): Web3Provider {
    return new Web3Provider(provider);
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Web3ReactProvider getLibrary={getLibrary}>
                <ThemeProvider theme={theme}>
                    <ColorModeProvider>
                        <CSSReset />
                        <Global styles={GlobalStyle} />
                        <App />
                    </ColorModeProvider>
                </ThemeProvider>
            </Web3ReactProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
