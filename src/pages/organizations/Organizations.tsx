import React from 'react';
import { Heading, Button, Box, Flex, Select } from '@chakra-ui/core';

export default function Organizations() {
    const currentOrganization: any[] = ['Organization 1', 'Organization 3', 'Organization 3', 'Organization 4'];

    return (
        <Box pb="6rem" pt="10rem">
            <Box mx="auto" maxWidth="1280px">
                <Flex direction="column" justify="center" align="center">
                    <Heading as="h1" size="2xl" fontSize="2.25rem" fontWeight="800">
                        Your Organizations
                    </Heading>

                    <Select placeholder="Select an Organization" size="lg" my="1rem">
                        {currentOrganization.map((organization: string, index: number) => {
                            return (
                                <option value={organization} key={index}>
                                    {organization}
                                </option>
                            );
                        })}
                    </Select>

                    <Button type="submit">Go</Button>
                </Flex>
            </Box>
        </Box>
    );
}
