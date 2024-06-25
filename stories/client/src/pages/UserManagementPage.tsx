import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface User {
  uid: string;
  displayName: string;
  email: string;
}

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);
  const [showManageUsers, setShowManageUsers] = useState(true);

  useEffect(() => {
    // Fetch users from your backend
    const fetchUsers = async () => {
      // Replace with your backend logic to fetch users
      const userList: User[] = [
        { uid: '1', displayName: 'John Doe', email: 'john@example.com' },
        { uid: '2', displayName: 'Jane Smith', email: 'jane@example.com' }
      ];
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setFullName(user.displayName);
    setEmail(user.email);
  };

  const handleDeleteClick = async (uid: string) => {
    // Replace with your backend logic to delete a user
    setUsers(users.filter(user => user.uid !== uid));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUser) {
      // Replace with your backend logic to update a user
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

  const handleAddUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your backend logic to add a new user
    const newUser = { uid: Date.now().toString(), displayName: fullName, email };
    setUsers([...users, newUser]);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-1/5 bg-gray-800 text-white">
          <nav className="mt-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => { setShowAddUser(true); setShowManageUsers(false); }}>
                <a href="#addUser">Add User</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700" onClick={() => { setShowAddUser(false); setShowManageUsers(true); }}>
                <a href="#manageUsers">Manage Users</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          {showAddUser && (
            <section id="addUser" className="mb-10">
              <h2 className="text-3xl font-bold mb-6">Add User</h2>
              <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <form onSubmit={handleAddUserSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="p-3 bg-gray-200 rounded w-full italic focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-3 bg-gray-200 rounded w-full italic focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="p-3 bg-gray-200 rounded w-full italic focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded w-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add User
                  </button>
                </form>
              </div>
            </section>
          )}

          {showManageUsers && (
            <section id="manageUsers">
              <h2 className="text-3xl font-bold mb-6">Manage Users</h2>
              <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl font-semibold mb-6">Users List</h2>
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
                  <h2 className="text-2xl font-semibold mb-6">Update User</h2>
                  <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
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
                      <label className="block text-sm font-semibold mb-2" htmlFor="email">
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
                      <label className="block text-sm font-semibold mb-2" htmlFor="password">
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
            </section>
          )}
        </main>
      </div>
      <ContactUs />
    </>
  );
};

export default UserManagementPage;