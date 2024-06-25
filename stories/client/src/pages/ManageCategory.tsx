
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface Category {
  id: string;
  categoryName: string;
  description: string;
}

const ManageCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories: Category[] = [
        {
          id: '1',
          categoryName: 'Footwear',
          description: 'All types of footwear including sports shoes, casual shoes, etc.',
        },
        {
          id: '2',
          categoryName: 'Apparel',
          description: 'Clothing items including t-shirts, jeans, and more.',
        },
        {
          id: '3',
          categoryName: 'Accessories',
          description: 'Various accessories including hats, belts, and more.',
        },
        {
          id: '4',
          categoryName: 'Electronics',
          description: 'Electronic items including gadgets, devices, and more.',
        },
      ];
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  const handleEditClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleDeleteClick = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory) {
      const updatedCategories = categories.map((category) =>
        category.id === selectedCategory.id ? selectedCategory : category
      );
      setCategories(updatedCategories);
      setSelectedCategory(null);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (selectedCategory) {
      const { name, value } = e.target;
      setSelectedCategory({ ...selectedCategory, [name]: value });
    }
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Categories</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              New Category
            </button>
          </div>
          <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                  <th className="py-3 px-6 text-left">CATEGORY NAME</th>
                  <th className="py-3 px-6 text-left">DESCRIPTION</th>
                  <th className="py-3 px-6 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {categories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{category.categoryName}</td>
                    <td className="py-3 px-6 text-left">{category.description}</td>
                    <td className="py-3 px-6 text-left">
                      <button
                        onClick={() => handleEditClick(category)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(category.id)}
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
          {selectedCategory && (
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
              <h2 className="text-2xl font-bold mb-6">Update Category</h2>
              <form onSubmit={handleUpdateSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="categoryName"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    name="categoryName"
                    value={selectedCategory.categoryName}
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
                    value={selectedCategory.description}
                    onChange={handleInputChange}
                    className="p-3 bg-gray-200 rounded w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
                >
                  Update Category
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
      <ContactUs />
    </>
  );
};

export default ManageCategories;