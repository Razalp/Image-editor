// Canva.jsx

import React, { useState } from 'react';
import { Image } from "@nextui-org/react";
import Applyafilters from './Applyafilters';

const Canva = () => {
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFilter = (filterName) => {
    setFilter(filterName);
  };

  const removeFilter = () => {
    setFilter('');
  };

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
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
        <div className="mt-4">
          <Applyafilters applyFilter={applyFilter} imageUrl={image}/>
        </div>
      
    </div>
  );
};

export default Canva;
