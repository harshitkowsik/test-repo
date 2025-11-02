import React, { useState } from 'react';
import { Page, CourseCategory } from '../types';
import { allCourses, courseCategories } from '../data/courses';
import BrochureModal from '../components/BrochureModal.tsx';

interface CourseListPageProps {
  category: CourseCategory | null;
  handleCourseEnroll: (courseName: string) => void;
  handleNavigation: (page: Page) => void;
}

const CourseListPage: React.FC<CourseListPageProps> = ({ category, handleCourseEnroll, handleNavigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseForBrochure, setSelectedCourseForBrochure] = useState<any | null>(null);

  const handleOpenModal = (course: any) => {
    setSelectedCourseForBrochure(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourseForBrochure(null);
  };

  if (!category) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <p className="text-red-500">No course category selected.</p>
            <button
                onClick={() => handleNavigation('courses')}
                className="ml-4 rounded-button bg-green-500 text-white px-4 py-2"
            >
                Go Back
            </button>
        </div>
    );
  }

  const filteredCourses = allCourses.filter(course => course.category === category);
  const categoryDetails = courseCategories.find(c => c.id === category);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
            <button
                onClick={() => handleNavigation('courses')}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold mb-8 flex items-center md: mt-10 "
            >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Categories
            </button>
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    {categoryDetails?.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    {categoryDetails?.description}
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.title} className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border-b-4 border-transparent ${course.borderColorHover} overflow-hidden`}>
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className={`text-4xl ${course.iconColor} mb-4`}>
                  <i className={course.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {course.description}
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-6 space-y-2 pl-4">
                  {course.details.map(detail => <li key={detail} className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i><span>{detail}</span></li>)}
                </ul>
                <div className="mt-auto space-y-3">
                  <button
                    onClick={() => handleOpenModal(course)}
                    className="rounded-button w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 font-semibold transition-colors duration-300 text-sm"
                  >
                    Download Brochure
                  </button>
                  <button
                    onClick={() => handleCourseEnroll(course.title)}
                    className="rounded-button whitespace-nowrap cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold transition-colors duration-300"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedCourseForBrochure && (
        <BrochureModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          course={selectedCourseForBrochure}
        />
      )}
    </div>
  );
};

export default CourseListPage;
