const Disclaimer = () => {
  return (
    <div className="bg-[#38bdf8] pt-5">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white  border-b-4 border-black ">
          Disclaimer
        </h1>
      </div>
      <div className="py-10 px-2">
        <div
          className="flex justify-center flex-col p-5 shadow-2xl border
         border-gray-200 rounded-sm bg-white"
        >
          {disclaimerArray.map(({ id, heading, desc }) => {
            return (
              <div key={id} className="m-2">
                <h2 className="font-semibold text-xl mb-2">{heading}</h2>
                {desc.map((value) => {
                  return (
                    <p key={id} className="my-1 list-disc my-2">
                      {value}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

const disclaimerArray = [
  {
    id: 1,
    heading: 'Contact Information',
    desc: [
      'If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at support@printermartsolution.com.',
    ],
  },
  {
    id: 2,
    heading: 'General Information',
    desc: [
      'The information provided by Printer Mart Solution on this website is for general informational purposes only.',
      'While we strive to ensure the accuracy and reliability of our refurbished printers, we do not make any warranties or guarantees about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.',
      'Any reliance you place on such information is therefore strictly at your own risk.',
    ],
  },
  {
    id: 3,
    heading: 'Product Condition and Availability',
    desc: [
      'All refurbished printers sold by Printer Mart Solution have been thoroughly inspected, tested, and certified by our skilled technicians.',
      'However, as these are pre-owned items, they may show minor signs of previous use.',
      'We ensure that all functionality meets our rigorous standards, but physical imperfections may exist.',
      'Availability of specific models may vary, and we cannot guarantee the availability of any particular product.',
    ],
  },
  {
    id: 4,
    heading: 'Warranty and Returns',
    desc: [
      'Printer Mart Solution offers a six-month warranty on all refurbished printers.',
      'The terms and conditions of the warranty, including the duration and coverage, are outlined in the warranty documentation provided with each product.',
      'The warranty covers defects in materials and workmanship under normal use during the warranty period.',
      'We also provide a return policy, the details of which can be found on our Returns page.',
      'Customers are encouraged to review the warranty and return policy details before making a purchase.',
      'Any claims under the warranty must be made in accordance with the procedures outlined in the warranty documentation.',
    ],
  },
  {
    id: 5,
    heading: 'Limitation of Liability',
    desc: [
      'In no event will Printer Mart Solution be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website or the purchase and use of our products.',
    ],
  },
  {
    id: 6,
    heading: 'External Links',
    desc: [
      'Through this website, you may be able to link to other websites which are not under the control of Printer Mart Solution.',
      'We have no control over the nature, content, and availability of those sites.',
      'The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
    ],
  },
  {
    id: 7,
    heading: 'Legal Compliance',
    desc: [
      'Printer Mart Solution operates in compliance with all applicable laws and regulations of the United States.',
      'It is the responsibility of the customer to ensure that their use of our products complies with any applicable local, state, or federal laws.',
    ],
  },
  {
    id: 8,
    heading: 'Governing Law',
    desc: [
      'This disclaimer and any disputes arising out of or in connection with the use of this website or the purchase of our products shall be governed by and construed in accordance with the laws of the United States.',
    ],
  },
  {
    id: 9,
    heading: 'Modifications',
    desc: [
      'Printer Mart Solution reserves the right to modify this disclaimer at any time.',
      'Any changes will be posted on this page, and it is your responsibility to review this page periodically for updates.',
    ],
  },
  {
    id: 10,
    heading: 'Contact Information',
    desc: [
      'If you have any questions or concerns about this disclaimer, please contact our customer service team at: support@printermartsolution.com.',
    ],
  },
  {
    id: 11,
    heading: 'Agreement',
    desc: [
      'By using our website and purchasing our products, you agree to this disclaimer in full.',
      'If you do not agree with any part of this disclaimer, you must not use our website or purchase our products.',
      'Thank you for choosing Printer Mart Solution.',
    ],
  },
];
