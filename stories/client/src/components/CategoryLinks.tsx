import React from 'react';
import Bath from '../assets/bed.jpg';
import Bedding from '../assets/bed.jpg';
import Kids from '../assets/bed.jpg';
import HomeAccent from '../assets/bed.jpg';
import './CategoryLinks.css'; // Import your CSS file for styles

const CategoryLinks: React.FC = () => {
  const categories = [
    { name: 'Bath', imageUrl: Bath },
    { name: 'Home Accents', imageUrl: HomeAccent },
    { name: 'Bedding', imageUrl: Bedding },
    { name: 'Kids', imageUrl: Kids },
  ];

  return (
    <section className="py-8  relative px-4">
      <div className="container mx-auto px-6 text-center border-2 border-yellow-500 relative -z-10 border-b-0">
        <h2 className="text-2xl mb-4 ml-5 inline-block bg-white font-custom6 px-5 relative -top-5">
          SHOP BY CATEGORY
        </h2>
        <div className="-top-24 left-0 right-0 h-8"></div>
        <div className="overflow-x-auto sm:overflow-x-hidden">
          <div className="flex sm:flex-wrap md:flex-nowrap gap-4 mt-4 px-10 category-list">
            {categories.map(({ name, imageUrl }) => (
              <div key={name} className="relative group mb-20">
                <a href={`/${name.toLowerCase().replace(' ', '-')}`}>
                  <div className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded group-hover:opacity-75 transition-opacity duration-300">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
                <p className="mt-2 text-center text-lg sm:text-xl font-custom6 text-black bg-opacity-50 px-2 py-1 rounded">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 -top-36"></div>
      </div>
    </section>
  );
};

export default CategoryLinks;