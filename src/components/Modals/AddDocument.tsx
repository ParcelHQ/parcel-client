import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import {
    Flex,
    Button,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/core';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';
import addresses, { RINKEBY_ID } from '../../utils/addresses';
import ParcelWalletContract from '../../abis/ParcelWallet.json';
import { useContract } from '../../hooks';
import { utils } from 'ethers';

import parcel from 'parcel-sdk';

const getColor = (props: any) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
};

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
`;

export default function AddDocument({ isOpen, onClose }: any) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [storageValue, setStorageValue] = useState('');
    const [buffer, setBuffer] = useState('');

    const parcelWalletContract = useContract(addresses[RINKEBY_ID].parcelWallet, ParcelWalletContract, true);
    console.log('parcelWalletContract:', parcelWalletContract);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        // setIsSubmitting(true);

        //! replace hello with signature key from ethers
        const encryptedData = parcel.cryptoUtils.encryptData(buffer, 'hello');

        const res = await parcel.ipfs.addData(encryptedData);
        console.log('res:', res.string);

        // const HEX_VALUE = utils.formatBytes32String(res.string);
        // console.log('HEX_VALUE:', HEX_VALUE);
        // setStorageValue(res.path);

        const result = await parcelWalletContract!.addFile(1, res.string);
        console.log('result:', result);

        // setIsSubmitting(false);
    };

    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        //@ts-ignore
        reader.onloadend = () => setBuffer(Buffer(reader.result));
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius="0.25rem">
                <ModalHeader>Add Document</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={onSubmit}>
                        <Container {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>Drag n drop some files here, or click to select files</p>
                        </Container>
                        <aside>
                            <ul>
                                {acceptedFiles.map((file: any) => (
                                    <li key={file.path}>
                                        {file.path} - {file.size} bytes
                                    </li>
                                ))}
                            </ul>
                        </aside>
                        <Button type="submit" isLoading={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                    {/* {
        storageValue !== '' && <img src={`https://ipfs.io/ipfs/${storageValue}`} alt="No-images" />;
    } */}
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup>
                        <Button onClick={onClose}>Cancel</Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
