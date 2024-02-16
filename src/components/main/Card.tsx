'use client'

import { ImageData, imageData, adData, AdData } from '@/constants';
import React, { useState } from 'react'
import VideoPage from '../sub/VideoPage ';

const Card = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const renderAds = () => {
    return adData.map((ad: AdData) => (
      <div
        key={ad.id}
        className="border border-black cursor-pointer rounded-md"
      >
        <img
          src={ad.src}
          alt={`Imagen ${ad.id}`}
          className="w-full h-auto rounded-md"
        />
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 mt-40 mb-16">
      {/* <div className="mb-6">
        <buttonclassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Abrir Modal
        </buttonclassName=>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {renderAds()}
      </div>

      <div className="mb-6 mt-12">
        <h2>Productos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageData.map((card: ImageData) => (
          <div
            key={card.id}
            className="border border-gray-300 p-4 rounded-lg bg-gray-100 hover:transform hover:scale-105 cursor-pointer rounded-md"
            onClick={() => openImage(card.src)}
          >
            <img
              src={card.src}
              alt={`Imagen ${card.id}`}
              className="w-full h-auto rounded-md"
            />
            <div className="text-center">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeImage}
        >
          <div className="relative">
            <button
              className="text-white text-xl bg-red-500 rounded-full w-8 h-8 flex justify-center items-center absolute top-0 right-0 m-4"
              onClick={closeImage}
            >
              X
            </button>
            <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-3/4 rounded-md" style={{ maxWidth: "90vw", maxHeight: "70vh" }} />
          </div>
        </div>
      )}
      {/* <VideoPage /> */}
    </div>
  );
};

export default Card 