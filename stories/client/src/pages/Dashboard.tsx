import React, { useState } from 'react';
import { FaShoppingCart, FaDollarSign, FaBoxOpen, FaUsers } from 'react-icons/fa';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('overview');
  const [users, setUsers] = useState<{ uid: string; displayName: string; email: string }[]>([
    { uid: '1', displayName: 'John Doe', email: 'john@example.com' },
    { uid: '2', displayName: 'Jane Smith', email: 'jane@example.com' },
  ]); // Example user data
  const [selectedUser, setSelectedUser] = useState<{ uid: string; displayName: string; email: string } | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEditClick = (user: { uid: string; displayName: string; email: string }) => {
    setSelectedUser(user);
    setFullName(user.displayName);
    setEmail(user.email);
  };

  const handleDeleteClick = (uid: string) => {
    setUsers(users.filter(user => user.uid !== uid));
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUser) {
      setUsers(users.map(user => (user.uid === selectedUser.uid ? { ...user, displayName: fullName, email } : user)));
      setSelectedUser(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-1/5 bg-gray-800 text-white">
          <nav className="mt-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => setSelectedSection('overview')}>
                <a href="#">Overview</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/manageuser')}>
                <a href="#">Users</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/managecoupon')}>
                <a href="#">Coupons</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/manageprod')}>
                <a href="#">Products</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/managecat')}>
                <a href="#">Categories</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/customers')}>
                <a href="#">Customers</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => navigate('/orders')}>
                <a href="#">Orders</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          {selectedSection === 'overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-500 p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-custom4 mb-2">Total Sales</h2>
                    <p className="text-xl">$12,340</p>
                  </div>
                  <FaDollarSign className="text-4xl" />
                </div>
                <div className="bg-green-500 p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-custom4 mb-2">Orders</h2>
                    <p className="text-xl">567</p>
                  </div>
                  <FaShoppingCart className="text-4xl" />
                </div>
                <div className="bg-yellow-500 p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-custom4 mb-2">Products Sold</h2>
                    <p className="text-xl">1,234</p>
                  </div>
                  <FaBoxOpen className="text-4xl" />
                </div>
                <div className="bg-red-500 p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-custom4 mb-2">Customers</h2>
                    <p className="text-xl">890</p>
                  </div>
                  <FaUsers className="text-4xl" />
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-custom6 mb-4">Recent Orders</h2>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <ul>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">Order #12345 - $250.00</p>
                      <p className="text-sm">10 minutes ago</p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">Order #12344 - $150.00</p>
                      <p className="text-sm">30 minutes ago</p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">Order #12343 - $300.00</p>
                      <p className="text-sm">1 hour ago</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-custom6 mb-4">Top-Selling Products</h2>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <ul>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">Product A - 200 units</p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">Product B - 150 units</p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">Product C - 100 units</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-custom6 mb-4">Notifications</h2>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <ul>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">New user registered: Jane Smith</p>
                      <p className="text-sm">1 hour ago</p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">System update completed</p>
                      <p className="text-sm">Yesterday</p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg font-custom4">New review on Product A</p>
                      <p className="text-sm">2 days ago</p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {selectedSection === 'manageUsers' && (
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-custom6 mb-6">Users List</h2>
              <ul>
                {users.map(user => (
                  <li key={user.uid} className="mb-4 flex justify-between items-center">
                    <span>{user.displayName}</span>
                    <div>
                      <button
                        onClick={() => handleEditClick(user)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(user.uid)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {selectedUser && (
                <div className="mt-10">
                  <h2 className="text-2xl font-custom6 mb-6">Update User</h2>
                  <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={handleInputChange}
                        className="p-3 bg-slate-100 rounded w-full italic"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="p-3 bg-slate-100 rounded w-full italic"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="p-3 bg-slate-100 rounded w-full italic"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
                    >
                      Update User
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {selectedSection === 'manageProducts' && (
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              {/* Placeholder for Manage Products content */}
              <h2 className="text-2xl font-custom6 mb-6">Manage Products</h2>
              <p className="text-lg">Product management functionality will go here.</p>
            </div>
          )}

          {selectedSection === 'manageCategories' && (
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              {/* Placeholder for Manage Categories content */}
              <h2 className="text-2xl font-custom6 mb-6">Manage Categories</h2>
              <p className="text-lg">Category management functionality will go here.</p>
            </div>
          )}
        </main>
      </div>
      <ContactUs />
    </>
  );
};

export default Dashboard;