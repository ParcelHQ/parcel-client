import React, { useState, useEffect } from 'react';
import {
    Button,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
} from '@chakra-ui/core';
import { MdBuild, MdCall } from 'react-icons/md';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { injected, portis, fortmatic, walletconnect, walletlink } from '../../utils/connectors';

enum ConnectorNames {
    Injected = 'Injected',
    WalletConnect = 'WalletConnect',
    WalletLink = 'WalletLink',
    Fortmatic = 'Fortmatic',
    Portis = 'Portis',
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.WalletLink]: walletlink,
    [ConnectorNames.Fortmatic]: fortmatic,
    [ConnectorNames.Portis]: portis,
};

const SignInModal = ({ isOpen, onClose }: any) => {
    const { account, active, activate, connector, error } = useWeb3React<Web3Provider>();

    // const [activatingConnector, setActivatingConnector] = useState<any>();

    // useEffect(() => {
    //     if (activatingConnector && activatingConnector === connector) setActivatingConnector(undefined);
    // }, [activatingConnector, connector]);

    useEffect(() => {
        if (active && !error) onClose();
    }, [active, onClose, error]);

    const SignIn = (wallet: string) => {
        if (wallet === 'injected') activate(injected);
        else if (wallet === 'portis') activate(portis);
        else if (wallet === 'fortmatic') activate(fortmatic);
        else if (wallet === 'walletconnect') activate(walletconnect);
        else if (wallet === 'walletlink') activate(walletlink);
        else console.error('No wallet');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius="0.25rem">
                <ModalHeader>Sign In</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction="column" justify="center" align="center">
                        {/* {Object.keys(connectorsByName).map((name) => {
                        //@ts-ignore
                        const currentConnector = connectorsByName[name];
                        const activating = currentConnector === activatingConnector;
                        const connected = currentConnector === connector;
                        const disabled = !!activatingConnector || connected || !!error;

                        return (
                            <Button
                                isDisabled={disabled}
                                isLoading={activating}
                                key={name}
                                onClick={() => {
                                    setActivatingConnector(currentConnector);
                                    //@ts-ignore
                                    activate(connectorsByName[name]);
                                }}
                            >
                                {name}
                            </Button>
                        );
                    })} */}

                        <Flex justify="space-between" align="center">
                            <Button onClick={() => SignIn('injected')}>Injected</Button>

                            <Button onClick={() => SignIn('portis')} isDisabled>
                                Portis
                            </Button>
                        </Flex>
                        <Flex justify="center" align="center">
                            <Button onClick={() => SignIn('fortmatic')} isDisabled>
                                Fortmatic
                            </Button>
                            <Button onClick={() => SignIn('walletconnect')} isDisabled>
                                WalletConnect
                            </Button>
                        </Flex>
                        <Flex justify="center" align="center">
                            <Button onClick={() => SignIn('coinbase')} isDisabled>
                                Coinbase
                            </Button>
                        </Flex>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button variantColor="blue" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SignInModal;
