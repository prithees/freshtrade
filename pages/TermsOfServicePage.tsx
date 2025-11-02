import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
            <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
              <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

              <h2 className="text-2xl font-semibold mt-6 mb-2">1. Agreement to Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.</p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">2. Website Use</h2>
              <p>This website and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.</p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
              <p>The Site and its original content, features, and functionality are owned by FreshTrade Global and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">4. Product and Pricing Information</h2>
              <p>While we strive to provide accurate product and pricing information, pricing or typographical errors may occur. The pricing data is retrieved from a Google Sheet and updated daily. We cannot confirm the price of an item until after you place an order or request a quote. We reserve the right to correct any errors, inaccuracies or omissions and to change or update information at any time without prior notice.</p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
              <p>In no event shall FreshTrade Global, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-2">6. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.</p>
              
              <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us through our <Link to="/contact" className="text-green-600 hover:underline">contact page</Link>.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsOfServicePage;