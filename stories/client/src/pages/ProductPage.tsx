import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaStar } from 'react-icons/fa';
import ContactUs from '../components/ContactUs';

// Example placeholder images from Lorem Picsum
const placeholderLarge = 'https://picsum.photos/800/600';
const placeholderMedium = 'https://picsum.photos/400/300';
const placeholderSmall = 'https://picsum.photos/200/150';

// Define Product interface
interface Product {
  id: number;
  name: string;
  image: string;
  customizationText: string;
  customizationFont: string;
  customizationPosition: {
    x: number;
    y: number;
  };
}

// Sample product data with customization details
const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    image: placeholderLarge,
    customizationText: 'Custom Text 1',
    customizationFont: 'Arial',
    customizationPosition: { x: 50, y: 50 }
  },
  {
    id: 2,
    name: 'Product 2',
    image: placeholderMedium,
    customizationText: 'Custom Text 2',
    customizationFont: 'Times New Roman',
    customizationPosition: { x: 30, y: 70 }
  },
  {
    id: 3,
    name: 'Product 3',
    image: placeholderSmall,
    customizationText: 'Custom Text 3',
    customizationFont: 'Verdana',
    customizationPosition: { x: 20, y: 80 }
  }
];

const ProductPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [customizationText, setCustomizationText] = useState('');

  const handleImageClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCustomizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomizationText(e.target.value);
  };

  const handleAddToCart = () => {
    // Implement functionality to add to cart with customization and product details
    console.log(`Added to cart: ${selectedProduct.name}, Customization: ${customizationText}`);
  };

  return (
    <>
      <Header />

      {/* Product Details Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Product Image */}
            <div className="md:w-1/2 mb-8 md:mb-0 relative">
              <img
                src={selectedProduct.image}
                alt="Product"
                className="w-full max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              {/* Customization Text Overlay */}
              {customizationText && (
                <div
                  className="absolute bg-white rounded-lg p-2 shadow-md"
                  style={{
                    top: selectedProduct.customizationPosition.y,
                    left: selectedProduct.customizationPosition.x,
                    fontFamily: selectedProduct.customizationFont
                  }}
                >
                  <span className="text-lg text-black">{customizationText}</span>
                </div>
              )}
            </div>

            {/* Product Thumbnails */}
            <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start flex-wrap">
              {products.map((product) => (
                <img
                  key={product.id}
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer m-2 transition-transform duration-300 hover:scale-105"
                  onClick={() => handleImageClick(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customization and Add to Cart Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-gray-500 ml-2">(5 Reviews)</p>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at facilisis tortor. Nam euismod enim nec maximus ullamcorper. Integer id dapibus velit.
              </p>
              <p className="text-2xl text-customLightBlue mb-4">$99.99</p>

              {/* Customization Textbox */}
              <div className="mb-4">
                <label htmlFor="customization" className="block text-gray-700 text-lg mb-2">Customization</label>
                <input
                  type="text"
                  id="customization"
                  value={customizationText}
                  onChange={handleCustomizationChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-customLightBlue"
                />
              </div>

              {/* Add to Cart Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-customLightBlue text-white py-2 px-6 rounded-lg hover:bg-customLightBlueDark transition duration-300"
                >
                  Add to Cart
                </button>
                <button className="border border-gray-300 py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat this card for each similar product */}
            {products.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src={product.image} alt={`Product ${product.id}`} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-lg text-customLightBlue mb-2">$79.99</p>
                  <button className="bg-customLightBlue text-white py-2 px-4 rounded-lg hover:bg-customLightBlueDark transition duration-300">View Details</button>
                </div>
              </div>
            ))}
            {/* End repeat */}
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </>
  );
};

export default ProductPage;