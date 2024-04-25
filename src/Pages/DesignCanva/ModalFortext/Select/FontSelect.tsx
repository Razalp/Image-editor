import { Select, SelectItem } from '@nextui-org/react';

interface FontSelectProps {
    font: string;
    setFont: (font: string) => void;
}

const FontSelect = ({ font, setFont }: FontSelectProps) => {
    const fontOptions = [
        { key: 'Arial', value: 'Arial', label: 'Arial' },
        { key: 'Serif', value: 'Serif', label: 'Serif' },
        { key: 'Tahoma', value: 'Tahoma', label: 'Tahoma' },
        { key: 'Fantasy', value: 'Fantasy', label: 'Fantasy' },
        { key: 'Arial Black', value: 'Arial Black', label: 'Arial Black' },
        { key: 'cursive', value: 'cursive', label: 'cursive' },
        // Add 20 more fonts below
        { key: 'Helvetica', value: 'Helvetica', label: 'Helvetica' },
        { key: 'Verdana', value: 'Verdana', label: 'Verdana' },
        { key: 'Georgia', value: 'Georgia', label: 'Georgia' },
        { key: 'Palatino', value: 'Palatino', label: 'Palatino' },
        { key: 'Impact', value: 'Impact', label: 'Impact' },
        { key: 'Courier New', value: 'Courier New', label: 'Courier New' },
        { key: 'Times New Roman', value: 'Times New Roman', label: 'Times New Roman' },
        { key: 'Comic Sans MS', value: 'Comic Sans MS', label: 'Comic Sans MS' },
        { key: 'Garamond', value: 'Garamond', label: 'Garamond' },
        { key: 'Bookman', value: 'Bookman', label: 'Bookman' },
        { key: 'Trebuchet MS', value: 'Trebuchet MS', label: 'Trebuchet MS' },
        { key: 'Courier', value: 'Courier', label: 'Courier' },
        { key: 'Lucida Console', value: 'Lucida Console', label: 'Lucida Console' },
        { key: 'Lucida Sans Unicode', value: 'Lucida Sans Unicode', label: 'Lucida Sans Unicode' },
        { key: 'Arial Narrow', value: 'Arial Narrow', label: 'Arial Narrow' },
        { key: 'Century Gothic', value: 'Century Gothic', label: 'Century Gothic' },
        { key: 'Baskerville', value: 'Baskerville', label: 'Baskerville' },
        { key: 'Optima', value: 'Optima', label: 'Optima' },
        { key: 'Copperplate', value: 'Copperplate', label: 'Copperplate' }
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
