import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Dropdown from '../components/Dropdown';
import { FaSlidersH } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';

const categories = ['Travel Towels', 'Bathrobes', 'Hand Towels', 'Kids'];
const colors = ['Blue', 'Green', 'Yellow', 'Red', 'Pink', 'Others'];
const dropdownCategories = ['Beddings', 'Home Accents', 'Bath', 'Kids'];

const products = [
  { name: 'Travel Towels', price: '$10', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Bathrobes', price: '$20', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Hand Towels', price: '$30', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Kids', price: '$40', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Travel Towels', price: '$10', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Bathrobes', price: '$20', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Hand Towels', price: '$30', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Kids', price: '$40', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Travel Towels', price: '$10', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Bathrobes', price: '$20', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Hand Towels', price: '$30', imageUrl: 'https://via.placeholder.com/300' },
  { name: 'Kids', price: '$40', imageUrl: 'https://via.placeholder.com/300' },
  // Add more products as needed
];

const PRODUCTS_PER_PAGE = 9;

function Category() {
  const [showFilter, setShowFilter] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCategoryChange = (category: string) => {
    const currentIndex = selectedCategories.indexOf(category);
    if (currentIndex === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleDropdownSelect = () => {
    // Handle dropdown selection if needed
  };

  useEffect(() => {
    if (filterButtonRef.current) {
      // const buttonTop = filterButtonRef.current.offsetTop;
      // const buttonHeight = filterButtonRef.current.offsetHeight;
      // Optionally use the filter height
    }
  }, [filterButtonRef, showFilter]);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const displayedProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="relative text-center">
        <h1 className="text-4xl font-custom6 -pb-12 bg-white mb-4 md:mb-0 mt-10">Category Name</h1>
        <div className="container mx-auto py-8 md:py-12 transition-all duration-300 border-yellow-500 border-2 border-b-0 border-l-0 border-r-0">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <button
              className="text-black md:mt-0 mt-10 md:mr-4 hover:text-yellow-500 flex items-center transition-all duration-300"
              onClick={toggleFilter}
              ref={filterButtonRef}
            >
              <FaSlidersH className="mr-2 w-6 h-6 font-custom6 md:mb-0"/> Filter
              {isFilterOpen ? (
                <FontAwesomeIcon icon={faChevronLeft} className="ml-2 transition-all duration-300" />
              ) : (
                <FontAwesomeIcon icon={faChevronRight} className="ml-2 transition-all duration-300" />
              )}
            </button>
            <Dropdown options={dropdownCategories} onSelect={handleDropdownSelect} label="Features" />
          </div>

          <div className={`content transition-all duration-300 ${isFilterOpen ? 'ml-64' : ''}`}>
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {displayedProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>

        <div
          className={`absolute top-20 left-0 bg-white p-4 rounded transition-transform duration-300 ${
            isFilterOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
          style={{ width: '20rem' }}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={toggleFilter}
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-lg font-bold mb-2">CATEGORIES</h2>
          {categories.map((category, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`category-${index}`}
                className="mr-2"
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategories.includes(category)}
              />
              <label htmlFor={`category-${index}`}>{category}</label>
            </div>
          ))}

          <h2 className="text-lg font-bold mb-2 mt-4">COLOUR</h2>
          {colors.map((color, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="checkbox" id={`color-${index}`} className="mr-2" />
              <label htmlFor={`color-${index}`}>{color}</label>
            </div>
          ))}
        </div>
      </div>

      <ProductList />

      <ContactUs />
    </>
  );
}

export default Category;