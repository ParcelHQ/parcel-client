import React, { useEffect, useState } from 'react';
import { Link, Icon, IconButton } from '@chakra-ui/core';

import { shortenAddress } from '../../utils';

export default function Entry({ entry }: { entry: any }) {
    return (
        <>
            {
                <>
                    <th>{entry.name}</th>
                    {/* new Date(marketResolutionTime * 1000).toUTCString() */}
                    <th>{shortenAddress(entry.address)}</th>
                    <th>{entry.currency}</th>
                    <th>{entry.salary}</th>
                    <th>
                        <IconButton aria-label="Remove employee" icon="minus" />
                        <IconButton aria-label="Edit employee" icon="edit" />
                    </th>
                </>
            }
        </>
    );
}
