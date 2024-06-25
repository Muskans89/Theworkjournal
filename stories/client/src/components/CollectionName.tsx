import React from 'react';
import CollectionImage from '../assets/collection2.jpg'; // Replace with actual image path
import './CollectionName.css'

const CollectionName: React.FC = () => {
  return (
    <>
    <div className="relative py-8 container mx-auto bg-white text-center border-2 md:px-3 border-yellow-500 border-b-0 pt-10 mb-32 z-10">
      <div className="relative inline-block bg-white z-20 -top-35">
        <p className="text-3xl  relative bg-white px-4 -top-16">
          <span className="relative z-20 font-custom6">COLLECTION NAME</span>
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-10 bg-white"></span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1 w-10 bg-white"></span>
        </p>
      </div>
      </div>
      <div className="flex justify-center items-center w-screen h-screen -mt-24 -z-20 ">
      <div className="w-full h-full flex justify-center items-center mx-auto -top-28 z-10 mb-32">
        <img
          src={CollectionImage}
          alt="Collection"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          onClick={() => { /* Navigate to Collection page */ }}
        />
      </div>
    </div>
    
    </>
  );
};

export default CollectionName;