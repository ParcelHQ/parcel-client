import React, { useEffect, useState, useRef } from 'react';
import {
    Link,
    Icon,
    Text,
    IconButton,
    useClipboard,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    BoxProps,
    Box,
} from '@chakra-ui/core';
import NextLink from 'next/link';

import { shortenAddress } from '../../utils';

function TableRow(props: BoxProps) {
    return <Box as="tr" {...props} />;
}

function TableCell(props: BoxProps) {
    return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />;
}

export default function Entry({ entry, index }: { entry: any; index: any }) {
    const address = entry.address;
    console.log('address:', address);
    const { onCopy, hasCopied } = useClipboard(entry.address);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const cancelRef: any = useRef();

    function isEven(index: number) {
        if (index % 2 == 0) return true;
        else return false;
    }

    return (
        <>
            <TableRow bg={isEven(index) ? 'white' : 'gray.50'}>
                <TableCell>
                    <NextLink href="/profile" passHref>
                        <Link href="/profile">
                            <Text fontWeight="bold" fontSize="sm" color="gray.500">
                                {entry.name}
                            </Text>
                        </Link>
                    </NextLink>
                </TableCell>
                <TableCell>
                    <Text fontSize="sm" color="gray.500">
                        {/* {shortenAddress(entry.address)} */}
                        {/* {shortenAddress('0x1d9999be880e7e516dEefdA00a3919BdDE9C1707')} */}
                        0x1d99...1707
                    </Text>
                    <IconButton onClick={onCopy} aria-label="Copy Address" icon={hasCopied ? 'check' : 'copy'} />
                </TableCell>
                <TableCell>
                    <Text fontSize="sm" color="gray.500">
                        {entry.currency}
                    </Text>
                </TableCell>
                <TableCell>
                    <Text fontSize="sm" color="gray.500">
                        {entry.salary}
                    </Text>
                </TableCell>
                <TableCell>
                    <IconButton aria-label="Remove employee" icon="minus" onClick={() => setIsOpen(true)} />
                    <IconButton aria-label="Edit employee" icon="edit" />
                </TableCell>
            </TableRow>
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={() => setIsOpen(false)} isCentered>
                <AlertDialogOverlay />
                <AlertDialogContent borderRadius="0.25rem">
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Employee
                    </AlertDialogHeader>

                    <AlertDialogBody>Are you sure? You can&apos;t undo this action afterwards.</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button variantColor="red" onClick={() => setIsOpen(false)} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
