import React, { useEffect, useState } from 'react';
import { Link, Icon } from '@chakra-ui/core';

import { shortenAddress } from '../../utils';

export default function Entry({ entry }: { entry: any }) {
    return (
        <>
            {
                <>
                    <th>{entry.date}</th>
                    {/* new Date(marketResolutionTime * 1000).toUTCString() */}
                    <th>{shortenAddress(entry.receiver)}</th>
                    <th>{entry.remarks}</th>
                    <th>{entry.amount}</th>
                </>
            }
        </>
    );
}
