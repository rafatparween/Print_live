import React from 'react';
import NewArrivals from '../sections/NewArrivals';

const IconBox = () => {
  return (
    <>
      <main className="flex  flex-col justify-center   items-center  bg-[#38bdf8] px-8 py-10">
        <h1 className="text-6xl text-white border-b-4 border-black mb-8">
          OUR SERVICES{' '}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%]">
          <div
            className="bg-white p-10 rounded-full text-black shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Printers & Accessories</h3>
              <p className="mt-2">
                We sell new and refurbished, products, tested and verified by
                our experts. Our team of skilled technicians rigorously tested
                these products to ensure they meet our high standards.
              </p>
            </div>
          </div>
          <div
            className="bg-white p-6 rounded-full text-black  shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Expert Advice</h3>
              <p className="mt-2">
                If you are not able to select which product is best for you,
                then you can get advice form our experts, they will guide you to
                find a best solution according to your need and requirements.
              </p>
            </div>
          </div>
          <div
            className="bg-white p-6 rounded-full text-black  shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">24*7 Support</h3>
              <p className="mt-2">
                Facing issues while buying? Our representatives are available
                24*7 to help you throughout the day and night.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* ---------------------------------------------------------------------------- */}
      <div className="flex justify-center items-center px-8 py-6 bg-[#38bdf8]">
        <div className="aboutCase flex flex-col md:flex-row w-full shadow-md rounded-sm bg-white">
          <section className="w-full md:w-1/2 p-5">
            <img
              src="https://www.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-600nw-1712082700.jpg"
              alt=""
              className="w-[90%] h-[100%] md:w-full md:h-full   hover:scale-105 transition-transform duration-1000"
            />
          </section>

          <section className="w-full md:w-1/2 flex flex-col justify-center px-8 py-6">
            <h2 className="text-3xl font-semibold mb-4">
              We offer on Site Assistance <br />
              for your Products
            </h2>
            <p className="text-lg mb-4">
              We offer on site assistance for the products that you purchased
              from us and also for your old products you buy from other
              resources, we help you the tech problems faced while installing or
              troubleshooting of a printer or other devices.
            </p>

            <div>
              <a
                href="#"
                className="border-2 border-gray-500 p-2 text-gray-600 hover:bg-black hover:text-white hover:border-none"
              >
                MORE DETAILS
              </a>
            </div>
          </section>
        </div>
      </div>
      <NewArrivals />
    </>
  );
};

export default IconBox;
