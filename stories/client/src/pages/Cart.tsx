import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface CartItem {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', productName: 'Nike revolution 5', price: 255.0, quantity: 1, image: 'https://dummyimage.com/100x100' },
    { id: '2', productName: 'Nike react phantom run flyknit 2', price: 718.0, quantity: 2, image: 'https://dummyimage.com/100x100' },
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemoveClick = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCouponApply = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);
    } else if (couponCode === 'DISCOUNT20') {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const getTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return subtotal - (subtotal * discount) / 100;
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <main className="flex-1 p-6">
          <section id="cart">
            <h2 className="text-3xl font-bold mb-6 text-center font-serif tracking-wide leading-tight">Shopping Cart</h2>
            <div className="bg-white shadow rounded-lg p-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 py-4">
                  <img src={item.image} alt={item.productName} className="w-20 h-20 mb-4 md:mb-0 md:mr-4" />
                  <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
                    <div className="md:w-1/4 text-center md:text-left">{item.productName}</div>
                    <div className="md:w-1/4 text-center md:text-left">${item.price.toFixed(2)}</div>
                    <div className="md:w-1/4 text-center md:text-left">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="p-2 border border-gray-300 rounded w-20"
                        min="1"
                      />
                    </div>
                    <div className="md:w-1/4 text-center md:text-left">${(item.price * item.quantity).toFixed(2)}</div>
                    <div className="text-center md:text-left">
                      <button
                        onClick={() => handleRemoveClick(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded mt-4 md:mt-0"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col md:flex-row justify-between mt-6">
                <div className="flex flex-col md:flex-row items-center">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                    className="p-3 bg-gray-200 rounded w-full md:w-auto"
                  />
                  <button
                    onClick={handleCouponApply}
                    className="bg-sky-950 text-white px-6 py-2 rounded mt-4 md:mt-0 md:ml-4 hover:bg-gray-600 transition"
                  >
                    Apply Coupon
                  </button>
                </div>
                <div className="text-center md:text-left mt-6 md:mt-0">
                  <h3 className="text-xl font-semibold">Total: ${getTotal().toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <ContactUs />
    </>
  );
};

export default CartPage;
