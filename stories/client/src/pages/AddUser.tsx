import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

const AddUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your own user creation logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/banner2.webp)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Add User</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 p-3 block w-full rounded-md bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-3 block w-full rounded-md bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-3 block w-full rounded-md bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gray-700 text-white px-6 py-3 rounded mt-4 text-center hover:bg-gray-600 transition duration-300"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default AddUser;
