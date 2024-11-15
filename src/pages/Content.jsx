// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Printer, Wifi, Settings, HelpCircle, Star, Sparkles, Zap, CircleDot } from 'lucide-react';

// // Floating Particles Component
// const  = () => {
//   const particles = Array.from({ length: 30 }).map((_, i) => ({
//     id: i,
//     size: Math.random() * 4 + 2,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     duration: Math.random() * 10 + 5,
//     delay: Math.random() * 5
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
//           style={{
//             width: particle.size,
//             height: particle.size,
//             left: particle.left,
//             top: particle.top
//           }}
//           animate={{
//             y: [-300, 300],
//             x: [-20, 20],
//             opacity: [0, 1, 0],
//             scale: [1, 1.5, 1]
//           }}
//           transition={{
//             duration: particle.duration,
//             delay: particle.delay,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Animated Background Shapes
// const AnimatedShapes = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <motion.div
//         className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           x: [-100, 100, -100],
//           y: [-50, 50, -50],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//         style={{ left: '10%', top: '20%' }}
//       />
//       <motion.div
//         className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-20 blur-3xl"
//         animate={{
//           scale: [1.2, 1, 1.2],
//           x: [100, -100, 100],
//           y: [50, -50, 50],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//         style={{ right: '10%', bottom: '20%' }}
//       />
//     </div>
//   );
// };

