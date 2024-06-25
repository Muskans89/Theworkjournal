import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface Coupon {
  id: string;
  code: string;
  description: string;
  discount: number;
  expiryDate: string;
  status: string;
}

const CouponManagementPage: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchCoupons = async () => {
      const fetchedCoupons: Coupon[] = [
        {
          id: '1',
          code: 'WELCOME10',
          description: '10% off on your first purchase',
          discount: 10,
          expiryDate: '12/31/2023',
          status: 'Active',
        },
        {
          id: '2',
          code: 'SUMMER20',
          description: '20% off on summer collection',
          discount: 20,
          expiryDate: '06/30/2023',
          status: 'Expired',
        },
        {
          id: '3',
          code: 'FALL15',
          description: '15% off on fall collection',
          discount: 15,
          expiryDate: '09/30/2023',
          status: 'Active',
        },
      ];
      setCoupons(fetchedCoupons);
    };

    fetchCoupons();
  }, []);

  const handleEditClick = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
    setCode(coupon.code);
    setDescription(coupon.description);
    setDiscount(coupon.discount.toString());
    setExpiryDate(coupon.expiryDate);
    setStatus(coupon.status);
  };

  const handleDeleteClick = (id: string) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCoupon) {
      const updatedCoupons = coupons.map((coupon) =>
        coupon.id === selectedCoupon.id
          ? { ...coupon, code, description, discount: parseFloat(discount), expiryDate, status }
          : coupon
      );
      setCoupons(updatedCoupons);
      setSelectedCoupon(null);
      resetForm();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'code') setCode(value);
    if (name === 'description') setDescription(value);
    if (name === 'discount') setDiscount(value);
    if (name === 'expiryDate') setExpiryDate(value);
    if (name === 'status') setStatus(value);
  };

  const resetForm = () => {
    setCode('');
    setDescription('');
    setDiscount('');
    setExpiryDate('');
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
          <section id="manageCoupons">
            <h2 className="text-3xl font-bold mb-6">Coupons</h2>
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
                    <option>Expired</option>
                  </select>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                    <th className="py-3 px-6 text-left">COUPON ID</th>
                    <th className="py-3 px-6 text-left">CODE</th>
                    <th className="py-3 px-6 text-left">DESCRIPTION</th>
                    <th className="py-3 px-6 text-left">DISCOUNT</th>
                    <th className="py-3 px-6 text-left">EXPIRY DATE</th>
                    <th className="py-3 px-6 text-left">STATUS</th>
                    <th className="py-3 px-6 text-left">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {coupons.map((coupon) => (
                    <tr
                      key={coupon.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left">{coupon.id}</td>
                      <td className="py-3 px-6 text-left">{coupon.code}</td>
                      <td className="py-3 px-6 text-left">{coupon.description}</td>
                      <td className="py-3 px-6 text-left">{coupon.discount}%</td>
                      <td className="py-3 px-6 text-left">{coupon.expiryDate}</td>
                      <td className="py-3 px-6 text-left">{coupon.status}</td>
                      <td className="py-3 px-6 text-left">
                        <button
                          onClick={() => handleEditClick(coupon)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(coupon.id)}
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
            {selectedCoupon && (
              <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-6">Update Coupon</h2>
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="code"
                    >
                      Code
                    </label>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value={code}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="discount">
                      Discount
                    </label>
                    <input
                      type="number"
                      id="discount"
                      name="discount"
                      value={discount}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={expiryDate}
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
                    Update Coupon
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

export default CouponManagementPage;