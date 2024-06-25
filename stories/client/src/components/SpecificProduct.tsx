import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import ContactUs from './ContactUs';

const SpecificProduct: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>('https://dummyimage.com/400x400');

  const images = [
    'https://dummyimage.com/400x400',
    'https://dummyimage.com/401x401',
    'https://dummyimage.com/402x402',
    'https://dummyimage.com/403x403'
  ];

  const relatedProducts = [
    'https://dummyimage.com/400x500',
    'https://dummyimage.com/400x500',
    'https://dummyimage.com/400x500',
    'https://dummyimage.com/400x500'
  ];

  const handleAddToCart = () => {
    // Show success toast
    toast.success("Item added to cart successfully!");
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <section className="text-gray-600 border-customDarkBlue border-2 top-5 border-r-0 border-l-0 border-b-0 overflow-hidden">
        <div className="container mx-auto flex px-5 py-3 mb-10 md:flex-row flex-col items-center">
          <div className="lg:w-1/2 w-full flex flex-col lg:flex-row">
            <div className="hidden md:flex md:flex-col justify-center items-center space-y-4 mr-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  alt={`product thumbnail ${index}`}
                  className="w-24 h-24 object-cover object-center rounded cursor-pointer"
                  src={img}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="w-full h-96 flex items-center justify-center">
              <img alt="ecommerce" className="object-cover object-center rounded" src={selectedImage} />
            </div>
            <div className="flex md:hidden flex-row justify-center items-center space-x-4 mt-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  alt={`product thumbnail ${index}`}
                  className="w-16 h-16 object-cover object-center rounded cursor-pointer"
                  src={img}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 font-custom8 tracking-widest">BATHROBE</h2>
            <h1 className="text-gray-900 text-3xl title-font font-custom6 mb-1">PRODUCT NAME</h1>
            <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
            <div className="mt-6 border-customLightBlue border-2 border-r-0 border-l-0">
              <h2 className="text-lg font-bold mb-2 mt-4">ADD PERSONALISATION</h2>
              <input
                className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Add your name here"
              />
              <div className="flex mt-6 mb-5">
                <button
                  className="flex ml-auto text-white text-center bottom-6 bg-indigo-500 w-full border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded justify-center"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2">PRODUCT DETAILS</h2>
              <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customLightBlue py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl mb-6 font-custom6">YOU MAY ALSO LIKE</h2>
          <div className="flex justify-center space-x-4">
            {relatedProducts.map((product, index) => (
              <div key={index} className="w-1/4">
                <img className="object-cover object-center w-full h-full" src={product} alt={`related product ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default SpecificProduct;