// // Enhanced Star Field
// const EnhancedStarField = () => {
//   const stars = Array.from({ length: 70 }).map((_, i) => ({
//     id: i,
//     size: Math.random() * 3 + 1,
//     left: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     delay: Math.random() * 5,
//     duration: Math.random() * 3 + 2
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {stars.map((star) => (
//         <motion.div
//           key={star.id}
//           className="absolute"
//           style={{
//             left: star.left,
//             top: star.top
//           }}
//           animate={{
//             opacity: [0.2, 1, 0.2],
//             scale: [1, 1.5, 1],
//             rotate: [0, 360]
//           }}
//           transition={{
//             duration: star.duration,
//             delay: star.delay,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <Sparkles className="text-yellow-300" size={star.size * 4} />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // Animated Title Component
// const AnimatedTitle = ({ text }) => {
//   return (
//     <div className="overflow-hidden">
//       <motion.h1 
//         className="text-6xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {text.split(' ').map((word, i) => (
//           <motion.span
//             key={i}
//             initial={{ y: 50 }}
//             animate={{ y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: i * 0.1,
//               type: "spring",
//               stiffness: 120
//             }}
//           >
//             {word}
//           </motion.span>
//         ))}
//       </motion.h1>
//     </div>
//   );
// };

// const Home = () => {
//   // ... (previous state and helper functions remain the same)
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slides = [
//     {
//       title: "Smart Printing Solutions",
//       subtitle: "Connect. Configure. Print.",
//       color: "from-blue-600 to-purple-600",
//       icon: <Printer className="w-16 h-16" />
//     },
//     {
//       title: "Wireless Setup Made Easy",
//       subtitle: "One-Click Configuration",
//       color: "from-purple-600 to-pink-600",
//       icon: <Wifi className="w-16 h-16" />
//     },
//     {
//       title: "Enterprise Ready",
//       subtitle: "Advanced Network Solutions",
//       color: "from-emerald-600 to-blue-600",
//       icon: <Settings className="w-16 h-16" />
//     },
//     {
//       title: "24/7 Support",
//       subtitle: "We're Here to Help",
//       color: "from-orange-600 to-red-600",
//       icon: <HelpCircle className="w-16 h-16" />
//     }
//   ];

//   // ... (previous animation variants and handlers remain the same)
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8
//     })
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen relative overflow-hidden">
//       <AnimatedShapes />
//       <FloatingParticles />
//       <EnhancedStarField />

//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentSlide}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.5 },
//               scale: { duration: 0.5 }
//             }}
//             className="absolute inset-0"
//           >
//             <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-60`} />
            
//             <div className="relative h-full flex items-center justify-center">
//               <div className="text-center text-white px-4">
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="mb-8 text-white"
//                 >
//                   {slides[currentSlide].icon}
//                 </motion.div>
                
//                 <AnimatedTitle text={slides[currentSlide].title} />
                
//                 <motion.p 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="text-xl md:text-2xl mb-8"
//                 >
//                   {slides[currentSlide].subtitle}
//                 </motion.p>
                
//                 <motion.button 
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: "0 0 25px rgba(255,255,255,0.5)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold relative overflow-hidden group"
//                 >
//                   <span className="relative z-10">Start Setup</span>
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
//                     initial={false}
//                     animate={{ rotate: [0, 360] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                   />
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Enhanced Navigation */}
//         <div className="absolute inset-x-0 bottom-8 flex justify-center items-center gap-4">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-white scale-125 shadow-lg shadow-white/50' 
//                   : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Features Section with Enhanced Animations */}
//       <div className="py-24 px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: <Printer />, title: "Easy Setup" },
//               { icon: <Wifi />, title: "Wireless Ready" },
//               { icon: <Settings />, title: "Smart Config" },
//               { icon: <HelpCircle />, title: "24/7 Support" }
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
//                 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl text-white cursor-pointer relative overflow-hidden group"
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100"
//                   animate={{
//                     backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
//                   }}
//                   transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                 />
//                 <motion.div 
//                   className="text-blue-400 mb-4"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <h3 className="text-xl font-semibold relative z-10">{feature.title}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// Home.js
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Printer, Wifi, Settings, HelpCircle } from 'lucide-react';
// import Banner from './Banner';
// import Floating from './Floating';


// const Contents = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slides = [
//     {
//       title: 'Smart Printing Solutions',
//       subtitle: 'Connect. Configure. Print.',
//       color: 'from-blue-600 to-purple-600',
//       icon: <Printer className="w-16 h-16" />,
//     },
//     {
//       title: 'Wireless Setup Made Easy',
//       subtitle: 'One-Click Configuration',
//       color: 'from-purple-600 to-pink-600',
//       icon: <Wifi className="w-16 h-16" />,
//     },
//     {
//       title: 'Enterprise Ready',
//       subtitle: 'Advanced Network Solutions',
//       color: 'from-emerald-600 to-blue-600',
//       icon: <Settings className="w-16 h-16" />,
//     },
//     {
//       title: '24/7 Support',
//       subtitle: "We're Here to Help",
//       color: 'from-orange-600 to-red-600',
//       icon: <HelpCircle className="w-16 h-16" />,
//     },
//   ];

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8,
//     }),
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-900 overflow-hidden">
//       <Banner/>

//       <div className="relative z-10 h-screen flex items-center justify-center">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentSlide}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: 'spring', stiffness: 300, damping: 30 },
//               opacity: { duration: 0.5 },
//             }}
//             className="absolute inset-0 flex flex-col items-center justify-center text-center"
//           >
//             <div
//               className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-70`}
//             />

//             <div className="relative z-20 text-white px-6">
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-8"
//               >
//                 {slides[currentSlide].icon}
//               </motion.div>

//               <Floating text={slides[currentSlide].title} />

//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-xl md:text-2xl mb-8"
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.p>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold"
//               >
//                 Start Setup
//               </motion.button>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <div className="absolute bottom-8 flex gap-4">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setDirection(index > currentSlide ? 1 : -1);
//                 setCurrentSlide(index);
//               }}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentSlide ? 'bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contents;




import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Contents() {
  const [slide, setSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);

  const [categories] = useState([
    { 
      name: "Business Card Printer", 
      image: "https://img.freepik.com/free-photo/business-card-printer_23-2149628827.jpg?w=1380",
      description: "Create professional business cards with high-quality prints."
    },
    { 
      name: "Inkjet Printer", 
      image: "https://img.freepik.com/free-photo/inkjet-printer-office_23-2149628805.jpg?w=1380",
      description: "Versatile and affordable for home and office use."
    },
    { 
      name: "Heat Press Printer", 
      image: "https://www.shutterstock.com/shutterstock/photos/2467067641/display_1500/stock-photo-modern-printer-on-chest-of-drawers-in-office-closeup-2467067641.jpg",
      description: "Perfect for customizing fabrics and apparel."
    },
    { 
      name: "Label Printer", 
      image: "https://img.freepik.com/free-photo/woman-printing-labels_23-2149713658.jpg?w=1380",
      description: "Effortlessly print labels for any occasion."
    },
    { 
      name: "3D Printer", 
      image: "https://as2.ftcdn.net/v2/jpg/05/23/05/29/1000_F_523052940_OekSqfN5SMFdhb1abx2jvoFMwAGoS3HS.jpg",
      description: "Bring your designs to life with 3D printing technology."
    },
    { 
      name: "T-Shirt Printer", 
      image: "https://www.shutterstock.com/shutterstock/photos/2277611225/display_1500/stock-photo-woman-loading-paper-into-printer-at-wooden-table-indoors-closeup-2277611225.jpg",
      description: "Create custom t-shirts for any event or occasion."
    },
  ]);

  useEffect(() => {
    const updateItemWidth = () => {
      const containerWidth = window.innerWidth;
      const gap = 16; 
      const calculatedItemWidth = (containerWidth - (gap * (6 - 1))) / 6; // Adjust for the gap between items
      setItemWidth(calculatedItemWidth);
      setVisibleItems(Math.floor(containerWidth / calculatedItemWidth));
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);

    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const nextSlide = () => {
    if (slide < categories.length - visibleItems) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="w-full mt-10">
      <h1 className="text-2xl font-semibold mb-4 text-center">Explore Our Printers</h1>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
          disabled={slide === 0}
        >
          <FaArrowLeft />
        </button>

        {/* Categories Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform ease-out duration-300"
            style={{ transform: `translateX(-${slide * (itemWidth + 16)}px)` }} // Adjust translation to account for gap
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="shrink-0 text-center mx-2"
                style={{ width: itemWidth }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-auto rounded-[30px]" 
                />
                <div className="mt-2 font-bold">{cat.name}</div>
                <div className="mt-1 text-gray-600">{cat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
          disabled={slide === categories.length - visibleItems}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Contents;





