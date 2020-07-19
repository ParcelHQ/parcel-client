import React from 'react';
import { Select } from '@chakra-ui/core';

export default function settings() {
    return (
        <>
            <Select placeholder="language">
                <option value="option1">English</option>
                <option value="option2">Chinese</option>
                <option value="option3">Korean</option>
            </Select>
        </>
    );
}
