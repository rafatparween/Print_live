import React from 'react';

const InstantSupport = () => {
  return (
    <main>
      <section className="bg-gray-100 p-2 shadow-inner">
        <div className="flex gap-6 items-center justify-center">
          <img
            src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/printer-sm.svg"
            alt="Printer Support"
            className="w-10 h-10 "
          />
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Printer Support
          </h2>
        </div>
      </section>

      <div className="flex justify-center">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-[80%]">
          <div className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <img
              src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/printersetup.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="text-center mt-2">Printer Setup Issues</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <img
              src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/printeroffline.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="text-center mt-2">Printer Offline</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <img
              src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/wirelessprinterissues.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="text-center mt-2">Wireless Printer Issues</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <img
              src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/scannerissues.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="text-center mt-2">Scanner Issues</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InstantSupport;
