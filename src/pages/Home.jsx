// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import PrinterSetup from './PrinterSetup';
// import PrinterSetupMethod from './PrinterSetupMethod';
// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       backgroundImage:
//         "https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230614/original/pngtree-printer-is-sitting-in-a-room-with-large-posters-and-prints-picture-image_3520983.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-3d-render-of-responsive-devices-in-home-office-setup-image_3765800.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://img.lovepik.com/bg/20240415/3D-Rendered-Modern-Home-Office-Setup-Desk-Lamp-Computer-and_5832401_wh860.jpg!/fw/860",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230611/original/pngtree-printer-is-located-in-a-room-with-a-montage-of-mountains-picture-image_3166193.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-sleek-home-office-setup-with-lamp-computer-and-printer-3d-rendered-image_3824090.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <>
//       <main className="relative">
//         <div className="relative w-full h-[400px] overflow-hidden">
//           {/* Background Slide */}
//           <div className="relative h-full">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//                 {/* Text content without container */}
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
//                   <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
//                     {slide.title}
//                   </h1>
//                   <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <PrinterSetup />
//       <CustomerReviews />
//       <Disclaimer />
//     </>
//   );
// };

// export default Home;





// import Banner from './Banner';


// import Contents from './Content';
// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import Goodlooking from './Goodlooking';
// import Header from './Header';
// import PrinterSetup from './PrinterSetup';
// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       backgroundImage: "https://png.pngtree.com/background/20230611/original/pngtree-large-print-machine-in-a-office-with-a-display-picture-image_3154301.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle: "Your trusted partner for all printer solutions.",
//     },
//     {
//       backgroundImage: "https://png.pngtree.com/background/20230614/original/pngtree-printing-large-format-printing-in-the-printer-picture-image_3512495.jpg",
//       title: "Effortless Printing Solutions",
//       subtitle: "Click Printer Setup for step-by-step guidance.",
//     },
//     {
//       backgroundImage: "https://i1.adis.ws/i/canon/pixma-ts7650i_lifestyle-design-63732-16x9_131c730ed73c424ba756bafa638036d8?$media-collection-full-dt-jpg$",
//       title: "Seamless Integration",
//       subtitle: "Configure and register your printer easily.",
//     },
//     // Add more slides as needed...
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <>
//       <main className="relative">
//         <div className="relative w-full h-[400px] overflow-hidden">
//           <AnimatePresence>
//             {slides.map((slide, index) => (
//               index === currentSlide && (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `url(${slide.backgroundImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
//                     <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
//                       {slide.title}
//                     </h1>
//                     <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
//                   </div>
//                 </motion.div>
//               )
//             ))}
//           </AnimatePresence>

//           {/* Navigation Arrows */}
//           <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
//             <svg className="w-8 h-8 text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//           </div>
//           <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
//             <svg className="w-8 h-8 text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//           </div>

//           {/* Pagination Indicators */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {slides.map((_, index) => (
//               <div
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//       {/* <Contents/>
//       <Banner/> */}
//       <Header/>
//       <Goodlooking/>



//       <PrinterSetup />

//       <CustomerReviews />

//       <Disclaimer />


//     </>
//   );
// };

// export default Home;



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const Home = () => {
//   const slides = [
//     {
//       title: "Troubleshooting Printer",
//       description: "Get help resolving common printer issues.",
//       image: "https://www.hp.com/wcsstore/hpusstore/Banners/PR3_Work-Friendly-Features_11-03-2024.jpg",
//     },
//     {
//       title: "Printer Setup",
//       description: "Guidance on setting up your new printer.",
//       image: "/path/to/printer-image2.png",
//     },
//     {
//       title: "Printer Offline Issues",
//       description: "Solutions for printer connectivity problems.",
//       image: "/path/to/printer-image3.png",
//     },
//     {
//       title: "Connect Printer to WiFi",
//       description: "Step-by-step guide to connect to WiFi.",
//       image: "/path/to/printer-image4.png",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//       {/* Navbar */}
//       <nav className="bg-blue-600 w-full py-4 text-white text-center">
//         <ul className="flex justify-center space-x-8 text-sm font-semibold">
//           <li><a href="#">Drivers</a></li>
//           <li><a href="#">Diagnostics</a></li>
//           <li><a href="#">My Account</a></li>
//           <li><a href="#">Products</a></li>
//           <li><a href="#" className="ml-auto mr-4">Sign In</a></li>
//         </ul>
//       </nav>

//       {/* Full-Width, Custom Height Swiper Slider */}
//       <div className="w-full h-[662px] mt-8">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           className="h-full max-w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex flex-col md:flex-row items-center justify-center h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-xl p-10 mx-4">
//                 {/* Slide Content */}
//                 <div className="md:w-1/2 space-y-6 text-center md:text-left">
//                   <h2 className="text-4xl md:text-5xl font-bold text-white">
//                     {slide.title}
//                   </h2>
//                   <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
//                     {slide.description}
//                   </p>
//                   <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition">
//                     Click here for setup
//                   </button>
//                 </div>

//                 {/* Slide Image */}
//                 <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
//                   <img src={slide.image} alt={slide.title} className="max-w-full h-[400px] object-cover rounded-lg shadow-lg" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { FaPrint, FaWifi, FaTools, FaSyncAlt } from 'react-icons/fa';
import HPPlan from './HpPlan';
import Slider from './Slider';
import Psection from './Psection';


const Home = () => {
  const services = [
    {
      icon: <FaTools size={64} className="text-cyan-400" />,
      description: "Get assistance with troubleshooting common printer issues, such as paper jams, error codes, and poor print quality.",
      caption: "Troubleshoot Now",
    },
    {
      icon: <FaPrint size={64} className="text-cyan-400" />,
      description: "Professional setup for new printers, ensuring optimal configuration and seamless integration with your devices.",
      caption: "Setup Assistance",
    },
    {
      icon: <FaWifi size={64} className="text-cyan-400" />,
      description: "Connect your printer to a WiFi network for wireless printing across multiple devices, even from your smartphone.",
      caption: "Connect to WiFi",
    },
    {
      icon: <FaSyncAlt size={64} className="text-cyan-400" />,
      description: "Install the latest drivers and software updates to keep your printer running smoothly with new features and security patches.",
      caption: "Update Drivers",
    },
  ];

  return (
    <>
    <Slider/>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 h-[600px] flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 tracking-wider relative inline-block">
            <span className="relative z-10">Printer Services</span>
            <div className="absolute inset-0 rounded-md bg-cyan-400 blur-lg opacity-20"></div>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[401px] h-[331px] bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg p-6 shadow-lg border border-cyan-500 text-center 
            hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 relative group"
            >
              <div className="flex justify-center items-center mb-4 h-24">
                {service.icon}
              </div>
              <p className="text-sm text-gray-300 mb-6">
                {service.description}
              </p>
              <button className="bg-cyan-500 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-cyan-600 transition">
                {service.caption}
              </button>
              <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 rounded-lg blur-lg transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <HPPlan/>
      <Psection/>
      
      
    </>
  );
};

export default Home;
