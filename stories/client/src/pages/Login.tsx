import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your background image
import backgroundImage from '../assets/banner2.webp'; // Replace with your image path

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const userCredentials = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Store user data securely after successful login
        localStorage.setItem('userData', JSON.stringify(data)); // Use localStorage or sessionStorage here

        toast.success('Login successful!');
        setTimeout(() => navigate('/'), 3000); // Redirect after 3 seconds
      } else {
        toast.error(data.errors[0].msg);
      }
    } catch (err) {
      console.error('Error logging in:', err);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      {/* Use inline style to set background image */}
      <div
        className="flex justify-center items-center min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative bg-white p-8 md:p-12 w-full md:w-1/3 mx-auto rounded-lg shadow-xl">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-full p-4">
            <FaUser className="text-4xl text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 mt-8">Login</h2>

          <form className="w-full" onSubmit={handleEmailSignIn}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 bg-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-3 bg-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded mt-4 w-full hover:from-purple-500 hover:to-indigo-500 transition duration-300"
            >
              Submit
            </button>
          </form>

          <Link
            to="/forgot-password"
            className="block text-center text-gray-500 mt-4 hover:text-gray-700 transition duration-300"
          >
            Forgot your password?
          </Link>

          <Link
            to="/register"
            className="block bg-gray-700 text-white px-6 py-3 rounded mt-4 text-center hover:bg-gray-600 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      <ContactUs />
      <ToastContainer />
    </>
  );
};

export default Login;
