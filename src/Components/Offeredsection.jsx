import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Offeredsection = () => {
  return (
    <div className="bg-gray-200 py-10 bg-opacity-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-center  my-10">
                            <div className="md:w-2/3">
                                <Slide>
                                    <h2 className="font-bold font-rancho text-5xl">Current Promotions & Deals</h2>
                                    <p>ongoing discounts, exclusive offers, and time-limited deals on products, encouraging customers to shop, save, and explore attractive purchasing opportunities.</p>
        
                                </Slide></div>
                        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
          <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Promotion 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Winter Sale - Up to 50% Off!
              </h3>
              <p className="text-gray-600 mb-4">
                Don’t miss our exclusive winter sale! Grab your favorite gear
                at unbeatable prices.
              </p>
              <Link to='/allsports'><button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Shop Now
              </button></Link>
             
            </div>
          </div>

         
          <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Promotion 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Free Shipping on Orders Over $50
              </h3>
              <p className="text-gray-600 mb-4">
                Enjoy free shipping on all orders above $50. Shop now and save
                big!
              </p>
              <Link to='/allsports'><button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Shop Now
              </button></Link>
            </div>
          </div>

    
          <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Promotion 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Buy 1 Get 1 Free
              </h3>
              <p className="text-gray-600 mb-4">
                For a limited time, enjoy a Buy 1 Get 1 Free offer on select
                items!
              </p>
              <Link to='/allsports'><button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Shop Now
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offeredsection;
