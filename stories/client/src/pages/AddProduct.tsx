import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState<(File | null)[]>([null, null, null, null]);
  const [status, setStatus] = useState('enabled');
  const [visibility, setVisibility] = useState('visible');
  const [manageStock, setManageStock] = useState(true);

  const handleImageChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = [...images];
    if (e.target.files && e.target.files[0]) {
      newImages[index] = e.target.files[0];
    } else {
      newImages[index] = null;
    }
    setImages(newImages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation logic here
    if (!productName || !description || !price || !category || stock <= 0 || images.some(img => img === null)) {
      alert('Please fill out all required fields.');
      return;
    }
    // Proceed with product submission
    console.log({
      productName,
      description,
      price,
      category,
      stock,
      images,
      status,
      visibility,
      manageStock
    });
    // Clear form fields after submission
    clearForm();
  };

  const clearForm = () => {
    setProductName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setStock(0);
    setImages([null, null, null, null]);
    setStatus('enabled');
    setVisibility('visible');
    setManageStock(true);
  };

  return (
    <>
      <Header />
      <div className="relative mt-16 bg-gray-100 text-gray-900 p-5 min-h-screen">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-10 text-center">Create A New Product</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white text-black p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-4">General</h2>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="productName">
                    Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="p-3 bg-gray-200 rounded w-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="price">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="category">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="stock">
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      id="stock"
                      value={stock}
                      onChange={(e) => setStock(parseInt(e.target.value))}
                      className="p-3 bg-gray-200 rounded w-full"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-3 bg-gray-200 rounded w-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {[1, 2, 3, 4].map(index => (
                    <div key={index}>
                      <label className="block text-sm font-semibold mb-2">
                        Product Image {index}
                      </label>
                      <input
                        type="file"
                        onChange={handleImageChange(index - 1)}
                        className="p-3 bg-gray-200 rounded w-full"
                        required
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition"
                >
                  Add Product
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Product Status</h2>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Status</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="status"
                        value="enabled"
                        checked={status === 'enabled'}
                        onChange={() => setStatus('enabled')}
                        className="form-radio"
                      />
                      <span>Enabled</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="status"
                        value="disabled"
                        checked={status === 'disabled'}
                        onChange={() => setStatus('disabled')}
                        className="form-radio"
                      />
                      <span>Disabled</span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Visibility</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="visibility"
                        value="visible"
                        checked={visibility === 'visible'}
                        onChange={() => setVisibility('visible')}
                        className="form-radio"
                      />
                      <span>Visible</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="visibility"
                        value="not_visible"
                        checked={visibility === 'not_visible'}
                        onChange={() => setVisibility('not_visible')}
                        className="form-radio"
                      />
                      <span>Not visible</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Inventory</h2>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Manage stock?</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="manageStock"
                        value="yes"
                        checked={manageStock === true}
                        onChange={() => setManageStock(true)}
                        className="form-radio"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="manageStock"
                        value="no"
                        checked={manageStock === false}
                        onChange={() => setManageStock(false)}
                        className="form-radio"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default AddProduct;
