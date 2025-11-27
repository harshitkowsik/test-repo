
import React from 'react';
import SEO from '../SEO';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <SEO
        title="Terms and Conditions | LearnSpire"
        description="Please read the Terms and Conditions for using the LearnSpire platform and services."
        keywords="terms and conditions, terms of service, legal, learnspire terms"
        type="website"
        name="LearnSpire"
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to LearnSpire. By accessing and using our educational platform, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use our services. These Terms apply to all visitors, users, and others who wish to access or use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              2. User Conduct
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You agree to use LearnSpire only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of LearnSpire. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within LearnSpire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All content on LearnSpire, including text, graphics, logos, images, course materials, and software, is the property of LearnSpire or its content suppliers and protected by international copyright laws. You are granted a limited, non-exclusive, non-transferable license to access and use the course materials solely for your personal, non-commercial educational purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              4. Registration and Accounts
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you create an account with us, you guarantee that you are above the age of 13, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service. You are responsible for maintaining the confidentiality of your account and password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              5. Payments and Refunds
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All payments for courses are processed securely through third-party payment gateways. LearnSpire's refund policy is outlined separately; please refer to our dedicated Refund Policy page for details on eligibility and procedures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              6. Disclaimers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our Service is provided on an "AS IS" and "AS AVAILABLE" basis. LearnSpire makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein. You expressly agree that your use of the Service is at your sole risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In no event shall LearnSpire, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              8. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at <a href="mailto:support@learnspire.org" className="text-green-600 dark:text-green-400 hover:underline">support@learnspire.org</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
