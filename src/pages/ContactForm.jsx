import React from 'react';
import NewArrivals from '../sections/NewArrivals';
import NewsLetterForm from '../sections/NewsLetterForm';

const ContactForm = () => {
  return (
    <>
      <main className="flex justify-center items-center bg-[#38bdf8] ">
        <div
          className="flex justify-between items-center gap-2 w-[80%] bg-white rounded-md mt-5 mx-4
        shadow-2xl md:p-5  p-4"
        >
          {/* Image section */}
          <section className="hidden md:block w-[45%]">
            <img
              src="https://printexpress123.com/wp-content/uploads/2021/12/contact-us-image_optimized.webp"
              className="h-[33.5rem] w-full"
              alt="Contact"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </section>

          {/* Form section */}
          <section className="w-full md:w-[65%] md:p-6 md:border-l-2 md:border-gray-400">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      {/* Other components */}
      <NewArrivals />
      <NewsLetterForm />
    </>
  );
};

export default ContactForm;
