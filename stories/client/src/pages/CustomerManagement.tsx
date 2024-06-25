import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

const CustomerManagementPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      const fetchedCustomers: Customer[] = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          address: '123 Main St',
          status: 'Active',
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '987-654-3210',
          address: '456 Oak St',
          status: 'Inactive',
        },
        {
          id: '3',
          name: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          phone: '555-555-5555',
          address: '789 Pine St',
          status: 'Active',
        },
      ];
      setCustomers(fetchedCustomers);
    };

    fetchCustomers();
  }, []);

  const handleEditClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setAddress(customer.address);
    setStatus(customer.status);
  };

  const handleDeleteClick = (id: string) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCustomer) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === selectedCustomer.id
          ? { ...customer, name, email, phone, address, status }
          : customer
      );
      setCustomers(updatedCustomers);
      setSelectedCustomer(null);
      resetForm();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'address') setAddress(value);
    if (name === 'status') setStatus(value);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setStatus('');
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-1/5 bg-gray-800 text-white">
          <nav className="mt-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/manageprod">Products</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/managecoupon">Coupons</a>
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
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          <section id="manageCustomers">
            <h2 className="text-3xl font-bold mb-6">Customers</h2>
            <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 border border-gray-300 rounded mb-4 md:mb-0"
                />
                <div className="flex space-x-4">
                  <select className="p-2 border border-gray-300 rounded">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                    <th className="py-3 px-6 text-left">CUSTOMER ID</th>
                    <th className="py-3 px-6 text-left">NAME</th>
                    <th className="py-3 px-6 text-left">EMAIL</th>
                    <th className="py-3 px-6 text-left">PHONE</th>
                    <th className="py-3 px-6 text-left">ADDRESS</th>
                    <th className="py-3 px-6 text-left">STATUS</th>
                    <th className="py-3 px-6 text-left">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {customers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left">{customer.id}</td>
                      <td className="py-3 px-6 text-left">{customer.name}</td>
                      <td className="py-3 px-6 text-left">{customer.email}</td>
                      <td className="py-3 px-6 text-left">{customer.phone}</td>
                      <td className="py-3 px-6 text-left">{customer.address}</td>
                      <td className="py-3 px-6 text-left">{customer.status}</td>
                      <td className="py-3 px-6 text-left">
                        <button
                          onClick={() => handleEditClick(customer)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(customer.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {selectedCustomer && (
              <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-6">Update Customer</h2>
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      id="status"
                      name="status"
                      value={status}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
                  >
                    Update Customer
                  </button>
                </form>
              </div>
            )}
          </section>
        </main>
      </div>
      <ContactUs />
    </>
  );
};

export default CustomerManagementPage;