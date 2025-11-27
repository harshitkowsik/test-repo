
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FormDataState, Theme, CourseCategory } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import RegistrationPage from './pages/RegistrationPage';
import FeedbackPage from './pages/FeedbackPage';
import CourseListPage from './pages/CourseListPage';
import ContactPage from './pages/ContactPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';


const AppContent: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | null>(null);
  const [formData, setFormData] = useState<FormDataState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    experience: '',
    motivation: '',
  });
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );
  const navigate = useNavigate();

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

  const handleCategorySelect = (category: CourseCategory) => {
    setSelectedCategory(category);
    navigate('/courses/list');
  };

  const handleCourseEnroll = (courseName: string) => {
    setSelectedCourse(courseName);
    setFormData({ ...formData, course: courseName });
    navigate('/registration');
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
       <style>
        {`
          .rounded-button {
            border-radius: 8px;
          }
        `}
      </style>
      

      <Navbar theme={theme} setTheme={setTheme} handleCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      <main className="pt-16">{/* Add padding top to account for fixed navbar */}</main>
      <Routes>
        <Route path="/" element={<HomePage handleCategorySelect={handleCategorySelect} />} />
        <Route path="/courses" element={<CoursesPage handleCategorySelect={handleCategorySelect} />} />
        <Route path="/courses/list" element={<CourseListPage category={selectedCategory} handleCourseEnroll={handleCourseEnroll} />} />
        <Route path="/registration" element={<RegistrationPage selectedCourse={selectedCourse} formData={formData} handleInputChange={handleInputChange} />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer handleCategorySelect={handleCategorySelect} />
    </div>
  );
};


export default AppContent;
