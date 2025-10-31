import React from 'react';
import { Page } from '../types';

interface FooterProps {
  // allow optional anchor param to remain compatible with App.handleNavigation
  handleNavigation: (page: Page, anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleNavigation }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              LearnSpire
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering learners worldwide with high-quality education and
              innovative learning experiences.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-facebook-f text-xl cursor-pointer hover:text-green-400 transition-colors duration-300"></i>
              <i className="fab fa-twitter text-xl cursor-pointer hover:text-green-400 transition-colors duration-300"></i>
              <i className="fab fa-linkedin-in text-xl cursor-pointer hover:text-green-400 transition-colors duration-300"></i>
              <i className="fab fa-instagram text-xl cursor-pointer hover:text-green-400 transition-colors duration-300"></i>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Training & Placement in Pharma
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Language Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Academic Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Digital Skills & Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Professional & Job-Oriented
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("home")}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("courses")}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("feedback")}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('home', 'about')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-3"></i>
                <a
                  href="mailto:support@learnspire.org"
                  className="text-gray-400 hover:text-green-300 transition-colors duration-200"
                  aria-label="Email support"
                >
                  support@learnspire.org
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-3"></i>
                <a
                  href="mailto:hr@learnspire.org"
                  className="text-gray-400 hover:text-green-300 transition-colors duration-200"
                  aria-label="Email HR"
                >
                  hr@learnspire.org
                </a>
              </div>
              {/* <div className="flex items-center">
                <i className="fas fa-phone text-green-400 mr-3"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-400 mr-3"></i>
                <span className="text-gray-400">
                  Dehradun, Uttarakhand, India
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LearnSpire. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;