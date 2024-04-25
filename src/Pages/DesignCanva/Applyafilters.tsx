import React, { useState, useEffect, useRef } from 'react';
import { Image } from '@nextui-org/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface ImageFilter {
  filter: string;
  name: string;
}

interface ApplyFiltersProps {
  applyFilter: (filterName: string) => void;
  imageUrl: string;
}

const ApplyFilters: React.FC<ApplyFiltersProps> = ({ applyFilter, imageUrl }) => {
  const imageFilters: Record<string, ImageFilter> = {
    grayscale: { filter: 'grayscale(100%)', name: 'Grayscale' },
    sepia: { filter: 'sepia(100%)', name: 'Sepia' },
    blur: { filter: 'blur(3px)', name: 'Blur' },
    brightness: { filter: 'brightness(150%)', name: 'Brightness' },
    contrast: { filter: 'contrast(200%)', name: 'Contrast' },
    hueRotate: { filter: 'hue-rotate(90deg)', name: 'Hue Rotate' },
    invert: { filter: 'invert(100%)', name: 'Invert' },
    opacity: { filter: 'opacity(50%)', name: 'Opacity' },
    dropShadow: { filter: 'drop-shadow(8px 8px 10px gray)', name: 'Drop Shadow' }
  };

  const [filtersPerPage, setFiltersPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const filtersContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePageSize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setFiltersPerPage(5);
      } else {
        setFiltersPerPage(2); 
      }
    };

    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  useEffect(() => {
    const totalPagesCount = Math.ceil(Object.keys(imageFilters).length / filtersPerPage);
    setTotalPages(totalPagesCount);
  }, [filtersPerPage, imageFilters]);

  const startIndex = currentPage * filtersPerPage;
  const endIndex = startIndex + filtersPerPage;

  const applyFilterHandler = (filterName: string) => {
    applyFilter(filterName);
  };

  const slideLeft = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const slideRight = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <div className="flex items-center justify-center gap-6">
      <MdChevronLeft className="cursor-pointer bg-white rounded-full h-10 w-10" onClick={slideLeft} />
      <div ref={filtersContainerRef} className="flex gap-10 overflow-x-auto">
        {Object.keys(imageFilters).slice(startIndex, endIndex).map((key) => (
          <Image
            isZoomed
            key={key}
            width={100}
            height={100}
            alt={imageFilters[key].name}
            src={imageUrl}
            className="cursor-pointer hover:opacity-80"
            style={{ filter: imageFilters[key].filter }}
            onClick={() => applyFilterHandler(key)}
          />
        ))}
      </div>
      <MdChevronRight className="cursor-pointer bg-white rounded-full h-10 w-10" onClick={slideRight} />
    </div>
  );
};

export default ApplyFilters;
