import React from 'react';

const WhyChooseUsSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 border-2 border-[#38bdf8] w-[90%] shadow-lg ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img
              src="https://superblog.supercdn.cloud/site_cuid_cl7iow9nd601611lli3usqx7oz/images/file-2-1663587649175-compressed.png"
              alt=""
              className="w-[100%] h-auto"
            />
          </div>
          <div className="lg:w-1/2 bg-black text-white  p-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose us?</h2>
            <p className="text-lg mb-6">
              Choose us for top-quality refurbished printers, meticulously
              inspected and tested for exceptional performance and reliability.
              Benefit from our expert support available 24/7, ensuring seamless
              and efficient printing solutions. With our commitment to your
              satisfaction, you're not just buying a printer; you're investing
              in superior service and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
