import React from 'react';
import {
    Flex,
    Avatar,
    Text,
    Editable,
    EditableInput,
    EditablePreview,
    ButtonGroup,
    IconButton,
    Button,
} from '@chakra-ui/core';

const Profile = () => {
    //eslint-disable-next-line
    function EditableControls({ isEditing, onSubmit, onCancel, onRequestEdit }: any) {
        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton aria-label="check" icon="check" onClick={onSubmit} />
                <IconButton aria-label="close" icon="close" onClick={onCancel} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent="center">
                <IconButton aria-label="make edit" size="sm" icon="edit" onClick={onRequestEdit} />
            </Flex>
        );
    }

    return (
        <Flex direction="column" justify="center" align="center">
            <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Editable
                textAlign="center"
                defaultValue="Bill Gates"
                fontSize="2xl"
                isPreviewFocusable={false}
                submitOnBlur={false}
            >
                {(props: any) => (
                    <>
                        <EditablePreview />
                        <EditableInput />
                        <EditableControls {...props} />
                    </>
                )}
            </Editable>
            <Text>billgates@microsoft.com</Text>
            <Text>123 456 7890</Text>
            <ButtonGroup spacing={4}>
                <Button variant="solid">Stream</Button>
                <Button variant="outline">Upload Document</Button>
            </ButtonGroup>
        </Flex>
    );
};

export default Profile;
