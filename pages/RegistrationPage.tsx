import React from 'react';
import { Page, FormDataState } from '../types';

interface RegistrationPageProps {
  selectedCourse: string;
  formData: FormDataState;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleNavigation: (page: Page) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  selectedCourse,
  formData,
  handleInputChange,
  handleNavigation
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Course Registration
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Complete your enrollment for:{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                {selectedCourse}
              </span>
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Selected Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 text-sm cursor-not-allowed"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Educational Background *
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 transition-colors duration-300 text-sm"
                required
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Relevant Experience
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 transition-colors duration-300 text-sm"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Why do you want to take this course? *
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                placeholder="Tell us about your learning goals and motivation..."
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-500" required />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to the{" "}
                <span className="text-green-600 dark:text-green-400 cursor-pointer">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="text-green-600 dark:text-green-400 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="button"
                onClick={() => handleNavigation("courses")}
                className="rounded-button whitespace-nowrap cursor-pointer w-full md:flex-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white py-3 font-semibold transition-colors duration-300"
              >
                Back to Courses
              </button>
              <button
                type="submit"
                className="rounded-button whitespace-nowrap cursor-pointer w-full md:flex-1 bg-green-500 hover:bg-green-600 text-white py-3 font-semibold transition-colors duration-300"
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;