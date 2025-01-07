import { Slide } from "react-awesome-reveal";


const Benefits = () => {
  return (
    <div className="bg-gray-50 bg-opacity-10 rounded-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-center items-center text-center  my-16">
                            <div className="md:w-2/3">
                                <Slide>
                                    <h2 className="font-bold font-rancho text-5xl">Why Choose Us?</h2>
                                    
                                </Slide></div>
                        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1 */}
          <div className="bg-gray-50 bg-opacity-40 shadow-md rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 9.75L7.5 16.5h9l-2.25-6.75M12 3v3m0 12v3m7.5-10.5H18M6 7.5H3.75M12 12.75l-4.5 2.25 1.125 3.375M12 12.75l4.5 2.25-1.125 3.375M12 12.75v5.25"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              High-Quality Products
            </h3>
            <p className="text-gray-600">
              Our products are crafted for durability, performance, and safety to help you achieve your goals.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white bg-opacity-40 shadow-md rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8.25l2.25 6.75H9.75L12 8.25zM12 3v3m0 12v3m7.5-10.5H18M6 7.5H3.75"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-600">
              Enjoy free shipping on orders over $50 to make your shopping more affordable.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gray-50 bg-opacity-40 shadow-md rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2.25 6.75M3 12l2.25-6.75m15.75 6.75l-2.25 6.75m2.25-6.75l-2.25-6.75M9.75 9.75l-4.5 2.25M9.75 9.75l4.5 2.25m0-5.25L9.75 9.75m4.5-2.25l4.5 2.25M12 12v3.75"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our team is always ready to assist you with queries and provide the best experience.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white bg-opacity-40 shadow-md rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 3l2.25 6.75m-9 0L3 12m12 9v-6.75m0 0H9.75M21 12h-6.75m0 0L12 15M12 12l-3-1.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Secure Payment Options
            </h3>
            <p className="text-gray-600">
              We offer secure payment gateways for a safe and smooth checkout process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
