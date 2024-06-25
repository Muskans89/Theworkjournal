import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import productimage1 from '../assets/organic.png'
import productimage2 from '../assets/handmade.png'

interface WishlistItem {
  id: string;
  productName: string;
  productImage: string;
  productPrice: number;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    { id: '1', productName: 'Product 1', productImage: productimage1, productPrice: 99.99 },
    { id: '2', productName: 'Product 2', productImage: productimage2, productPrice: 149.99 }
  ]); // Example wishlist items

  const handleRemoveItem = (itemId: string) => {
    setWishlist(wishlist.filter(item => item.id !== itemId));
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 md:p-12 w-full md:w-2/3 lg:w-1/3 mx-auto rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-6">Wishlist</h2>
          {wishlist.length === 0 ? (
            <p className="text-center text-gray-600">Your wishlist is empty.</p>
          ) : (
            <div className="space-y-4">
              {wishlist.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
                  <img src={item.productImage} alt={item.productName} className="w-16 h-16 rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.productName}</h3>
                    <p className="text-gray-600">${item.productPrice.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Wishlist;
