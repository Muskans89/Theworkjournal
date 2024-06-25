import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import banner1 from '../assets/banner1.webp';
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.webp';
import banner4 from '../assets/banner4.webp';
import './Banner.css'; // Import the CSS file

const Header = () => {
  const [current, setCurrent] = useState(0);
  const images = [banner1, banner2, banner3, banner4]; // Replace with your banner paths

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Home page banner ${index + 1}`}
          className={`carousel-image ${index === current ? 'active' : ''}`}
        />
      ))}
      <button
        onClick={prevImage}
        className="carousel-button left"
      >
        <FiChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextImage}
        className="carousel-button right"
      >
        <FiChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Header;
