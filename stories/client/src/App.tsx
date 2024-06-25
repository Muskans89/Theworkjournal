import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import AboutUs from './pages/AboutUs';
import Personalise from './pages/Personalise';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import AddProduct from './pages/AddProduct';
import AddUser from './pages/AddUser';
import SpecificProduct from './components/SpecificProduct';
import ManageProducts from './pages/ManageProducts';
import ManageUsers from './pages/ManageUsers';
import Checkout from '@pages/Checkout';
import ManageCategories from '@pages/ManageCategory';
import OrderManagementPage from '@pages/OrderManagementPage';
import CustomerManagementPage from '@pages/CustomerManagement';
import CouponManagementPage from '@pages/CouponManagement';
import CartPage from '@pages/Cart';
import UserProfile from '@pages/Profile';
import Wishlist from '@pages/Wishlist';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/personalise" element={<Personalise />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/specific" element={<SpecificProduct />} />
          <Route path="/manageprod" element={<ManageProducts />} />
          <Route path="/manageuser" element={<ManageUsers />} />
          <Route path="/managecat" element={<ManageCategories />} />
          <Route path="/managecoupon" element={<CouponManagementPage />} />
          <Route path="/orders" element={<OrderManagementPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customers" element={<CustomerManagementPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;