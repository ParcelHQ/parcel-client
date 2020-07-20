import React, { useEffect, useState, useRef } from 'react';
import {
    Link,
    Icon,
    IconButton,
    useClipboard,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/core';

import { shortenAddress } from '../../utils';

export default function Entry({ entry }: { entry: any }) {
    const { onCopy, hasCopied } = useClipboard(entry.address);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const cancelRef: any = useRef();

    return (
        <>
            {
                <>
                    <th>{entry.name}</th>
                    {/* new Date(marketResolutionTime * 1000).toUTCString() */}
                    <th>
                        {shortenAddress(entry.address)}

                        <IconButton onClick={onCopy} aria-label="Copy Address" icon={hasCopied ? 'check' : 'copy'} />
                    </th>

                    <th>{entry.currency}</th>
                    <th>{entry.salary}</th>
                    <th>
                        <IconButton aria-label="Remove employee" icon="minus" onClick={() => setIsOpen(true)} />
                        <IconButton aria-label="Edit employee" icon="edit" />
                    </th>

                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={() => setIsOpen(false)}
                        isCentered
                    >
                        <AlertDialogOverlay />
                        <AlertDialogContent>
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
            }
        </>
    );
}
