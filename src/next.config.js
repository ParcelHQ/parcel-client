// const withImages = require('next-images');

module.exports = {
    reactStrictMode: true,
    assetPrefix: '.',
    RPC_URL_4: 'https://rinkeby.infura.io/v3/60ab76e16df54c808e50a79975b4779f',
    exportTrailingSlash: true,
    exportPathMap: () => {
        return {
            '/': { page: '/' },
        };
    },
};

// module.exports = withImages();
