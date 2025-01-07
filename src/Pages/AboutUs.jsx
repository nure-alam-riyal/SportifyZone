

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>

        {/* Company Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At SportsGear, we’re passionate about providing top-quality sports
            equipment and accessories to athletes and enthusiasts around the
            globe. Established in 2010, we’ve been committed to delivering
            innovative products that enhance performance, ensure safety, and
            inspire people to achieve their goals.
          </p>
        </div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mission Statement */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower athletes at all levels by providing
              reliable, cutting-edge equipment that meets their unique needs.
              We aim to foster a culture of excellence, innovation, and
              inclusivity in the world of sports.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Integrity: We prioritize honesty and transparency.</li>
              <li>Quality: We ensure every product meets the highest standards.</li>
              <li>Innovation: We embrace technology to enhance the athlete's experience.</li>
              <li>Community: We strive to build a strong, supportive community of athletes.</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Team Member */}
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                John Doe
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Add more team members as needed */}
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alex Brown
              </h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
