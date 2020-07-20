import React from 'react';
import { css } from '@emotion/core';
import { theme } from '@chakra-ui/core';

const customIcons = {
    daiIcon: {
        path: (
            <path
                fill="currentColor"
                d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.633-16.183L15.817 5 5 15.817l10.817 3.996 10.816-3.996zM8.364 14.9l7.333-7.498s7.169 7.333 7.471 7.48c.303.146-4.931 0-4.931 0l-2.42-2.475-2.448 2.493H8.364zm7.453 5.674L5 16.605l10.817 10.028L26.633 16.55l-10.816 4.024z"
            />
        ),
        viewBox: '0 0 32 32',
    },
    githubIcon: {
        path: (
            <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
        ),
        viewBox: '0 0 16 16',
    },
};

export default {
    ...theme,

    colors: {
        ...theme.colors,
        primary: { 100: '#6F6BE9' },
        secondary: { 100: '#DBAE8E' },
    },
    icons: {
        ...theme.icons,
        ...customIcons,
    },
};

export const GlobalStyle = css`
    @import url('https://rsms.me/inter/inter.css');
    html {
        font-family: 'Inter', monospace;
    }
    @supports (font-variation-settings: normal) {
        html {
            font-family: 'Inter var', monospace;
        }
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        min-width: 480px;
        height: 100%;
        position: relative;
    }
`;
