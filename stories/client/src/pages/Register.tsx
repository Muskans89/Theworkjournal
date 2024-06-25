import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your background image (adjust the path as necessary)
import backgroundImage from '../assets/banner2.webp';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { fullName, email, password, phone, address };

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        // Handle successful registration
        toast.success('Registration successful!');
        setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
      } else {
        // Handle registration errors
        const errorMessage = data?.errors?.[0]?.msg || 'Registration failed. Please try again.';
        toast.error(errorMessage);
      }
    } catch (err) {
      console.error('Error registering user:', err);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header />

      {/* Background image container */}
      <div
        className="relative min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div> {/* Overlay for better text readability */}

        {/* Form container */}
        <div className="relative bg-white p-8 md:p-12 w-full md:max-w-md mx-auto rounded-lg shadow-xl">
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-full p-4 -mt-16">
            <FaUser className="text-4xl text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 mt-8">Register</h2> {/* Adjusted margin here */}
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-medium mb-4 text-gray-700">Join Us!</h3>
          </div>
          <form className="w-full" onSubmit={handleEmailRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="p-3 bg-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
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
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="p-3 bg-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="p-3 bg-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded mt-4 w-full hover:from-purple-500 hover:to-indigo-500 transition duration-300"
            >
              Register
            </button>
            <Link
              to="/login"
              className="block text-center text-gray-500 mt-4 hover:text-gray-700 transition duration-300"
            >
              Already have an account? Sign In
            </Link>
          </form>
        </div>
      </div>

      <ContactUs />
      <ToastContainer />
    </>
  );
};

export default Register;
