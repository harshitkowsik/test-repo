import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Theme, CourseCategory } from '../types';
import ThemeSwitcher from './ThemeSwitcher';
import { courseCategories } from '../data/courses';

interface NavbarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  selectedCategory: CourseCategory | null;
  handleCategorySelect: (category: CourseCategory) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme, selectedCategory, handleCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    return `cursor-pointer font-medium transition-colors duration-300 ${isActive ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
      }`;
  };

  const handleCourseCategoryClick = (category: CourseCategory) => {
    handleCategorySelect(category);
    setIsCoursesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg dark:border-b dark:border-gray-800 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
             <img src="/learnspire-logo-removebg.png" alt="LearnSpire Logo" className="h-12 rounded logo-shadow" />
            </span>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <Link to="/courses" className={`${getLinkClass("/courses")} flex items-center gap-1`}>
                  Courses
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`}
                  ></i>
                </Link>
                {isCoursesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2">
                    {courseCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCourseCategoryClick(category.id)} className={`w-full flex items-center px-4 py-2 text-sm text-left transition-colors duration-200 ${
                          (location.pathname === '/courses/list' && selectedCategory === category.id) ||
                          (selectedCategory === null && category.id === 'training_placement')
                            ? 'bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <i className={`fas ${category.icon} w-5 mr-3 ${category.color}`}></i>
                        {category.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/team" className={getLinkClass("/team")}>
                Team
              </Link>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
              <Link to="/feedback" className={getLinkClass("/feedback")}>
                Feedback
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-0 md:space-x-2">
              <ThemeSwitcher theme={theme} setTheme={setTheme} />
              <Link to="/courses" className="hidden sm:block rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-semibold transition-colors duration-300">
                Get Started
              </Link>
              <div className="md:hidden" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Open menu"
                >
                  <i className="fas fa-bars text-xl"></i>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-4 mt-2 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                    <span className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Courses</span>
                    {courseCategories.map((category) => (
                       <button
                        key={category.id}
                        onClick={() => handleCourseCategoryClick(category.id)} className={`block w-full flex items-center px-4 py-2 text-sm text-left transition-colors duration-200 ${
                          (location.pathname === '/courses/list' && selectedCategory === category.id) ||
                          (selectedCategory === null && category.id === 'training_placement')
                            ? 'bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {category.title}
                      </button>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                    <div className="flex flex-col">
                      <Link to="/team" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Our Team</Link>
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
                      <Link to="/feedback" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Feedback</Link>
                      <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <Link
                      to="/courses"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-green-600 dark:text-green-400 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;