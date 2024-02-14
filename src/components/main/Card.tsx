'use client'

import { ImageData, imageData } from '@/constants';
import React, { useState } from 'react'

const Card = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 mt-40 mb-16">
      <div className="mb-6">
        <h2>Publicidad</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageData.map((card: ImageData) => (
          <div
            key={card.id}
            className="border border-gray-300 p-4 rounded-lg bg-gray-100 hover:transform hover:scale-105 cursor-pointer"
            onClick={() => openImage(card.src)}
          >
            {/* <div className="text-center mb-2">
              <h2 className="text-xl font-bold">{card.title}</h2>
            </div> */}
            <img
              src={card.src}
              alt={`Imagen ${card.id}`}
              className="w-full h-auto rounded-md mb-2"
            />
            {/* <div className="text-center">
              <p>{card.text}</p>
            </div> */}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeImage}
        >
          <div className="relative w-1/2">
            <div className="absolute top-0 right-0 m-4">
              <button
                className="text-white text-xl bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
                onClick={closeImage}
              >
                X
              </button>
            </div>
            <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card 