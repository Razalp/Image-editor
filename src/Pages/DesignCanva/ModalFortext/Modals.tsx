import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody,useDisclosure, ModalFooter, Button, Input } from '@nextui-org/react';
import { Palette, Type, X } from 'lucide-react';
import { ChromePicker } from 'react-color';
import FontSelect from './Select/FontSelect';
import ColourSelect from './Select/ColourSelect';
import SizeSelect from './Select/SizeSelect'; // Import the SizeSelect component

export default function Modals() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalPlacement, setModalPlacement] = useState('auto');
    const [inputText, setInputText] = useState('');
    const [color, setColor] = useState('#000000');
    const [font, setFont] = useState('Arial');
    const [size, setSize] = useState('medium'); // State for the size

    const [showColorPicker, setShowColorPicker] = useState(false);

    const toggleColorPicker = () => {
        setShowColorPicker(!showColorPicker);
    };

    return (
        <div className="flex flex-col gap-2">
            <button onClick={onOpen} className="max-w-fit">
                <Type />
            </button>

            <Modal isOpen={isOpen} placement={modalPlacement} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Text editor</ModalHeader>
                        <ModalBody>
                            <Input
                                color="primary"
                                type="text"
                                label="Text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <div className="flex justify-center" style={{ fontSize: size === 'small' ? '14px' : size === 'medium' ? '18px' : '24px', color, fontFamily: font }}>
                                {inputText && <strong>{inputText}</strong>}
                            </div>

                            <div className="flex justify-between mt-2">
                                <FontSelect font={font} setFont={setFont} />
                                <SizeSelect size={size} setSize={setSize} /> {/* Include SizeSelect */}
                                <ColourSelect color={color} setColor={setColor} />
                            </div>

                            <div className="flex justify-center mt-2">
                                <button color="primary" onClick={toggleColorPicker}>
                                    {showColorPicker ? <X /> : <Palette />}
                                </button>
                                {showColorPicker && (
                                    <ChromePicker
                                        color={color}
                                        onChange={(updatedColor) => setColor(updatedColor.hex)}
                                    />
                                )}
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={onClose}>
                                Add
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </div>
    );
}
