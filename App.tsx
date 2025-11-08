
import React, { useState, useEffect } from 'react';
import { Page, FormDataState, Theme, CourseCategory } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import RegistrationPage from './pages/RegistrationPage';
import FeedbackPage from './pages/FeedbackPage';
import CourseListPage from './pages/CourseListPage';
import ContactPage from './pages/ContactPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => (window.location.hash.replace('#/', '') as Page) || 'home');
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | null>(null);
  const [formData, setFormData] = useState<FormDataState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    education: "",
    experience: "",
    motivation: "",
  });
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement;
        root.classList.toggle('dark', mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const getPageFromHash = (): Page => {
      const hash = window.location.hash.replace('#/', '');
      // A simple list of valid pages to avoid invalid hash values
      const validPages: Page[] = ["home", "courses", "courseList", "registration", "feedback", "about", "contact", "terms", "privacy"];
      if (validPages.includes(hash as Page)) {
        return hash as Page;
      }
      return 'home';
    };

    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    // Set initial page in case the hash is empty or invalid
    if (!window.location.hash || getPageFromHash() === 'home') {
      window.location.hash = '#/home';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Handle scrolling to anchor links
    if (currentPage === 'about') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleNavigation = (page: Page, anchor?: string) => {
    window.location.hash = `#/${page}`;
  };

  const handleCategorySelect = (category: CourseCategory) => {
    setSelectedCategory(category);
    handleNavigation("courseList");
  };

  const handleCourseEnroll = (courseName: string) => {
    setSelectedCourse(courseName);
    setFormData({ ...formData, course: courseName });
    handleNavigation("registration");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage handleNavigation={handleNavigation} handleCategorySelect={handleCategorySelect} />;
      case "courses":
        return <CoursesPage handleCategorySelect={handleCategorySelect} />;
      case "courseList":
        return (
          <CourseListPage
            category={selectedCategory}
            handleCourseEnroll={handleCourseEnroll}
            handleNavigation={handleNavigation}
          />
        );
      case "registration":
        return (
          <RegistrationPage
            selectedCourse={selectedCourse}
            formData={formData}
            handleInputChange={handleInputChange}
            handleNavigation={handleNavigation}
          />
        );
      case "feedback":
        return <FeedbackPage />;
      case "about":
         return <HomePage handleNavigation={handleNavigation} handleCategorySelect={handleCategorySelect} />;
      case "contact":
         return <ContactPage />;
      case "terms":
        return <TermsAndConditionsPage />;
      case "privacy":
        return <PrivacyPolicyPage />;
      default:
        return <HomePage handleNavigation={handleNavigation} handleCategorySelect={handleCategorySelect}/>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
       <style>
        {`
          .rounded-button {
            border-radius: 8px;
          }
        `}
      </style>

      <Navbar currentPage={currentPage} handleNavigation={handleNavigation} theme={theme} setTheme={setTheme} />
      <main className="pt-16">{/* Add padding top to account for fixed navbar */}</main>
      {renderPage()}
      <Footer handleNavigation={handleNavigation} handleCategorySelect={handleCategorySelect} />
    </div>
  );
};

export default App;
