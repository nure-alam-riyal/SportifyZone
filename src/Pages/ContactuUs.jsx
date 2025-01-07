import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions? We'd love to hear from you! Reach out using any of the methods below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
              <FaPhone></FaPhone>
                <span className="text-gray-600">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
            <FaEnvelope></FaEnvelope>
                <span className="text-gray-600">support@sportsgear.com</span>
              </div>
              <div className="flex items-center space-x-4">
               <FaMapMarker></FaMapMarker>
                <span className="text-gray-600">123 Sports Ave, Fitness City, USA</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-500 transition"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-400 transition"
                >
                 <FaTwitter></FaTwitter>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-pink-600 transition"
                >
                <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
