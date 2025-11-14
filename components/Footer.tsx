
import React from 'react';
import { Page, CourseCategory } from '../types';

interface FooterProps {
  handleNavigation: (page: Page, anchor?: string) => void;
  handleCategorySelect: (category: CourseCategory) => void;
}

const Footer: React.FC<FooterProps> = ({ handleNavigation, handleCategorySelect }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  onClick={() => handleCategorySelect('training_placement')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300 text-left"
                >
                  Training & Placement
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategorySelect('professional')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300 text-left"
                >
                  Professional & Job-Oriented
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategorySelect('academics')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300 text-left"
                >
                  Academic Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategorySelect('language')}
                  className="cursor-pointer text-gray-400 hover:text-green-400 transition-colors duration-300 text-left"
                >
                  Language Courses
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
          <p className="text-gray-400 text-sm">
            © 2025 LearnSpire. All rights reserved. |{" "}
            <button
              onClick={() => handleNavigation("privacy")}
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </button>{" "}
            |{" "}
            <button
              onClick={() => handleNavigation("terms")}
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >Terms of Service</button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
