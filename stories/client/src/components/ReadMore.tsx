import React, { useState } from 'react';

const ReadMore: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4 md:w-3/5 w-10/11 mx-auto text-center mb-10">
      <p className={`text-gray-700 font-custom8 ${isExpanded ? '' : 'line-clamp-3'}`}>
      India’s foremost contemporary design brands that has captured the imagination of the world through its carefully curated design aesthetic and craftsmanship that preserves artisanal sensibilities and minimalism to harmoniously blend form with function.

        {isExpanded && (
          <span>
             Behind the brand is the visionary creative force of Manisha Modi, the Founder and Creative Director of Mani Stories.
          </span>
        )}
      </p>
      <button
        className="text-black underline mt-2 focus:outline-none font-custom1"
        onClick={handleReadMoreClick}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMore;