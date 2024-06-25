import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import { FaHome } from 'react-icons/fa';

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative mt-16 flex flex-col items-center justify-center min-h-screen bg-sky-950 text-white p-5">
        <div className="text-center">
          <h1 className="text-6xl font-custom6 mb-4">404</h1>
          <h2 className="text-3xl font-custom4 mb-4">Page Not Found</h2>
          <p className="text-xl mb-8">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-6 py-2 rounded mt-4 inline-flex items-center hover:bg-blue-600 transition"
          >
            <FaHome className="mr-2" />
            Go Back Home
          </Link>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default NotFound;