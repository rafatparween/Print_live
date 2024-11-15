import InstantSupport from '../sections/InstantSupport';
import NewArrivals from '../sections/NewArrivals';
import ProductAvailableSection from '../sections/ProductAvailableSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className=" flex justify-center items-center px-8 py-10  h-[90vh]">
        <div className="aboutCase flex  w-full ">
          <section className="w-full p-5 hidden md:block lg:block">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-hp-printer-with-photos-and-paper-near-it-image_2973486.jpg"
              alt=""
              className="w-full hover:scale-105 transition-transform duration-1000 rounded-md"
            />
          </section>
          <section className="w-full p-5 leading-8  flex flex-col justify-center  ">
            <h2 className="text-4xl font-bold ">Diagnose and solve</h2>
            <p>
              "Welcome to our refurbished printer service, where excellence
              meets innovation. Explore top-quality printers known for
              exceptional performance. With round-the-clock support, we
              guarantee a seamless refurbished printing experience. Start today
              and find automated solutions for common computer and printer
              issues."
            </p>
            <Link to="/service">
              <button className="bg-black text-white p-1 rounded mt-3  px-3">
                Explore Now
              </button>
            </Link>
          </section>
        </div>
      </div>

      {/* OTHER SECTIONS COMPONENT CALL  */}
      <InstantSupport />
      <NewArrivals />
      <ProductAvailableSection />
      <WhyChooseUsSection />
    </>
  );
};

export default Home;
