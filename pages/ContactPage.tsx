
import React, { useState } from 'react';
import { CONTACT_FORM_ENDPOINT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 flex justify-between items-center">
        <span className="font-semibold">{question}</span>
        <svg className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="pb-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="text-lg text-gray-600 mt-2">We’re here to help with your sourcing needs. Contact us for quotes, support, or inquiries.</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form action={CONTACT_FORM_ENDPOINT} method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                  <input type="text" name="company" placeholder="Company Name" className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                  <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                </div>
                <textarea name="message" placeholder="Your Message" rows={5} required className="w-full p-3 border rounded-md mb-6 focus:ring-green-500 focus:border-green-500"></textarea>
                <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <div>
                  <h3 className="font-semibold">Our Warehouse</h3>
                  <p className="text-gray-600">123 Fresh Produce Lane, AgriPark, Nashik, Maharashtra, 422001, India</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                 <div className="bg-green-100 text-green-600 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:sales@freshtradeglobal.com" className="text-green-600 hover:underline">sales@freshtradeglobal.com</a>
                </div>
              </div>
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239964.2828557162!2d73.72261623956952!3d19.99113222019929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0x312423d25415758d!2sNashik%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1684321098765!5m2!1sen!2sus" 
                width="100%" 
                height="250" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <FAQItem question="What is your minimum order quantity?" answer="Minimum order quantity varies by product. You can find the specific MOQ for each item on our daily pricing list." />
                <FAQItem question="Do you ship internationally?" answer="Yes, we ship globally. We handle all logistics and customs documentation to ensure a smooth delivery process to your desired port or facility." />
                <FAQItem question="How is pricing determined?" answer="Our prices are updated daily based on market rates, seasonality, and availability. We are committed to providing competitive and transparent pricing." />
                <FAQItem question="What quality certifications do you have?" answer="Our partner farms and facilities adhere to international quality standards, including GlobalG.A.P., FSSAI, and various organic certifications. Please contact us for specific certification details." />
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
