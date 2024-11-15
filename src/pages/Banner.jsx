

// // Home Component
// const Slide = () => {
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
//     <div className="bg-gray-900 min-h-screen relative overflow-hidden">
//       <AnimatedShapes />
//       <FloatingParticles />

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
//               x: { type: 'spring', stiffness: 300, damping: 30 },
//               opacity: { duration: 0.5 },
//               scale: { duration: 0.5 },
//             }}
//             className="absolute inset-0"
//           >
//             <div
//               className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-60`}
//             />
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
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Slide;

// AnimatedTitle.js
import React from 'react';
import { motion } from 'framer-motion';

const Banner = ({ text }) => (
  <div className="overflow-hidden">
    <motion.h1
      className="text-6xl md:text-7xl font-bold mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            type: 'spring',
            stiffness: 120,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  </div>
);

export default Banner;

