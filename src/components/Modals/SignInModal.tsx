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
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { injected, portis, fortmatic, walletconnect, walletlink } from '../../utils/connectors';

const SignInModal = ({ isOpen, onClose }: any) => {
    const { active, activate, error } = useWeb3React<Web3Provider>();

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
                        <Flex direction="column" justify="space-between" align="center">
                            <Button onClick={() => SignIn('injected')}>Injected</Button>

                            {/* <Button onClick={() => SignIn('portis')} isDisabled>
                                Portis
                            </Button>

                            <Button onClick={() => SignIn('fortmatic')} isDisabled>
                                Fortmatic
                            </Button>
                            <Button onClick={() => SignIn('walletconnect')} isDisabled>
                                WalletConnect
                            </Button>

                            <Button onClick={() => SignIn('coinbase')} isDisabled>
                                Coinbase
                            </Button> */}
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
