import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400 ml-4">Collections</a>
          <a href="#" className="hover:text-gray-400 ml-4">Personalised</a>
          <a href="#" className="hover:text-gray-400 ml-4">Gifting</a>
          <a href="#" className="hover:text-gray-400 ml-4">Account</a>
        </div>
        <div className="mb-4">
          <a href="#" className="hover:text-gray-400">Bath</a>
          <a href="#" className="hover:text-gray-400 ml-4">Bedding</a>
          <a href="#" className="hover:text-gray-400 ml-4">Home Accents</a>
          <a href="#" className="hover:text-gray-400 ml-4">Kids</a>
        </div>
        <p>© 2024 Many Stories. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;