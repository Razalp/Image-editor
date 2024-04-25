import { Select, SelectItem } from '@nextui-org/react';

const ColourSelect = ({ color, setColor }: { color: string, setColor: (color: string) => void }) => {
  const fontColors: { [key: string]: string } = {
    black: '#000000',
    blue: '#0000FF',
    red: '#FF0000',
    yellow: '#FFFF00',
    green: '#008000',
    white: '#FFFFFF',
    purple: '#800080',
    cyan: '#00FFFF',
    magenta: '#FF00FF',
    silver: '#C0C0C0',
    gray: '#808080',
    maroon: '#800000',
    olive: '#808000',
    lime: '#00FF00',
    teal: '#008080',
    navy: '#000080',
    fuchsia: '#FF00FF',
    aqua: '#00FFFF',
    orange: '#FFA500',
    pink: '#FFC0CB',
    brown: '#A52A2A',
    gold: '#FFD700',
    indigo: '#4B0082',
    violet: '#8A2BE2',
    coral: '#FF7F50',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    salmon: '#FA8072',
    tan: '#D2B48C',
    turquoise: '#40E0D0',
  };

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
  };

  return (
    <Select
      value={color}
      onChange={(e) => handleColorChange(e.target.value)}
      className="mt-2"
      label="Color"
    >
      {Object.keys(fontColors).map((colorName) => (
        <SelectItem
          key={colorName}
          value={fontColors[colorName]}
          style={{ color: fontColors[colorName] }}
        >
          {colorName}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ColourSelect;
