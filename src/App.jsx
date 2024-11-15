import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './sections/Footer';
import AboutUs from './pages/About';
import IconBox from './pages/Service';
import ContactForm from './pages/ContactForm';
import ShopPage from './pages/ShopPage';
import Disclaimer from './footer options pages/Disclaimer';
import Faqs from './footer options pages/Faqs';
import PrivacyPolicy from './footer options pages/PrivacyPolicy';
import TermAndConditions from './footer options pages/TermAndCondition';
import RefundAndReturn from './footer options pages/RefundAndReturn';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/service" element={<IconBox />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/t&c" element={<TermAndConditions />} />
            <Route path="/refundAndreturn" element={<RefundAndReturn />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
