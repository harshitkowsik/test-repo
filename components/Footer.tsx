import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CourseCategory, Theme } from '../types';

interface FooterProps {
  handleCategorySelect: (category: CourseCategory) => void;
}

const Footer: React.FC<FooterProps> = ({ handleCategorySelect }) => {
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
                <Link
                  to="/courses/list"
                  onClick={() => handleCategorySelect('training_placement')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Training & Placement
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/list"
                  onClick={() => handleCategorySelect('professional')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Professional & Job-Oriented
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/list"
                  onClick={() => handleCategorySelect('academics')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Academic Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/list"
                  onClick={() => handleCategorySelect('language')}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Language Courses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Feedback
                </Link>
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
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
