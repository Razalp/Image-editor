import { Select, SelectItem } from '@nextui-org/react';

const FontSelect = ({ font, setFont }) => {
    const fontOptions = [
        { key: 'Arial', value: 'Arial', label: 'Arial' },
        { key: 'Serif', value: 'Serif', label: 'Serif' },
        { key: 'Tahoma', value: 'Tahoma', label: 'Tahoma' },
        { key: 'Fantasy', value: 'Fantasy', label: 'Fantasy' },
        { key: 'Arial Black', value: 'Arial Black', label: 'Arial Black' },
        { key: 'cursive', value: 'cursive', label: 'cursive' },

    ];

    return (
        <Select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="mt-2"
            label="Font"
        >
            {fontOptions.map(option => (
                <SelectItem
                    key={option.key}
                    value={option.value}
                    style={{ fontFamily: option.value }}
                >
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default FontSelect;
