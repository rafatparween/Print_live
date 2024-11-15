import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const ProductAvailableSection = () => {
  const array = [
    {
      id: 1,
      imageUrl:
        'https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/03/full/1691084532-0022.jpg',
      heading: 'Laptop & Computers',
    },
    {
      id: 2,
      imageUrl:
        'https://5.imimg.com/data5/SELLER/Default/2021/11/PU/QK/IJ/22794873/monitor-and-screen-accessories-250x250.jpg',
      heading: 'Monitors & Accessories',
    },
    {
      id: 3,
      imageUrl:
        'https://mediaserver.goepson.com/ImConvServlet/imconv/79b5418733d4d325baf3501203b0521c02805eef/original?use=productpictures&hybrisId=B2C&assetDescr=mobile-wireless-solution_connect_shopping_fg-tile',
      heading: 'Printers & Scanners',
    },
  ];

  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const container = document.getElementById('carousel-container');
    if (container) {
      setScrollX(container.scrollLeft);
    }
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      const scrollAmount = Math.min(container.scrollLeft - 400, 0);
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setScrollX(scrollAmount);
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      const scrollAmount = Math.min(
        container.scrollLeft + 400,
        container.scrollWidth - container.clientWidth,
      );
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setScrollX(scrollAmount);
    }
  };

  const isLargeDevice = () => {
    const width = window.innerWidth;
    return width >= 1200; // Adjust this value based on your large device threshold
  };

  return (
    <main className="px-8 py-6 bg-[#38bdf8] my-10">
      <div className="relative flex justify-center">
        <div
          className="overflow-x-auto whitespace-nowrap"
          style={{ maxWidth: 'calc(100% - 2rem)' }}
        >
          {array.map(({ id, imageUrl, heading }) => (
            <div
              key={id}
              className="inline-block mx-4 hover:scale-90 transition-transform duration-1000"
              style={{ width: '20rem' }}
            >
              <Card>
                <Card.Img variant="top" src={imageUrl} className="h-60" />
                <div className="bg-blue-800 py-6 text-center text-white hover:bg-black">
                  <Card.Title>{heading}</Card.Title>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <button
          className={`absolute top-20 bottom-0 left-0 ml-2 bg-black bg-opacity-50 py-2 px-4 rounded-full h-20 text-4xl ${
            scrollX === 0 || isLargeDevice() ? 'hidden' : 'block'
          }`}
          onClick={scrollLeft}
        >
          ⏩
        </button>
        <button
          className={`absolute top-20 bottom-0 right-0 mr-2 bg-black bg-opacity-50 py-2 px-4 rounded-full h-20 text-4xl ${
            scrollX >=
              document.getElementById('carousel-container')?.scrollWidth -
                document.getElementById('carousel-container')?.clientWidth ||
            isLargeDevice()
              ? 'hidden'
              : 'block'
          }`}
          onClick={scrollRight}
        >
          ⏪
        </button>
      </div>
    </main>
  );
};

export default ProductAvailableSection;
