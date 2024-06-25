// src/components/CategoryProductList.tsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

interface CategoryProductListProps {
  categories: string[];
  products: { name: string; price: string; imageUrl: string }[];
}

const CategoryProductList: React.FC<CategoryProductListProps> = ({ categories, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const filteredProducts = categories.length > 0
    ? products.filter(product => categories.includes(product.name))
    : products;

  console.log('Filtered Products:', filteredProducts); // Add this line to debug

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} imageUrl={product.imageUrl} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};


export default CategoryProductList;