import React from 'react';
import { Page, CourseCategory } from '../types';
import { allCourses, courseCategories } from '../data/courses';

interface CourseListPageProps {
  category: CourseCategory | null;
  handleCourseEnroll: (courseName: string) => void;
  handleNavigation: (page: Page) => void;
}

const CourseListPage: React.FC<CourseListPageProps> = ({ category, handleCourseEnroll, handleNavigation }) => {
  if (!category) {
    // Fallback if no category is selected, though App.tsx logic should prevent this.
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
            <button
                onClick={() => handleNavigation('courses')}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold mb-8 flex items-center"
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
            <div key={course.title} className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-transparent ${course.borderColorHover}`}>
              <div className={`text-3xl ${course.iconColor} mb-4`}>
                <i className={course.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {course.description}
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mb-6 space-y-1">
                {course.details.map(detail => <li key={detail}>• {detail}</li>)}
              </ul>
              <button
                onClick={() => handleCourseEnroll(course.title)}
                className="rounded-button mt-auto whitespace-nowrap cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold transition-colors duration-300"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;