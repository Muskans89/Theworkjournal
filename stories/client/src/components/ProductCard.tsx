import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden bg-white">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4 -ml-5">
        <div className="font-bold text-xl mb-2 text-left">{name}</div>
        <p className="text-gray-700 text-base text-left">{price}</p>
      </div>
    </div>
  );
};


export default ProductCard;