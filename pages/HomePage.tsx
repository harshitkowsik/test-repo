import React, { useEffect } from 'react';
import { Page } from '../types';

interface HomePageProps {
  handleNavigation: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ handleNavigation }) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // add visible classes and remove initial hidden transform
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(0, 0, 0, 0.8)), url('https://picsum.photos/1440/800')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mt-10 mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Transform Your Future with LearnSpire
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Unlock your potential with our comprehensive educational platform.
            Expert-led courses, flexible learning, and industry-relevant skills
            to accelerate your career growth.
          </p>
          <button
            onClick={() => handleNavigation("courses")}
            className="rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Why LearnSpire Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Why Choose LearnSpire?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We provide world-class education with innovative teaching methods
              and personalized learning experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="reveal p-8 rounded-lg hover:shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-6">
              <div className="text-5xl text-green-500 mb-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Instructors
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from industry professionals with years of real-world
                experience and proven teaching expertise.
              </p>
            </div>
            <div className="reveal p-8 rounded-lg hover:shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-6">
              <div className="text-5xl text-blue-600 mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Flexible Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Study at your own pace with 24/7 access to course materials and
                interactive learning modules.
              </p>
            </div>
            <div className="reveal p-8 rounded-lg hover:shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-6">
              <div className="text-5xl text-purple-500 mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Industry Certification
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn recognized certificates that boost your career prospects and
                validate your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive courses designed to meet your learning goals and
              career aspirations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-6 border border-transparent hover:border-purple-500">
              <div className="text-4xl text-purple-500 mb-4">
                <i className="fas fa-pills"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Training & Placement in Pharma
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Gain practical experience and job-ready skills through pharma training and placement.
              </p>
              <button
                onClick={() => handleNavigation("pharma")}
                className="rounded-button whitespace-nowrap cursor-pointer text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            <div className="reveal bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-6 border border-transparent hover:border-blue-500">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-language"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Language Courses
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Master new languages with interactive lessons and native speaker
                guidance.
              </p>
              <button
                onClick={() => handleNavigation("courses")}
                className="rounded-button whitespace-nowrap cursor-pointer text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            {/* <div className="reveal bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-6 border border-transparent hover:border-green-500">
              <div className="text-4xl text-green-500 mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Academics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Strengthen your foundation in core subjects with expert tutoring
                and resources.
              </p>
              <button
                onClick={() => handleNavigation("courses")}
                className="rounded-button whitespace-nowrap cursor-pointer text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div> */}
            <div className="reveal bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-6 border border-transparent hover:border-purple-500">
              <div className="text-4xl text-purple-500 mb-4">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Digital Skills & Tech
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Stay ahead with cutting-edge technology and digital literacy
                programs.
              </p>
              <button
                onClick={() => handleNavigation("courses")}
                className="rounded-button whitespace-nowrap cursor-pointer text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            <div className="reveal bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-6 border border-transparent hover:border-orange-500">
              <div className="text-4xl text-orange-500 mb-4">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Professional & Job-Oriented
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Develop career-focused skills that employers value in today's
                market.
              </p>
              <button
                onClick={() => handleNavigation("courses")}
                className="rounded-button whitespace-nowrap cursor-pointer text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hear from learners who transformed their careers with LearnSpire
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal bg-gray-50 dark:bg-gray-700/50 p-8 rounded-lg transition-all duration-700 ease-out opacity-0 translate-y-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                  alt="Gaurav Singh"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Gaurav Singh</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Digital Marketing Course
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "LearnSpire's digital marketing course completely changed my
                career trajectory. The practical approach and expert guidance
                helped me land my dream job!"
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="reveal bg-gray-50 dark:bg-gray-700/50 p-8 rounded-lg transition-all duration-700 ease-out opacity-0 translate-y-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                  alt="Priya Jaiswal"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Priya Jaiswal</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Web Development Course
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "The web development program at LearnSpire is outstanding. The
                hands-on projects and mentorship made learning enjoyable and
                effective."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="reveal bg-gray-50 dark:bg-gray-700/50 p-8 rounded-lg transition-all duration-700 ease-out opacity-0 translate-y-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                  alt="Ayush Gupta"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Ayush Gupta
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data Analytics Course
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "The Data Analytics program exceeded my expectations. The practical projects,
                real-world datasets, and this helped me transition
                into a data analyst role at new company."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                About LearnSpire
              </h2>
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
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">
                    1,000+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Courses Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://imgs.search.brave.com/U2lYFsHYM8iKHga91noaWeaOl3jbgRhHkrUcYaQ7zFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8x/MS8xMy8wOS81OC9h/ZHVsdC1lZHVjYXRp/b24tMzgxMjY5M182/NDAuanBn"
                alt="LearnSpire Campus"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with LearnSpire
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest course updates, learning
            tips, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex-col">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none text-gray-900 dark:bg-gray-800 bright:text-white dark:placeholder-gray-400"
            />
            <button className="rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;