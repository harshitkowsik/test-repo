
import React, { useState } from 'react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    brochureLink: string;
  };
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    const data = {
      ...formData,
      courseName: course.title,
      access_key: "befb3eb2-1b28-466f-b4fc-785e8c01cb91",
      from_name: "LearnSpire Brochure",
      subject: `Learnspire - Brochure Download for ${course.title}`,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
        setStatus('Thank you! The brochure will open in a new tab.');
        window.open(course.brochureLink, '_blank');
        setTimeout(() => onClose(), 2000); // Close modal after a delay
    } else {
        setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-md m-4 transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Download Brochure</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Please fill out the form to download the brochure for <span className="font-semibold text-green-600 dark:text-green-400">{course.title}</span>.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="courseName" value={course.title} />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 transition-colors duration-300 text-sm"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 transition-colors duration-300 text-sm"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 transition-colors duration-300 text-sm"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-button whitespace-nowrap cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold transition-colors duration-300 mt-4 disabled:bg-gray-400"
            disabled={status === 'Submitting...'}
          >
            {status === 'Submitting...' ? 'Submitting...' : 'Download Now'}
          </button>
          {status && <p className={`text-center text-sm mt-2 ${status.includes('wrong') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default BrochureModal;
