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
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/core';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';

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

const ThumbsContainer = styled.aside`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16;
`;

const Thumb = styled.div`
    display: inline-flex;
    border-radius: 2;
    border: 1px solid #eaeaea;
    margin-bottom: 8;
    margin-right: 8;
    width: 100;
    height: 100;
    padding: 4;
`;

const ThumbInner = styled.div`
    display: flex;
    min-width: 0;
    overflow: hidden;
`;

const Img = styled.img`
    display: block;
    width: auto;
    height: 100%;
`;

export default function AddDocument({ isOpen, onClose }: any) {
    const [files, setFiles] = useState<any>([]);

    const onSubmit = () => {
        console.log('submitted');
    };

    const onDrop = useCallback((acceptedFiles: any) => {
        console.log('acceptedFiles:', acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file: any) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                ),
            );
        },
    });

    const thumbs = files.map((file: any) => (
        <Thumb key={file.name}>
            <ThumbInner>
                <Img src={file.preview} />
            </ThumbInner>
        </Thumb>
    ));

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file: any) => URL.revokeObjectURL(file.preview));
        },
        [files],
    );

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
                            <ThumbsContainer>{thumbs}</ThumbsContainer>
                        </Container>
                        <Button type="button">Submit</Button>
                    </form>
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
