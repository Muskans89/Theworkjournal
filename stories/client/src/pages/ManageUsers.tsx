import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface User {
  uid: string;
  displayName: string;
  email: string;
}

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    // Sample data, replace with actual user data as needed
    { uid: '1', displayName: 'John Doe', email: 'john@example.com' },
    { uid: '2', displayName: 'Jane Smith', email: 'jane@example.com' },
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEditClick = (user: User) => {
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
      setUsers(users.map(user => 
        user.uid === selectedUser.uid ? { ...user, displayName: fullName, email } : user
      ));
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
          <nav className="mt-10 h-full">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/manageprod">Products</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/managecat">Categories</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/orders">Orders</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/customers">Customers</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/managecoupon">Coupons</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="container mx-auto py-10">
            <h1 className="text-4xl font-custom6 mb-10 text-center">Manage Users</h1>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-10">
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
            </div>

            {selectedUser && (
              <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
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
        </main>
      </div>
      <ContactUs />
    </>
  );
};

export default ManageUsers;