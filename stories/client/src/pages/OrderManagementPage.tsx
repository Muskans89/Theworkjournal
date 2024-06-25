import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: string;
  items: string[];
}

const OrderManagementPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');
  const [status, setStatus] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [showManageOrders, setShowManageOrders] = useState(true);

  console.log(setShowManageOrders);

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders: Order[] = [
        {
          id: '1',
          customerName: 'John Doe',
          date: '01/01/2023',
          total: 100.0,
          status: 'Delivered',
          items: ['Product 1', 'Product 2'],
        },
        {
          id: '2',
          customerName: 'Jane Smith',
          date: '02/01/2023',
          total: 150.0,
          status: 'Processing',
          items: ['Product 3', 'Product 4'],
        },
        {
          id: '3',
          customerName: 'Alice Johnson',
          date: '03/01/2023',
          total: 200.0,
          status: 'Shipped',
          items: ['Product 5', 'Product 6'],
        },
      ];
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []);

  const handleEditClick = (order: Order) => {
    setSelectedOrder(order);
    setCustomerName(order.customerName);
    setDate(order.date);
    setTotal(order.total.toString());
    setStatus(order.status);
    setItems(order.items);
  };

  const handleDeleteClick = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOrder) {
      const updatedOrders = orders.map((order) =>
        order.id === selectedOrder.id
          ? { ...order, customerName, date, total: parseFloat(total), status, items }
          : order
      );
      setOrders(updatedOrders);
      setSelectedOrder(null);
      resetForm();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'customerName') setCustomerName(value);
    if (name === 'date') setDate(value);
    if (name === 'total') setTotal(value);
    if (name === 'status') setStatus(value);
  };

  const resetForm = () => {
    setCustomerName('');
    setDate('');
    setTotal('');
    setStatus('');
    setItems([]);
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
          {showManageOrders && (
            <section id="manageOrders">
              <h2 className="text-3xl font-bold mb-6">Orders</h2>
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
                      <option>Delivered</option>
                      <option>Processing</option>
                      <option>Shipped</option>
                    </select>
                  </div>
                </div>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                      <th className="py-3 px-6 text-left">ORDER ID</th>
                      <th className="py-3 px-6 text-left">CUSTOMER NAME</th>
                      <th className="py-3 px-6 text-left">DATE</th>
                      <th className="py-3 px-6 text-left">TOTAL</th>
                      <th className="py-3 px-6 text-left">STATUS</th>
                      <th className="py-3 px-6 text-left">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-left">{order.id}</td>
                        <td className="py-3 px-6 text-left">{order.customerName}</td>
                        <td className="py-3 px-6 text-left">{order.date}</td>
                        <td className="py-3 px-6 text-left">${order.total.toFixed(2)}</td>
                        <td className="py-3 px-6 text-left">{order.status}</td>
                        <td className="py-3 px-6 text-left">
                          <button
                            onClick={() => handleEditClick(order)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(order.id)}
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
              {selectedOrder && (
                <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
                  <h2 className="text-2xl font-bold mb-6">Update Order</h2>
                  <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-semibold mb-2"
                        htmlFor="customerName"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={customerName}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-200 rounded w-full"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-semibold mb-2"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        type="text"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-200 rounded w-full"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" htmlFor="total">
                        Total
                      </label>
                      <input
                        type="number"
                        id="total"
                        name="total"
                        value={total}
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
                      Update Order
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

export default OrderManagementPage;