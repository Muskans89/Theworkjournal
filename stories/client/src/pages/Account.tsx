import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

const AccountPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('userInformation');

  const handleDeleteAccount = () => {
    // Add logic to delete the account
    console.log('Account deleted');
  };

  const wishlistItems = [
    'Wishlist Item 1',
    'Wishlist Item 2',
    'Wishlist Item 3'
  ];

  const pastOrders = [
    { orderId: '1', date: '01/01/2023', total: '$100', status: 'Delivered', items: ['Product 1', 'Product 2'] },
    { orderId: '2', date: '02/01/2023', total: '$150', status: 'Processing', items: ['Product 3', 'Product 4'] },
    { orderId: '3', date: '03/01/2023', total: '$200', status: 'Shipped', items: ['Product 5', 'Product 6'] }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'userInformation':
        return (
          <div className="bg-white rounded-lg p-8 flex flex-col mb-10">
            <h2 className="text-2xl font-medium mb-5">User Information</h2>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 md:pr-2">
                <label htmlFor="first-name" className="leading-7 text-sm text-gray-600">First Name</label>
                <input type="text" id="first-name" name="first-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="w-full md:w-1/2 md:pl-2 mt-4 md:mt-0">
                <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="text" id="last-name" name="last-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="leading-7 text-sm text-gray-600">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
          </div>
        );
      case 'wishlist':
        return (
          <div className="bg-white rounded-lg p-8 flex flex-col mb-10">
            <h2 className="text-2xl font-medium mb-5">Wishlist</h2>
            <ul>
              {wishlistItems.map((item, index) => (
                <li key={index} className="mb-4">{item}</li>
              ))}
            </ul>
          </div>
        );
      case 'pastOrders':
        return (
          <div className="bg-white rounded-lg p-8 flex flex-col mb-10">
            <h2 className="text-2xl font-medium mb-5">Past Orders</h2>
            <ul>
              {pastOrders.map(order => (
                <li key={order.orderId} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span>Order ID: {order.orderId}</span>
                    <span>Date: {order.date}</span>
                    <span>Total: {order.total}</span>
                    <span>Status: {order.status}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Items:</h3>
                    <ul className="list-disc pl-5">
                      {order.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'accountActions':
        return (
          <div className="bg-white rounded-lg p-8 flex flex-col mb-10">
            <h2 className="text-2xl font-medium mb-5">Account Actions</h2>
            <button onClick={handleDeleteAccount} className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mb-4">Delete Account</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto px-5 py-24 flex">
          <div className="w-1/4">
            <div className="bg-white rounded-lg p-4 shadow-md mb-6">
              <button onClick={() => setActiveSection('userInformation')} className={`w-full text-left px-4 py-2 mb-2 ${activeSection === 'userInformation' ? 'bg-gray-300' : 'bg-gray-100'}`}>User Information</button>
              <button onClick={() => setActiveSection('wishlist')} className={`w-full text-left px-4 py-2 mb-2 ${activeSection === 'wishlist' ? 'bg-gray-300' : 'bg-gray-100'}`}>Wishlist</button>
              <button onClick={() => setActiveSection('pastOrders')} className={`w-full text-left px-4 py-2 mb-2 ${activeSection === 'pastOrders' ? 'bg-gray-300' : 'bg-gray-100'}`}>Past Orders</button>
              <button onClick={() => setActiveSection('accountActions')} className={`w-full text-left px-4 py-2 mb-2 ${activeSection === 'accountActions' ? 'bg-gray-300' : 'bg-gray-100'}`}>Account Actions</button>
            </div>
          </div>
          <div className="w-3/4">
            {renderSection()}
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default AccountPage;