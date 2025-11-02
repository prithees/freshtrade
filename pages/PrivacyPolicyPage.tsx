import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
              <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
              <p>Welcome to FreshTrade Global. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-2">2. Collection of Your Information</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, company name, email address, and telephone number, that you voluntarily give to us when you use our contact form or job application form.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-2">3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Respond to your product and customer service requests.</li>
                <li>Email you regarding your order or other inquiries.</li>
                <li>Process your application for employment.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">4. Disclosure of Your Information</h2>
              <p>We do not share, sell, rent or trade your information with third parties for their commercial purposes.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
              <p>We use third-party services for specific functions:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Google Sheets:</strong> Our product and pricing data is managed via a publicly published Google Sheet. This does not involve the collection of your personal data.</li>
                <li><strong>Google Forms:</strong> Our job application process is handled through an embedded Google Form. Information you submit is subject to Google's Privacy Policy.</li>
                <li><strong>Formspree:</strong> Our contact form is powered by Formspree. Submissions are sent to our email and are subject to Formspree's Privacy Policy.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-2">6. Security of Your Information</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us through our <Link to="/contact" className="text-green-600 hover:underline">contact page</Link>.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;