import React, { useState } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Product 1', price: 50, quantity: 2, imageUrl: 'https://dummyimage.com/100x100' },
    { id: '2', name: 'Product 2', price: 100, quantity: 1, imageUrl: 'https://dummyimage.com/100x100' },
  ]);

  const [isCheckout, setIsCheckout] = useState(false);

  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in billingInfo) {
      setBillingInfo({ ...billingInfo, [name]: value });
    } else if (name in shippingInfo) {
      setShippingInfo({ ...shippingInfo, [name]: value });
    } else {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add checkout logic here
    console.log({
      billingInfo,
      shippingInfo,
      paymentInfo,
      setCartItems
    });
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(src/assets/banner2.webp)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg mb-10 text-black">
            <h1 className="bg-sky-950 text-white text-center p-2 flex items-center justify-center relative z-10 text-4xl font-custom6 mb-10">Checkout</h1>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-custom6 mb-6">Cart Items</h2>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id} className="mb-4 flex justify-between items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover object-center rounded" />
                    <span>{item.name} - ${item.price} x {item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right font-bold">
                <span>Total: ${totalPrice}</span>
              </div>
              {!isCheckout && (
                <button
                  onClick={() => setIsCheckout(true)}
                  className="bg-sky-950 text-white px-6 py-2 rounded mt-4 w-full hover:bg-gray-600 transition"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>

            {isCheckout && (
              <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-custom6 mb-6">Billing Information</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="billingFullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="billingFullName"
                      name="fullName"
                      value={billingInfo.fullName}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="billingEmail">
                      Email
                    </label>
                    <input
                      type="email"
                      id="billingEmail"
                      name="email"
                      value={billingInfo.email}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="billingAddress">
                      Address
                    </label>
                    <input
                      type="text"
                      id="billingAddress"
                      name="address"
                      value={billingInfo.address}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="billingCity">
                      City
                    </label>
                    <input
                      type="text"
                      id="billingCity"
                      name="city"
                      value={billingInfo.city}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="billingState">
                        State
                      </label>
                      <input
                        type="text"
                        id="billingState"
                        name="state"
                        value={billingInfo.state}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-100 rounded w-full italic"
                        required
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="billingZip">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="billingZip"
                        name="zip"
                        value={billingInfo.zip}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-100 rounded w-full italic"
                        required
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-custom6 mb-6">Shipping Information</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="shippingFullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="shippingFullName"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="shippingAddress">
                      Address
                    </label>
                    <input
                      type="text"
                      id="shippingAddress"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="shippingCity">
                      City
                    </label>
                    <input
                      type="text"
                      id="shippingCity"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="shippingState">
                        State
                      </label>
                      <input
                        type="text"
                        id="shippingState"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-100 rounded w-full italic"
                        required
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="shippingZip">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="shippingZip"
                        name="zip"
                        value={shippingInfo.zip}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-100 rounded w-full italic"
                        required
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-custom6 mb-6">Payment Information</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-custom4 mb-2" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-100 rounded w-full italic"
                      required
                    />
                  </div>
                  <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="expirationDate">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={paymentInfo.expirationDate}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-100 rounded w-full italic"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="block text-sm font-custom4 mb-2" htmlFor="cvv">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handleInputChange}
                        className="p-3 bg-gray-100 rounded w-full italic"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
                  >
                    Complete Purchase
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Checkout;
