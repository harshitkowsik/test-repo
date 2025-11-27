
import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        likeMost: '',
        improvement: '',
    });
    const [rating, setRating] = useState(0);
    const [status, setStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            rating,
            access_key: "39612588-ec1c-45e6-b7c7-a4b774ba4a72",
            from_name: "LearnSpire Feedback",
            subject: "Learnspire - Feedback Submission",
        };

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then((res) => res.json());

        if (res.success) {
            setStatus('Thank you for your feedback!');
            setFormData({ name: '', phone: '', email: '', likeMost: '', improvement: '' });
            setRating(0);
        } else {
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                            We Value Your Feedback
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Help us improve by sharing your experience with LearnSpire
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                                    Overall Rating *
                                </label>
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className={`text-3xl cursor-pointer transition-colors duration-200 ${star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'}`}
                                            aria-label={`Rate ${star} star`}
                                        >
                                            <i className="fas fa-star"></i>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    What did you like most about LearnSpire?
                                </label>
                                <textarea
                                    rows={4}
                                    name="likeMost"
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                    placeholder="Share what you enjoyed about your learning experience..."
                                    value={formData.likeMost}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    How can we improve?
                                </label>
                                <textarea
                                    rows={4}
                                    name="improvement"
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                    placeholder="Suggest improvements or share any concerns..."
                                    value={formData.improvement}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="rounded-button whitespace-nowrap cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold transition-colors duration-300 disabled:bg-gray-400"
                                disabled={status === 'Submitting...'}
                            >
                                {status === 'Submitting...' ? 'Submitting...' : 'Submit Feedback'}
                            </button>
                            {status && <p className={`text-center text-sm mt-4 ${status.includes('wrong') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;