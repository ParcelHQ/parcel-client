import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';

const NotFound = () => {
    return (
        <Flex direction="column" justify="space-evenly" textAlign="center" pt="10rem">
            <Heading as="h1" fontSize="50px">
                Page Not Found
            </Heading>
            <Text mt="2rem">Sorry, but the requested page you are looking for does not exist</Text>
            <Heading as="h1" fontStyle="normal" fontSize="200px" mt="0.2rem">
                404
            </Heading>
        </Flex>
    );
};

export default NotFound;
