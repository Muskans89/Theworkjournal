import React, { useRef, useEffect, useState } from 'react';
import PlaceholderImage from '../assets/bedsheet.jpg';
import PlaceholderImage2 from '../assets/bedsheet4.jpg';
import PlaceholderImage3 from '../assets/bedsheet6.jpg';
import PlaceholderImage4 from '../assets/bedsheet8.jpg';
import PlaceholderImage5 from '../assets/bedsheet12.jpg';
import PlaceholderImage6 from '../assets/bedsheet14.jpg';
import PlaceholderImage7 from '../assets/bedsheet16.jpg';
import PlaceholderImage8 from '../assets/bedsheet18.jpg';
import PlaceholderImage9 from '../assets/bedsheet20.jpg';
import PlaceholderImage10 from '../assets/bedsheet22.jpg';
import PlaceholderImage11 from '../assets/bedsheet24.jpg';
import PlaceholderImage12 from '../assets/bedsheet27.jpg';
import PlaceholderImage13 from '../assets/bedsheet30.jpg';

const ProductList: React.FC = () => {
  const products = [
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage2 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage3 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage4 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage5 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage6 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage7 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage8 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage9 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage10 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage11 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage12 },
    { name: 'Floral Bedcovers', price: '12999 INR', imageUrl: PlaceholderImage13 },
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1; // Adjust scroll speed as needed

  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let requestId: number;

    const autoScroll = () => {
      if (scrollContainer.current && isAutoScrolling) {
        scrollContainer.current.scrollLeft += scrollSpeed;

        // Check if scrolled to the end
        if (scrollContainer.current.scrollLeft >= scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth) {
          // Reset back to the start
          scrollContainer.current.scrollLeft = 0;
        }
      }

      requestId = requestAnimationFrame(autoScroll);
    };

    requestId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(requestId);
  }, [isAutoScrolling]);

  const handleScrollLeft = () => {
    if (scrollContainer.current) {
      setIsAutoScrolling(false); // Pause auto-scrolling when manually scrolling
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });

      // Resume auto-scrolling after 2 seconds
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainer.current) {
      setIsAutoScrolling(false); // Pause auto-scrolling when manually scrolling
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });

      // Resume auto-scrolling after 2 seconds
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
    }
  };

  return (
    <section className="py-4 relative bg-customLightBlue -top-10">
      <div className="mx-auto w-full px-4">
        <h2 className="md:text-5xl text-3xl mb-8 p-5 font-custom6 text-center">New Arrivals</h2>
        <button onClick={handleScrollLeft} className="absolute top-1/2 left-0 ml-2 p-2 rounded-full transform -translate-y-1/2">
          ❮ {/* Left arrow */}
        </button>
        <div className="flex overflow-x-scroll w-full mx-auto" style={{ overflowX: 'hidden' }} ref={scrollContainer}>
          {products.map((product, index) => (
            <div key={index} className="p-1 text-left flex-shrink-0" style={{ minWidth: '300px', height: '400px' }}>
              <img src={product.imageUrl} alt={product.name} className="w-full h-3/4 object-cover mb-2" />
              <p className="text-black hover:text-customDarkBlue">{product.name}</p>
              <p className="text-black cursor-pointer hover:text-customDarkBlue">{product.price}</p>
            </div>
          ))}
        </div>
        <button onClick={handleScrollRight} className="absolute top-1/2 right-0 mr-2  p-2 rounded-full  transform -translate-y-1/2">
          ❯ {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};

export default ProductList;