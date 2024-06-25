import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaPinterest } from 'react-icons/fa';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative mt-16 border-t-0 border-b-0 border-yellow-500">
        <div className="flex items-center justify-center h-28 bg-white">
          <div className="relative z-10 bg-white" onClick={handleOpenModal}>
            <p className="text-3xl p-5 -mt-24 bg-white relative">
              <span className="relative z-10 bg-white px-4 font-custom6">Contact Us</span>
              <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-5 h-px bg-white"></span>
              <span className="absolute top-1/2 right-0 transform -translate-y-1/2 w-5 h-px bg-white"></span>
            </p>
          </div>
          {isModalOpen && <ContactModal onClose={handleCloseModal} />}
        </div>
        <div className="absolute inset-y-0 left-4 right-4 border-2 border-yellow-500 border-b-0 z-0"></div>
        <div className="bg-sky-950 text-white p-5 md:p-10 flex justify-center w-full md:h-62">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 container mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-3xl md:mr-32 text-white font-custom7">Many Stories</h1>
              <p className="text-sm md:text-sm mt-6 font-custom6 md:mr-44">DESIGN & HERITAGE</p>
              <p className="text-xs md:text-sm my-4 font-custom8 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="text-white md:text-gray-300 ml-5 md:mr-14">
              <h2 className="font-bold md:text-base mb-2 md:ml-16 font-custom8">MAIN MENU</h2>
              <ul>
                <li className='text-sm py-1 md:text-base font-custom8 md:ml-16'>About us</li>
                <li className='text-sm py-1 md:text-base font-custom8 md:ml-16'>Collections</li>
                <li className='text-sm py-1 md:text-base font-custom8 md:ml-16'>Personalised</li>
                <li className='text-sm py-1 md:text-base font-custom8 md:ml-16'>Gifting</li>
                <li className='text-sm py-1 md:text-base font-custom8 md:ml-16'>Account</li>
              </ul>
            </div>
            <div className="text-white md:text-gray-300">
              <h2 className="font-bold md:text-base mb-2 font-custom8">CATEGORIES</h2>
              <ul>
                <li className='text-sm py-1 md:text-base font-custom8'>Bath</li>
                <li className='text-sm py-1 md:text-base font-custom8'>Bedding</li>
                <li className='text-sm py-1 md:text-base font-custom8'>Home Accents</li>
                <li className='text-sm py-1 md:text-base font-custom8'>Kids</li>
              </ul>
            </div>
            <div className="text-white md:text-gray-300">
              <p className='font-custom8 text-white'>Have any questions?</p>
              <h2 className="mb-2 font-custom6 md:text-xl">ASK US!</h2>
              <div className="flex flex-col items-start">
                <form>
                  <textarea className="w-full md:w-72 p-2 opacity-1 mt-2 md:mt-0 bg-slate-100 rounded italic text-black" placeholder="Type your message here"></textarea>
                </form>
                <div className="flex space-x-2 md:space-x-4 mt-4">
                  <FaFacebook size={32} />
                  <FaWhatsapp size={32} />
                  <FaInstagram size={32} />
                  <FaPinterest size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

// ContactUs Modal
interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    const nameRegex = /^[a-zA-Z ]{2,30}$/;  // Basic name validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      newErrors.name = 'Invalid name';
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Submit the form
      console.log({ name, email, otherInfo });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50 flex items-center justify-center">
      <div className="relative mx-auto p-5 border-4 border-sky-950 w-2/3 md:w-2/3 h-auto shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-3xl md:text-4xl leading-6 font-medium font-custom6 text-gray-900 mb-5">CONTACT US</h3>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-3 bg-slate-100 rounded w-full md:w-3/4 italic block mx-auto"
              />
              {errors.name && <p className="text-red-500 text-sm absolute -bottom-5">{errors.name}</p>}
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 mb-2 p-3 bg-slate-100 rounded w-full md:w-3/4 italic block mx-auto"
              />
              {errors.email && <p className="text-red-500 text-sm absolute -bottom-5">{errors.email}</p>}
            </div>
            <textarea
              placeholder="Other Information"
              value={otherInfo}
              onChange={(e) => setOtherInfo(e.target.value)}
              className="mt-5 p-3 bg-slate-100 rounded w-full md:w-3/4 italic block mx-auto"
            />
            <button
              type="submit"
              className="mt-4 mb-2 p-3 underline text-xl block mx-auto text-customDarkBlue"
            >
              Submit Request
            </button>
          </form>
          <button
            className="absolute top-0 right-0 p-2"
            onClick={onClose}
          >
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};