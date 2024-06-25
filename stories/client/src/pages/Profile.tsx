import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import Header from '@components/Header';
import ContactUs from '@components/ContactUs';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<{ fullName: string, email: string } | null>(null);
  const [orderHistory, setOrderHistory] = useState<any[]>([]);

  useEffect(() => {
    // Fetch user and order data from your backend here
    // This is just a placeholder for the example
    const fetchUserData = async () => {
      const userData = {
        fullName: "John Doe",
        email: "john@example.com",
        orders: [
          { id: '123', date: '2024-06-24', total: '$100.00' },
          { id: '124', date: '2024-06-23', total: '$150.00' },
        ],
      };
      setUser({ fullName: userData.fullName, email: userData.email });
      setOrderHistory(userData.orders);
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    setUser(null);
    setOrderHistory([]);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">My Account</h2>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Order History</h3>
            {orderHistory.length > 0 ? (
              <ul>
                {orderHistory.map((order, index) => (
                  <li key={index} className="mb-2">
                    <div className="p-4 border rounded-lg">
                      <p>Order ID: {order.id}</p>
                      <p>Date: {order.date}</p>
                      <p>Total: {order.total}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You have not placed any orders yet</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Account Details</h3>
              <button
                onClick={handleLogout}
                className="text-blue-500 hover:underline"
              >
                Logout
              </button>
            </div>
            <div className="flex items-center mb-4">
              <FaUser className="text-xl mr-2" />
              <p>{user ? user.fullName : 'Guest'}</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-2" />
              <p>{user ? user.email : 'No email'}</p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default UserProfile;