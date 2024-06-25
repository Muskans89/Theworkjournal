import { useState, useCallback, FC } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaHome, FaListAlt, FaUser, FaBoxes, FaGift } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcAbout } from "react-icons/fc";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  const toggleCartMenu = useCallback(() => {
    setIsCartMenuOpen(prevState => !prevState);
  }, []);

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-yellow-600 text-center text-white font-custom6 font-thin">Use code Mani10 for 10% off on first time purchase</div>

      {/* Main Header */}
      <div className={`bg-sky-950 text-white text-center p-2 flex items-center justify-between relative z-10 ${isMenuOpen || isCartMenuOpen ? 'pb-4' : ''}`}>
        {/* Left section: Hamburger menu */}
        <div className="flex items-center">
          <button className="text-3xl text-white focus:outline-none mr-4 md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="hidden md:flex items-center border-b border-gray-300 py-1 mr-10 mt-2 md:mt-0">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-500 w-full"
            />
          </div>
        </div>

        {/* Center section: Main text */}
        <h1 className="text-xl sm:text-sm md:text-3xl font-custom7 mx-auto text-center mb-1 mt-2">
          Many Stories{' '}
          <span className="mt-3 block text-xs sm:text-sm md:text-xs font-custom3 top-5">DESIGN & HERITAGE</span>
        </h1>

        {/* Right section: Cart icon */}
        <button className="text-3xl text-white focus:outline-none mr-4 md:hidden" onClick={toggleCartMenu}>
          <FaShoppingCart />
        </button>

        {/* Right section: Account and Cart links for desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/account" className="text-sm md:text-base font-custom6 flex items-center">
            <FaUser className="md:hidden text-2xl" />
            <span className="md:inline-block hidden">ACCOUNT</span>
          </Link>
          <div className="border-r border-gray-300 h-6 mx-4"></div> {/* Vertical line with margin */}
          <Link to="/cart" className="text-sm md:text-base font-custom6 flex items-center">
            <FaShoppingCart className="h-4 w-4 md:hidden" />
            <span className="md:inline-block hidden mr-3">CART</span>
            <FaShoppingCart className='md:mr-3' />
          </Link>
        </div>
      </div>

      {/* Navbar for desktop */}
      <nav className="hidden md:block bg-white text-black p-4 relative z-10 w-full md:w-4/5 mx-auto mt-2 md:mt-0">
        <div className="flex flex-grow items-center justify-between px-2 w-full">
          <NavLink to="/" text="HOME" />
          <NavLink to="/category" text="CATEGORY" />
          <NavLink to="/personalise" text="PERSONALISED" />
          <NavLink to="/collections" text="COLLECTIONS" />
          <NavLink to="/gifting" text="GIFTING" />
          <NavLink to="/about" text="OUR STORY" />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black p-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        style={{ zIndex: 9999 }}
      >
        <button className="text-3xl text-black focus:outline-none mb-4" onClick={toggleMenu}>
          <FaTimes />
        </button>
        <div className="flex items-center border-b border-gray-300 py-1 w-full px-4 mb-4">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search product"
            className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-500 w-full"
          />
        </div>
        <MobileNavLink to="/" text="HOME" icon={<FaHome />} />
        <MobileNavLink to="/category" text="CATEGORY" icon={<FaListAlt />} />
        <MobileNavLink to="/personalise" text="PERSONALISED" icon={<FaUser />} />
        <MobileNavLink to="/collections" text="COLLECTIONS" icon={<FaBoxes />} />
        <MobileNavLink to="/gifting" text="GIFTING" icon={<FaGift />} />
        <MobileNavLink to="/about" text="OUR STORY" icon={<FcAbout  />} />
        {/* Include Account and Cart links in mobile menu */}
        <Link to="/account" className="text-sm font-custom4 hover:text-yellow-500 hover:underline flex items-center mb-4">
          <FaUser className="mr-2" />
          <span>ACCOUNT</span>
        </Link>
        <Link to="/cart" className="text-sm font-custom4 hover:text-yellow-500 hover:underline flex items-center">
          <FaShoppingCart className="mr-2" />
          <span>CART</span>
        </Link>
      </div>

      {/* Cart menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black p-4 transition-transform transform ${isCartMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        style={{ zIndex: 9999 }}
      >
        <button className="text-3xl text-black focus:outline-none mb-4" onClick={toggleCartMenu}>
          <FaTimes />
        </button>
        <div className="flex flex-col items-center mb-4">
          <FaShoppingCart className="text-3xl mb-2" />
          <span className="text-lg font-custom4">Your Cart</span>
        </div>
        <p className="text-center text-sm font-custom4">Your cart is currently empty.</p>
        <Link to="/shop" className="text-sm font-custom4 hover:text-yellow-500 hover:underline flex items-center mt-4">
          <FaGift className="mr-2" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
}

type NavLinkProps = {
  to: string;
  text: string;
};

const NavLink: FC<NavLinkProps> = ({ to, text }) => (
  <Link to={to} className="text-sm md:text-base font-custom4 hover:text-yellow-500 hover:underline">{text}</Link>
);

type MobileNavLinkProps = {
  to: string;
  text: string;
  icon: React.ReactNode;
};

const MobileNavLink: FC<MobileNavLinkProps> = ({ to, text, icon }) => (
  <Link to={to} className="text-sm font-custom4 hover:text-yellow-500 hover:underline flex items-center mb-4">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Header;