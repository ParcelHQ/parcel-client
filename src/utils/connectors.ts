import { InjectedConnector } from '@web3-react/injected-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const FORTMATIC_API_KEY = 'pk_test_F46A5F27E50DD392';
const PORTIS_DAPP_ID = 'aa498c21-dc92-4845-bb76-fea5eacdcb43';

const RPC_URLS: { [chainId: number]: string } = {
    4: process.env.RPC_URL_4 as string,
};

export const injected = new InjectedConnector({ supportedChainIds: [4] });

export const fortmatic = new FortmaticConnector({ apiKey: FORTMATIC_API_KEY as string, chainId: 4 });

export const portis = new PortisConnector({ dAppId: PORTIS_DAPP_ID as string, networks: [4] });

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1] },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000,
});

export const walletlink = new WalletLinkConnector({
    url: RPC_URLS[1],
    appName: 'web3-react example',
});
