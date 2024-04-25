import { Select, SelectItem } from '@nextui-org/react';

const ColourSelect = ({ color, setColor }) => {
  const fontColors = {
    black: '#000000',
    blue: '#0000FF',
    red: '#FF0000',
    C153448L:"#153448"
  };

  const handleColorChange = (selectedColor) => {
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
