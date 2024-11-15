import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import LoginSignupPage from './LoginSignUpPage';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const navigation = [
    { name: 'Home', link: '/', current: true },
    { name: 'About', link: '/about', current: false },
    { name: 'Shop', link: '/shop', current: false },
    { name: 'Service', link: '/service', current: false },
    { name: 'Contact', link: '/contact', current: false },
  ];
  const [navItems, setNavItems] = useState(navigation);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLinkClick = (index) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavItems(updatedNavItems);
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between md:justify-around px-2 py-3">
        {/* Logo */}
        <div>
          {/* <img
            src="https://i.ibb.co/FW9Br64/hp-logo-removebg-preview.png"
            alt="HP Logo"
            className="h-12"
          /> */}
        </div>

        {/* Center Div - Links */}
        <div className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            Explore
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            Support
          </Link>
        </div>

        {/* Cart & Login/Signup */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaShoppingCart
              className="text-gray-800 text-3xl cursor-pointer hover:text-blue-600 transition duration-300"
              onClick={navigateToCart}
            />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cart.length}
              </span>
            )}
          </div>

          {/* Login/Signup */}
          <AccountBoxIcon
            sx={{ fontSize: '35px' }}
            className="cursor-pointer hover:text-blue-600 transition duration-300"
            onClick={handleShowLoginModal}
          />
          <LoginSignupPage
            showModal={showLoginModal}
            hideModal={handleCloseLoginModal}
          />

          {/* Hamburger Menu */}
          <FaBars
            className="sm:hidden text-gray-800 text-3xl cursor-pointer hover:text-blue-600 transition duration-300"
            onClick={toggleList}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex flex-col items-center justify-center space-y-2 bg-black px-2 py-3 sm:hidden transition duration-300 ease-in-out ${
          showList ? 'block' : 'hidden'
        }`}
      >
        {navItems.map(({ name, link, current }, index) => (
          <li key={name}>
            <Link
              to={link}
              className={`text-white hover:text-gray-300 ${
                current
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-[#38bdf8] hover:text-white hover:rounded-md'
              } px-3 py-2 text-sm font-medium`}
              aria-current={current ? 'page' : undefined}
              onClick={() => handleLinkClick(index)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center justify-center space-x-6 bg-black px-2 py-3">
        {navItems.map(({ name, link, current }, index) => (
          <li key={name}>
            <Link
              to={link}
              className={`text-white hover:text-gray-300 ${
                current
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-[#38bdf8] hover:text-white hover:rounded-md'
              } px-3 py-2 text-sm font-medium`}
              aria-current={current ? 'page' : undefined}
              onClick={() => handleLinkClick(index)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
