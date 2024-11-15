// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// function Header() {
//   const [slide, setSlide] = useState(0);
//   const [itemWidth, setItemWidth] = useState(0);
//   const [visibleItems, setVisibleItems] = useState(0);

//   const [categories] = useState([
//     { name: "Visiting Cards", image: "https://img.freepik.com/free-photo/side-view-printer-desk-office_23-2149628827.jpg?t=st=1729703441~exp=1729707041~hmac=19259bef12fecda92af1e2deaf7bbf1d32622dfa7e8a4136c197058ae04f664f&w=1380" },
//     { name: "Personalised Pens", image: "https://img.freepik.com/free-photo/woman-using-office-printer-front-view_23-2149628805.jpg?t=st=1729703501~exp=1729707101~hmac=883020cf8253db86642e21e86d87b043a94edb360095d2056305447ed3b2e99b&w=1380" },
//     { name: "Custom T-shirts", image: "https://www.shutterstock.com/shutterstock/photos/2467067641/display_1500/stock-photo-modern-printer-on-chest-of-drawers-in-office-closeup-2467067641.jpg" },
//     { name: "Labels, Stickers & Packaging", image: "https://img.freepik.com/free-photo/medium-shot-woman-using-printer_23-2149713658.jpg?t=st=1729703843~exp=1729707443~hmac=324792526effbad17dd421d86c19835ef45f76590e927179ad97c6c9f81d87ff&w=1380" },
//     { name: "Photo Gifts", image: "https://as2.ftcdn.net/v2/jpg/05/23/05/29/1000_F_523052940_OekSqfN5SMFdhb1abx2jvoFMwAGoS3HS.jpg" },
//     { name: "Custom Bags", image: "https://www.shutterstock.com/shutterstock/photos/2277611225/display_1500/stock-photo-woman-loading-paper-into-printer-at-wooden-table-indoors-closeup-2277611225.jpg" },
//     { name: "Custom Drinkware", image: "https://wallpapers.com/images/hd/black-printer-machine-o1x5oukyudrc8khp.jpg" },
//     { name: "Custom Stationery", image: "https://img.freepik.com/free-photo/close-up-woman-working-laptop_23-2149300650.jpg?t=st=1729704259~exp=1729707859~hmac=e6f9a394d4941796e95e421c9b8b3b6159c34e01e210d31ab328faecbb6f39ca&w=1380" },
//     { name: "Custom Stamps & Ink", image: "https://img.freepik.com/free-photo/home-printer-based-toner_23-2149287456.jpg?t=st=1729704050~exp=1729707650~hmac=08d1c7b8793e6a8c40e450486015d138f09ef8f2a4faeba8856bd57d28eb4fbf&w=1380" },
//   ]);

//   // Calculate the item width and visible items based on the viewport width

//   useEffect(() => {
//     const updateItemWidth = () => {
//       const containerWidth = window.innerWidth;
//       const gap = 16; 
//       const calculatedItemWidth = (containerWidth - (gap * (8 - 1))) / 6; // Adjust for the gap between items
//       setItemWidth(calculatedItemWidth);
//       setVisibleItems(Math.floor(containerWidth / calculatedItemWidth));
//     };

//     updateItemWidth();
//     window.addEventListener("resize", updateItemWidth);

//     return () => window.removeEventListener("resize", updateItemWidth);
//   }, []);

//   const nextSlide = () => {
//     if (slide < categories.length - visibleItems) {
//       setSlide(slide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (slide > 0) {
//       setSlide(slide - 1);
//     }
//   };

//   return (
//     <div className="w-full mt-10">
//       <h1 className="text-2xl font-semibold mb-4 text-center h-[38px]">Explore all categories</h1>
//       <div className="relative">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
//           disabled={slide === 0}
//         >
//           <FaArrowLeft />
//         </button>

//         {/* Categories Carousel */}
//         <div className="overflow-hidden w-full">
//           <div
//             className="flex transition-transform ease-out duration-300"
//             style={{ transform: `translateX(-${slide * (itemWidth + 16)}px)` }} // Adjust translation to account for gap
//           >
//             {categories.map((cat, index) => (
//               <div
//                 key={index}
//                 className="shrink-0 text-center mx-2"
//                 style={{ width: itemWidth }}
//               >
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="w-full h-auto rounded-[30px]" 
//                 />
//                 <div className="mt-2">{cat.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
//           disabled={slide === categories.length - visibleItems}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;



import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Header() {
  const [slide, setSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);

  const [categories] = useState([
    { name: "Business Card Printer", image: "https://img.freepik.com/free-photo/business-card-printer_23-2149628827.jpg?w=1380" },
    { name: "Inkjet Printer", image: "https://img.freepik.com/free-photo/inkjet-printer-office_23-2149628805.jpg?w=1380" },
    { name: "Heat Press Printer", image: "https://www.shutterstock.com/shutterstock/photos/2467067641/display_1500/stock-photo-modern-printer-on-chest-of-drawers-in-office-closeup-2467067641.jpg" },
    { name: "Label Printer", image: "https://img.freepik.com/free-photo/woman-printing-labels_23-2149713658.jpg?w=1380" },
    { name: "3D Printer", image: "https://as2.ftcdn.net/v2/jpg/05/23/05/29/1000_F_523052940_OekSqfN5SMFdhb1abx2jvoFMwAGoS3HS.jpg" },
    { name: "T-Shirt Printer", image: "https://www.shutterstock.com/shutterstock/photos/2277611225/display_1500/stock-photo-woman-loading-paper-into-printer-at-wooden-table-indoors-closeup-2277611225.jpg" },
    { name: "Photo Printer", image: "https://wallpapers.com/images/hd/black-printer-machine-o1x5oukyudrc8khp.jpg" },
    { name: "Multifunction Printer", image: "https://img.freepik.com/free-photo/woman-using-laptop-multifunction-printer_23-2149300650.jpg?w=1380" },
    { name: "Vinyl Cutter", image: "https://img.freepik.com/free-photo/home-printer-vinyl-cutter_23-2149287456.jpg?w=1380" },
  ]);

  useEffect(() => {
    const updateItemWidth = () => {
      const containerWidth = window.innerWidth;
      const gap = 16; 
      const calculatedItemWidth = (containerWidth - (gap * (9 - 1))) / 6; // Adjust for the gap between items
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
      <h1 className="text-2xl font-semibold mb-4 text-center h-[38px]">Explore all Printers</h1>
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
                <div className="mt-2">{cat.name}</div>
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

export default Header;


