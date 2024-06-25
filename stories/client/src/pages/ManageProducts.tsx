import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  images: File[];
}

const ManageProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = [
        {
          id: '1',
          productName: 'Nike revolution 5',
          description: 'Description 1',
          price: 255.0,
          category: 'Category 1',
          images: [],
        },
        {
          id: '2',
          productName: 'Nike react phantom run flyknit 2',
          description: 'Description 2',
          price: 718.0,
          category: 'Category 2',
          images: [],
        },
        {
          id: '3',
          productName: 'Nike react infinity run flyknit',
          description: 'Description 3',
          price: 543.0,
          category: 'Category 3',
          images: [],
        },
        {
          id: '4',
          productName: 'Nike court vision low',
          description: 'Description 4',
          price: 904.0,
          category: 'Category 4',
          images: [],
        },
      ];
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleDeleteClick = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      );
      setProducts(updatedProducts);
      setSelectedProduct(null);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (selectedProduct) {
      const { name, value } = e.target;
      setSelectedProduct({ ...selectedProduct, [name]: value });
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
                <a href="/addproduct">New Product</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/managecat">Categories</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/managecoupon">Coupons</a>
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
            <h2 className="text-3xl font-bold">Products</h2>
            <a href="/addproduct">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              New Product
            </button></a>
            
          </div>
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
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
                <select className="p-2 border border-gray-300 rounded">
                  <option>Product Type</option>
                </select>
              </div>
            </div>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                  <th className="py-3 px-6 text-left">THUMBNAIL</th>
                  <th className="py-3 px-6 text-left">NAME</th>
                  <th className="py-3 px-6 text-left">PRICE</th>
                  <th className="py-3 px-6 text-left">CATEGORY</th>
                  <th className="py-3 px-6 text-left">STOCK</th>
                  <th className="py-3 px-6 text-left">STATUS</th>
                  <th className="py-3 px-6 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <img
                        src="https://dummyimage.com/400x400"
                        alt={product.productName}
                        className="w-10 h-10"
                      />
                    </td>
                    <td className="py-3 px-6 text-left">{product.productName}</td>
                    <td className="py-3 px-6 text-left">${product.price.toFixed(2)}</td>
                    <td className="py-3 px-6 text-left">{product.category}</td>
                    <td className="py-3 px-6 text-left">
                      {Math.floor(Math.random() * 1000)}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          Math.random() > 0.5
                            ? 'bg-green-200 text-green-600'
                            : 'bg-red-200 text-red-600'
                        }`}
                      >
                        {Math.random() > 0.5 ? 'Enabled' : 'Disabled'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <button
                        onClick={() => handleEditClick(product)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(product.id)}
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
          {selectedProduct && (
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
              <h2 className="text-2xl font-bold mb-6">Update Product</h2>
              <form onSubmit={handleUpdateSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="productName"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={selectedProduct.productName}
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
                    value={selectedProduct.description}
                    onChange={handleInputChange}
                    className="p-3 bg-gray-200 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={selectedProduct.price}
                    onChange={handleInputChange}
                    className="p-3 bg-gray-200 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={selectedProduct.category}
                    onChange={handleInputChange}
                    className="p-3 bg-gray-200 rounded w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
                >
                  Update Product
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

export default ManageProducts;