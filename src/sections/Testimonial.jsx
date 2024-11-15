export default function TestimonialPage() {
  return (
    <>
      <div className="flex justify-center items-center px-8 py-6 bg-[#38bdf8]">
        <div className="aboutCase flex flex-col md:flex-row w-full shadow-md rounded-sm bg-white">
          <section className="w-full md:w-1/2 p-5">
            <img
              src="https://img.freepik.com/premium-photo/businesswoman-woman-happy-pretty-attractive-professional-adult-female-portrait-business-lady-person-young-success-beauty-office-successful-corporate-confident-caucasian-cheerful_163305-237346.jpg"
              alt=""
              className="w-[90%] h-[100%] md:w-full md:h-full   hover:scale-105 transition-transform duration-1000"
            />
          </section>

          <section className="w-full md:w-1/2 flex flex-col justify-center px-8 py-6">
            {/* ---------------------------------------- */}
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                What We Offer
              </h3>
              <ul class="list-disc list-inside text-gray-600">
                <li>
                  High-Quality Refurbished Printers: Rigorously tested to meet
                  stringent quality standards.
                </li>
                <li>
                  Cost-Effective Solutions: Significant savings without
                  sacrificing performance.
                </li>
                <li>
                  Eco-Friendly Options: Reduce electronic waste with
                  environmentally conscious choices.
                </li>
                <li>
                  Comprehensive Warranty: Six-month warranty on all refurbished
                  printers.
                </li>
                <li>
                  Exceptional Customer Support: Dedicated team for prompt
                  assistance and satisfaction.
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                Warranty and Returns
              </h3>
              <p class="text-gray-600">
                All refurbished printers come with a six-month warranty covering
                defects under normal use. Visit our Returns page for clear and
                fair return policies.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                Our Commitment
              </h3>
              <p class="text-gray-600">
                More than a supplier, we're your partners in efficient,
                eco-friendly printing solutions. Our dedication to quality,
                affordability, and sustainability ensures your satisfaction.
              </p>
            </div>
            {/* ---------------------------------------- */}
          </section>
        </div>
      </div>
    </>
  );
}
