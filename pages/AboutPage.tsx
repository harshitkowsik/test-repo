import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
import { testimonials } from '../data/testData';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white dark:bg-gray-800 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                About LearnSpire
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                LearnSpire is a leading educational platform dedicated to
                empowering learners worldwide with high-quality, accessible, and
                practical education. Founded with the vision of making learning
                engaging and effective, we bridge the gap between traditional
                education and modern industry requirements.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our mission is to inspire and enable individuals to achieve
                their full potential through innovative learning experiences,
                expert instruction, and a supportive community of learners and
                educators.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500">
                    1,000+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Courses Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image-gallary/slide-image1.jpeg"
                alt="LearnSpire Campus"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Committed to your success, our team brings expertise and passion to education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700/50 p-8 rounded-lg text-center flex flex-col items-center"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-gray-200 dark:border-gray-600"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/team" className="rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-semibold text-lg transition-colors duration-300">
              View All Team Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;