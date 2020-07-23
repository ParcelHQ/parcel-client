import React from 'react';
import { Heading, Button, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/core';

const CompanyDetails = () => {
    return (
        <div>
            <Flex justify="space-between" align="center">
                <Flex direction="column">
                    <Heading as="h3" size="lg" fontSize="1.5rem" font-weight="500">
                        Details
                    </Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Company Details</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
            </Flex>
        </div>
    );
};

export default CompanyDetails;
