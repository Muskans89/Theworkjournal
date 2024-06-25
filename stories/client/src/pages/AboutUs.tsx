import React from 'react';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import designHeritageImage from '../assets/about.png';
import heritage from '../assets/heritage.png';
import handmade from '../assets/handmade.png';
import organic from '../assets/organic.png';
import smallbatch from '../assets/smallbatch.png';
import artisanal from '../assets/artisanal.png';
import placeholder from '../assets/logo.jpg';
import './AboutUs.css'

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />

      {/* Design and Heritage Section */}
      <section className="relative">
  <img src={designHeritageImage} alt="Design Heritage" className="block mx-auto w-full" />
  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold font-custom1 text-3xl md:text-5xl lg:text-6xl -mt-10 text-center px-4">
    DESIGN AND HERITAGE
  </div> */}
  <div className="absolute bottom-0 left-0 right-0 bg-opacity-75 text-white text-base md:text-lg lg:text-xl px-4 py-2 text-center overflow-hidden max-w-full">
    {/* <p className="text-white overflow-hidden text-ellipsis whitespace-nowrap">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
      consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
      consequat, vel illum
    </p> */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
  </div>
</section>





      {/* The Start of Many Stories Section */}
      <section className="bg-white mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 ml-3 md:ml-16 text-center md:text-left py-10">
        <h2 className="md:text-2xl text-base mb-2 font-custom8 tracking-wider">THE START OF</h2>
        <h2 className="md:text-5xl text-2xl mb-8 font-custom6 tracking-wider text-customDarkBlue">MANY STORIES</h2>
        <p className="md:text-lg text-sm mb-4 max-w-full mr-3 font-custom8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet 
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim 
          veniam, quis nostrud exerci tation ullamcorper suscipit 
          lobortis nisl ut aliquip ex ea commodo consequat.</p>
          
        
      </div>
      <div className="md:w-1/2 sm:h-auto px-3 ml-3 md:ml-0 mb-3 md:mb-10">
        <img src={heritage} alt="Design Heritage" className="w-full h-96 object-contain rounded-lg" />
      </div>
    </div>
  </div>
</section>













      {/* Story Behind the Brand Section */}
<div className='container mx-auto border-b-0'>
  <div className='relative border-yellow-600 -z-20 md:inset-0 text-center border-b-0 border-2 h-auto mt-16 p-8 flex flex-col items-center'>
    <h1 className='font-custom6 bg-white px-4 -mt-14  text-4xl'>STORY BEHIND THE BRAND</h1>
    <p className='text-center mt-12 mb-10 md:text-xl mr-20 ml-20 font-custom8'>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p> 
  </div>
  <div className='w-full overflow-x-hidden -mt-6'>
    <div className='slider flex justify-center space-x-4'>
      <img src="https://via.placeholder.com/300" alt="Placeholder 1" className="p-3" />
      <img src="https://via.placeholder.com/300" alt="Placeholder 2" className="p-3" />
      <img src="https://via.placeholder.com/300" alt="Placeholder 3" className="p-3" />
      <img src="https://via.placeholder.com/300" alt="Placeholder 4" className="p-3" />
      <img src="https://via.placeholder.com/300" alt="Placeholder 5" className="p-3" />
    </div>
  </div>
</div>





{/* Icons and Names Section */}
<div className="container mx-auto my-8 md:mt-28 mb-8 md:mb-28">
  <div className="flex justify-evenly items-center gap-2 md:gap-8">
    <div className="flex flex-col items-center">
      <img src={handmade} alt="Hand Made" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2" />
      <p className="text-xs sm:text-sm md:text-base text-center">HAND MADE</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={organic} alt="Organic" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2" />
      <p className="text-xs sm:text-sm md:text-base text-center">ORGANIC</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={smallbatch} alt="Small Batch" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2" />
      <p className="text-xs sm:text-sm md:text-base text-center">SMALL BATCH</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={artisanal} alt="Artisanal" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2" />
      <p className="text-xs sm:text-sm md:text-base text-center">ARTISANAL</p>
    </div>
  </div>
</div>










      {/* Key Features Section */}
      <section className="bg-customLightBlue py-14 mb-28">
  <div className="container mx-auto">
    <h2 className="text-5xl text-center mb-10 mt-4 font-custom6 text-customDarkBlue">Face Behind The Brand</h2>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <div className="text-center lg:text-left max-w-full">
          <p className="uppercase text-lg font-light mb-2 mx-4 font-custom8 tracking-wider">Meet Our Founder</p>
          <h3 className="text-5xl mb-6 font-custom6 mx-4 tracking-wider">MANISHA MODY</h3>
          <p className="mb-4 mx-4 max-w-full mr-5 text-lg font-light font-custom8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet
dolore magna aliquam erat volutpat. Ut wisi enim ad
minim Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy
          </p>
          <p className="mb-4 mx-4 max-w-full mr-5 text-lg font-custom8 font-light">        
nibh euismod tincidunt ut laoreet dolore magna aliquam
erat volutpat.Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam erat volutpat. Ut
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="bg-white w-full h-full flex items-center justify-center">
          <img src={placeholder} alt="Founder" className="w-full h-full object-cover rounded-lg shadow-md max-w-full" />
        </div>
      </div>
    </div>
  </div>
</section>





{/* Icons and Names Section */}
{/* <div className="flex flex-wrap justify-evenly items-center space-x-4 md:space-x-8 mt-8 md:mt-28 mb-8 md:mb-28">
  <div className="text-center w-1/2 md:w-auto">
    <img src={handmade} alt="Hand Made" className="mx-auto w-18 h-18" />
    <p className="mt-2 text-sm">HAND MADE</p>
  </div>
  <div className="text-center w-1/2 md:w-auto">
    <img src={organic} alt="Organic" className="mx-auto w-18 h-18" />
    <p className="mt-2 text-sm">ORGANIC</p>
  </div>
  <div className="text-center w-1/2 md:w-auto">
    <img src={smallbatch} alt="Small Batch" className="mx-auto w-18 h-18" />
    <p className="mt-2 text-sm">SMALL BATCH</p>
  </div>
  <div className="text-center w-1/2 md:w-auto">
    <img src={artisanal} alt="Artisanal" className="mx-auto w-18 h-18" />
    <p className="mt-2 text-sm">ARTISANAL</p>
  </div>
</div> */}









      








      <ContactUs />
    </>
  );
};


export default AboutUs;