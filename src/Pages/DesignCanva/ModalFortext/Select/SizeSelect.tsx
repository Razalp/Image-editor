import { Select, SelectItem } from '@nextui-org/react';

interface SizeSelectProps {
    size: string; 
    setSize: (size: string) => void; 
}

const SizeSelect = ({ size, setSize }: SizeSelectProps) => {
    const sizeOptions = [
        { key: 'small', value: 'small', label: 'Small' },
        { key: 'medium', value: 'medium', label: 'Medium' },
        { key: 'large', value: 'large', label: 'Large' },
        { key: 'extra-small', value: 'extra-small', label: 'Extra Small' },
        { key: 'extra-large', value: 'extra-large', label: 'Extra Large' },
        { key: 'x-large', value: 'x-large', label: 'X-Large' },
        { key: 'xx-large', value: 'xx-large', label: 'XX-Large' },
        { key: 'xxx-large', value: 'xxx-large', label: 'XXX-Large' },
        { key: 'jumbo', value: 'jumbo', label: 'Jumbo' }
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
