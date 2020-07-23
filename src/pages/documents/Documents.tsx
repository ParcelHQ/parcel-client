import React from 'react';
import { Heading, Button, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useDisclosure } from '@chakra-ui/core';
import AddDocument from '../../components/Modals/AddDocument';

export default function Documents() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex justify="space-between" align="center">
                <Flex direction="column">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Files
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Documents</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Button onClick={onOpen}>Add Document</Button>
            </Flex>
            <AddDocument isOpen={isOpen} onClose={onClose} />
        </>
    );
}
