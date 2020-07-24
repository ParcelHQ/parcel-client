import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
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
} from '@chakra-ui/core';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';

import ipfsClient from 'ipfs-http-client';
const ipfs = ipfsClient('https://ipfs.infura.io:5001');

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
    const [storageValue, setStorageValue] = useState('');
    const [buffer, setBuffer] = useState('');

    console.log('ipfs:', ipfs);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        //encrypty buffer and then move to ipfs
        const mystuff = await ipfs.add(buffer);
        console.log('mystuff:', mystuff);
        const res = await ipfs.add(buffer);
        setStorageValue(res.path);

        // const result = await ipfsSDK.addFile(buffer)
        // call contract method, passing in ipfs hash
    };

    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        //@ts-ignore
        reader.onloadend = () => setBuffer(Buffer(reader.result));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius="0.25rem">
                <ModalHeader>Add Document</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={onSubmit}>
                        <Container>
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <p>Drop your files here</p>
                            </div>
                        </Container>
                        <Button type="submit">Submit</Button>
                    </form>
                    {storageValue !== '' && <img src={`https://ipfs.io/ipfs/${storageValue}`} alt="No-images" />}
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup>
                        <Button variantColor="purple" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={onClose}>Save</Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
