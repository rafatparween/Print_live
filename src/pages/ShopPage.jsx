import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const ShopPage = () => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = (product) => {
    const isItemInCart = cart.some((item) => item.id === product.id);
    if (isItemInCart) {
      Swal.fire({
        title: 'Item already in cart',
        text: 'This item is already in your cart.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else {
      addToCart(product);
    }
  };

  return (
    <main className="bg-[#38bdf8] flex flex-col text-white justify-center items-center ">
      <div className="m-4">
        <h1 className="text-6xl text-center border-b-4 border-black">
          Our Products
        </h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[95%] py-5 bg-white px-4 rounded shadow-2xl">
        {products.map(
          ({ id, name, originalPrice, currentPrice, category, image }) => {
            return (
              <Card
                key={id}
                className="h-full border-2 border-gray-200 rounded-lg shadow-md"
              >
                <Card.Img
                  variant="top"
                  src={image}
                  className="rounded-t-lg h-48 object-contain p-2"
                />
                <Card.Body className="p-4 rounded-md border-t-4 border-black">
                  <Card.Title className="text-lg font-semibold mb-2">
                    {name}
                  </Card.Title>
                  <div className="flex items-center mb-2">
                    <span className="text-blue-600 text-xl mr-3">
                      ${currentPrice}
                    </span>
                    <span className="text-red-600 line-through">
                      ${originalPrice}
                    </span>
                  </div>
                  <p className="text-gray-600 font-bold mb-2">{category}</p>
                  <div className="flex items-center">
                    <Button
                      variant="primary"
                      className="bg-red-500 border-0 rounded-none"
                      onClick={() =>
                        handleAddToCart({ id, name, currentPrice, image })
                      }
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          },
        )}
      </section>
    </main>
  );
};

export default ShopPage;

const products = [
  {
    id: 1,
    name: 'HP [Windows 11 Home] 255 G8 Notebook',
    originalPrice: 950.0,
    currentPrice: 825.0,
    category: 'LAPTOPS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/91tJ0jQJcL._SX679_-1.jpg',
  },
  {
    id: 2,
    name: 'HP 15s, Ryzen 5-5500U, 16GB RAM',
    originalPrice: 1145.0,
    currentPrice: 1060.0,
    category: 'LAPTOPS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/41nZQgwhMSL-1.jpg',
  },
  {
    id: 3,
    name: 'HP AIO PC 12th Gen Intel Core i3',
    originalPrice: 1050.0,
    currentPrice: 970.0,
    category: 'COMPUTERS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/71mh4lZbFL._SX679_.jpg',
  },
  {
    id: 4,
    name: 'HP All-in-One PC 13th Gen',
    originalPrice: 705.0,
    currentPrice: 650.0,
    category: 'COMPUTERS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/71pFI90l-aL._SX679_-1.jpg',
  },
  {
    id: 5,
    name: 'HP All-in-One PC Intel Pentium',
    originalPrice: 380.0,
    currentPrice: 350.0,
    category: 'COMPUTERS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/71jnByVetPL._SX522_-1.jpg',
  },
  {
    id: 6,
    name: 'HP DeskJet 2332 Inkjet Printer',
    originalPrice: 415.0,
    currentPrice: 380.0,
    category: 'PRINTERS',
    image: 'https://printexpress123.com/wp-content/uploads/2024/05/m7.jpg',
  },
  {
    id: 7,
    name: 'HP Ink Tank 419 wifi Printer',
    originalPrice: 749.0,
    currentPrice: 700.0,
    category: 'PRINTERS',
    image: 'https://printexpress123.com/wp-content/uploads/2024/05/m6.jpg',
  },
  {
    id: 8,
    name: 'HP Ink Tank 516 Color Printer',
    originalPrice: 415.0,
    currentPrice: 400.0,
    category: 'PRINTERS',
    image: 'https://printexpress123.com/wp-content/uploads/2024/05/m2-1.jpg',
  },
  {
    id: 9,
    name: 'HP Ink Tank 516 Color Printer',
    originalPrice: 390.0,
    currentPrice: 365.0,
    category: 'PRINTERS',
    image: 'https://printexpress123.com/wp-content/uploads/2024/05/m2.jpg',
  },
  {
    id: 10,
    name: 'HP Laptop 15, 13th Gen Intel Core i3',
    originalPrice: 315.0,
    currentPrice: 285.0,
    category: 'LAPTOPS',
    image:
      'https://printexpress123.com/wp-content/uploads/2024/05/619cGxBxfVL._SX679_-1.jpg',
  },
  {
    id: 11,
    name: 'HP Laptop 15s, 12th Gen',
    originalPrice: 1085.0,
    currentPrice: 880.0,
    category: 'LAPTOPS',
    image:
      'https://printexpress123.com/wp-content/uploads/2024/05/712raiwnj9L._SX679_-1.jpg',
  },
  {
    id: 12,
    name: 'HP M24fw FHD Monitor',
    originalPrice: 70.0,
    currentPrice: 60.0,
    category: 'MONITORS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/71qXYJYt8fL._SX679_-1.jpg',
  },
  {
    id: 13,
    name: 'HP M27f 27-inches',
    originalPrice: 180.0,
    currentPrice: 150.0,
    category: 'MONITORS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/81YbD4FsD2S._SX522_-1.jpg',
  },
  {
    id: 14,
    name: 'HP V20 19.5 inch(49.53 cm)',
    originalPrice: 120.0,
    currentPrice: 90.0,
    category: 'MONITORS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/81KcQCMTTfL._SX679_-1.jpg',
  },
  {
    id: 15,
    name: 'HP V22i G5 FHD Monitor, 21.5 inch',
    originalPrice: 160.0,
    currentPrice: 155.0,
    category: 'MONITORS',
    image:
      'https://printexpress123.com/wp-content/uploads/2021/12/81miiReBXUL._SX679_-1.jpg',
  },
];
