import React, { useState } from 'react';

export default function NewsLetterForm() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send email to a mailing list)
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div
      className="py-16 text-white text-center"
      style={{
        backgroundImage: `url('https://st4.depositphotos.com/13812178/20062/i/450/depositphotos_200624420-stock-photo-two-business-women-talking-bright.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-50 p-20 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Newsletter Updates</h1>
        <p className="mb-4">
          Subscribe to receive emails on new product arrivals & special offers
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <input
              type="email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-sm"
              placeholder="Your Email Address"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md ml-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
