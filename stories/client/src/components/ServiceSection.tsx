import React from 'react';
import PlaceholderImage from '../assets/gift.webp'; // Replace with actual image path

const ServiceSection: React.FC = () => {
  return (
    <section className="py-8 relative bg-white-100">
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2 md:pr-8 text-left md:text-left mb-8 md:mb-0 mx-auto">
            <h4 className="text-base mb-5 font-custom8 tracking-widest">OUR PREMIUM SERVICE</h4>
            <h2 className="text-4xl mb-8 font-custom6 text-customDarkBlue">PERSONALISED GIFTING</h2>
            <p className="mb-4 font-custom8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, optio expedita. Exercitationem soluta rerum ipsum repellat consequuntur blanditiis maiores at expedita libero sit, delectus voluptatibus dicta sed officia iste accusamus est dolorem.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mx-auto">
            <div className="w-full max-w-md">
              <img src={PlaceholderImage} alt="Personalised Gifting" className="w-full h-auto mx-auto" style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;