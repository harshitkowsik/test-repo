import React from 'react';
import { Page, Theme } from '../types';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  currentPage: Page;
  handleNavigation: (page: Page, anchor?: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, handleNavigation, theme, setTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900/80 shadow-lg dark:border-b dark:border-gray-800 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
             <img src="/learnspire-logo.jpg" alt="Vidyate Logo" className="h-11 rounded" />
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => handleNavigation("home")}
                className={`cursor-pointer font-medium transition-colors duration-300 ${currentPage === "home" ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"}`}
              >
                Home
              </button>
              {/* <button
                onClick={() => handleNavigation("home", "about")} // Scroll to about section on Home
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-300"
              >
                About
              </button> */}
              <button
                onClick={() => handleNavigation("courses")}
                className={`cursor-pointer font-medium transition-colors duration-300 ${currentPage === "courses" ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"}`}
              >
                Courses
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className={`cursor-pointer font-medium transition-colors duration-300 ${currentPage === "contact" ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"}`}
              >
                Contact
              </button>
              <button
                onClick={() => handleNavigation("feedback")}
                className={`cursor-pointer font-medium transition-colors duration-300 ${currentPage === "feedback" ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"}`}
              >
                Feedback
              </button>
            </div>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <button
              onClick={() => handleNavigation("courses")}
              className="hidden sm:block rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-semibold transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;