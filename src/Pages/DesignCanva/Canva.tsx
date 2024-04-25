// Canva.jsx

import React, { useState } from 'react';
import { Image } from "@nextui-org/react";
import Applyafilters from './Applyafilters';
import Option from './Option';

const Canva = () => {
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState('');

  const handleDragOver = (e:any) => {
    e.preventDefault();
  };

  const handleDrop = (e:any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event:any) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFilter = (filterName: React.SetStateAction<string>) => {
    setFilter(filterName);
  };

  return (
    <>
    <Option/>
    <div className="min-h-screen flex justify-center items-center flex-col" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div>
        <br />      
        {image ? (
            
          <Image
            width={440}
            height={300} 
            alt="Uploaded Image"
            src={image}
            className={filter}
          />
        ) : (
          <p className='text-white'>Drag and drop an image here</p>
        )}
      </div>
      <br />
      {image && (
        <div className="mt-4">
          <Applyafilters applyFilter={applyFilter} imageUrl={image}/>
        </div>
      )}
    </div>
    </>
  );
};

export default Canva;
