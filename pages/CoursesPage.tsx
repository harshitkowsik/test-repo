import React from 'react';
import { CourseCategory } from '../types';
import { courseCategories } from '../data/courses';

interface CoursesPageProps {
  handleCategorySelect: (category: CourseCategory) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ handleCategorySelect }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Course Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Select a category to explore our comprehensive range of courses designed to help you achieve your learning goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer border border-transparent ${category.borderColorHover}`}
            >
              <div className={`text-5xl ${category.color} mb-6 text-center`}>
                <i className={category.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;