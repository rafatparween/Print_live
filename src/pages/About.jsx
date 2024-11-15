import Footer from '../sections/Footer';
import TestimonialPage from '../sections/Testimonial';

export default function AboutUs() {
  return (
    <>
      <div className=" flex justify-center items-center  px-8 py-6 bg-[#38bdf8]">
        <div className="aboutCase flex  w-full shadow-md  mt-3 rounded-sm bg-white">
          <section className="w-full p-5 ">
            <h2 className="text-4xl font-bold ">
              Welcome To Printer Mart Solution
            </h2>
            <div className="mt-3 ">
              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">
                  About Us
                </h3>
                <p class="text-gray-600">
                  At Printer Mart Solution, we specialize in selling
                  high-quality refurbished printers. Each printer undergoes
                  rigorous inspection, repair, and testing to ensure top-notch
                  performance and reliability. Our commitment to excellence
                  guarantees you receive exceptional value without compromising
                  on quality.
                </p>
              </div>

              <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">
                  Our Mission
                </h3>
                <p class="text-gray-600">
                  Our mission is to make premium printing solutions accessible
                  and eco-friendly. By refurbishing printers, we reduce
                  electronic waste and promote sustainability, offering products
                  that meet your needs while contributing to a healthier planet.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full p-5 hidden md:block lg:block">
            <img
              src="https://printexpress123.com/wp-content/uploads/2024/05/about2.jpg"
              alt=""
              className="w-full hover:scale-105 transition-transform duration-1000 rounded-md"
            />
          </section>
        </div>
      </div>
      <TestimonialPage />
    </>
  );
}
