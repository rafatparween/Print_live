import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const NewArrivals = () => {
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
    <div className="container text-center">
      <main className="p-4 my-10">
        <div>
          <section className="flex flex-col md:flex-row md:justify-between">
            <div className="text-center md:text-left mb-3 md:mb-0">
              <p className="text-gray-500 text-xl font-bold">
                Check out latest Products
              </p>
              <p className="text-5xl font-bold my-3">New Arrivals</p>
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/shop"
                className="border-2 border-gray-500 p-2 hover:border-none hover:bg-gray-500 hover:text-white"
              >
                View All
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {newArrivalsProducts.map(
              ({ id, imageUrl, productName, price, priviousPrice, type }) => {
                return (
                  <Card style={{ width: '18rem' }} key={id}>
                    <Card.Img
                      variant="top"
                      src={imageUrl}
                      className="rounded-lg h-[15rem]"
                    />
                    <Card.Body className="border-t-4 border-black rounded-lg">
                      <Card.Title>{productName}</Card.Title>
                      <Card.Text>
                        <span className="text-blue-600 text-xl mr-3">
                          {price}
                        </span>
                        <span className="text-red-600 line-through">
                          {priviousPrice}
                        </span>
                        <p className="text-gray-600 font-bold">{type}</p>
                      </Card.Text>

                      <Button
                        variant="primary"
                        className="bg-red-500 border-0 rounded-none"
                        onClick={() =>
                          handleAddToCart({
                            id,
                            productName,
                            price,
                            imageUrl,
                            type,
                          })
                        }
                      >
                        ADD TO CART
                      </Button>
                    </Card.Body>
                  </Card>
                );
              },
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default NewArrivals;

const newArrivalsProducts = [
  {
    id: 1,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m2.jpg',
    productName: 'HP Ink Tank 516 Color Printer',
    price: '$390.00',
    priviousPrice: '$365.00',
    type: 'PRINTERS',
  },
  {
    id: 2,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m6.jpg',
    productName: 'HP Ink Tank 419 wifi Printer',
    price: '$700.00',
    priviousPrice: '$749.00',
    type: 'PRINTERS',
  },
  {
    id: 3,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m2-1.jpg',
    productName: 'HP Ink Tank 516 Color Printer',
    price: '$400.00',
    priviousPrice: '$415.00',
    type: 'PRINTERS',
  },
  {
    id: 4,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m7.jpg',
    productName: 'HP DeskJet 2332 Inkjet Printer',
    price: '$380.00',
    priviousPrice: '$415.00',
    type: 'PRINTERS',
  },
];
