
import React from 'react';
import { teamMembers } from '../data/teamData';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Meet Our Expert Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our passionate team of educators, technologists, and support staff are dedicated to
            providing you with the best learning experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6 text-center flex flex-col items-center border border-transparent hover:border-green-500"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-gray-200 dark:border-gray-600"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                {member.designation}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">
                {member.bio}
              </p>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={`Follow ${member.name} on Twitter`}
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;