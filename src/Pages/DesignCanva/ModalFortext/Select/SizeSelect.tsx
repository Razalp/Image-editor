import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const SizeSelect = ({ size, setSize }) => {
    const sizeOptions = [
        { key: 'small', value: 'small', label: 'Small' },
        { key: 'medium', value: 'medium', label: 'Medium' },
        { key: 'large', value: 'large', label: 'Large' },
    ];

    return (
        <Select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-2"
            label="Size"
        >
            {sizeOptions.map(option => (
                <SelectItem key={option.key} value={option.value}>
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default SizeSelect;
