import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "https://www.hp.com/content/dam/sites/worldwide/printers/large-formats/click/2333702-redesign/HP_Click_print_solutions-Hero_banner_full-DESKTOP-v3.jpg",
      title: "How to Set Up Your Printer",
      subtitle: "Your trusted partner for all printer solutions.",
    },
    {
      backgroundImage: "https://www.shutterstock.com/image-photo/woman-using-photocopy-machine-office-260nw-1726917046.jpg",
      title: "Effortless Printing Solutions",
      subtitle: "Click Printer Setup for step-by-step guidance.",
    },
    {
      backgroundImage: "https://www.hp.com/content/dam/sites/worldwide/printers/large-format/latex-printers/HP_Latex_printers-Hero_banner_side-DESKTOP.jpg",
      title: "Seamless Integration",
      subtitle: "Configure and register your printer easily.",
    },
    // Add more slides as needed...
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Automatically move to the next slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <main className="relative">
        <div className="relative w-full h-[550px] overflow-hidden">
          <AnimatePresence>
            {slides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Left Arrow Navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
            <svg className="w-8 h-8 text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          {/* Right Arrow Navigation */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
            <svg className="w-8 h-8 text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </main>

      
    </>
  );
};

export default Home;
