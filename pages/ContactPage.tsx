
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
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
            access_key: "eaf9ca88-1130-4cf4-8161-5e426dc4991c",
            from_name: "LearnSpire Contact",
            subject: "Learnspire - Contact Response",
        };

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then((res) => res.json());

        if (res.success) {
            setStatus('Thank you for your message! We will get back to you shortly.');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } else {
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We'd love to hear from you! Whether you have a question about our courses, partnerships, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                    value={formData.name}
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
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                    value={formData.phone}
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
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 dark:focus:border-green-500 dark:placeholder-gray-400 transition-colors duration-300 text-sm"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="rounded-button whitespace-nowrap cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold transition-colors duration-300 disabled:bg-gray-400"
                                disabled={status === 'Submitting...'}
                            >
                                {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status && <p className={`text-center text-sm mt-4 ${status.includes('wrong') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center mb-2">
                                <i className="fas fa-map-marker-alt text-green-500 mr-3"></i>
                                Our Address
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Dehradun, Uttarakhand, India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center mb-2">
                                <i className="fas fa-envelope text-green-500 mr-3"></i>
                                Email Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                <a href="mailto:hr@learnspire.org" className="hover:text-green-500" aria-label="Email HR">hr@learnspire.org</a>
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                <a href="mailto:support@learnspire.org" className="hover:text-green-500" aria-label="Email Support">support@learnspire.org</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 text-2xl transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 text-2xl transition-colors duration-300"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 text-2xl transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 text-2xl transition-colors duration-300"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;