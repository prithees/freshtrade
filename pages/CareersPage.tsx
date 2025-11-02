
import React from 'react';
import { CAREERS_GOOGLE_FORM_URL } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const JobOpening: React.FC<{ title: string, location: string, type: string }> = ({ title, location, type }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center transition-shadow hover:shadow-lg">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 mt-1">{location} &middot; {type}</p>
    </div>
    <div className="mt-4 sm:mt-0">
      <a
        href={CAREERS_GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
      >
        Apply Now
      </a>
    </div>
  </div>
);

const CareersPage: React.FC = () => {
  return (
    <div>
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_vector-1753204981440-bc32ab5cfcdc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Join Our Team</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Grow With Us</h2>
            <p className="text-lg text-gray-600 mb-12">
              We are passionate about bringing the freshest produce to the world. If you share our commitment to quality and innovation, we'd love to hear from you. Explore our open positions below.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="space-y-6 max-w-4xl mx-auto">
            <JobOpening title="Logistics Coordinator" location="Mumbai, India" type="Full-time" />
            <JobOpening title="Quality Assurance Inspector" location="Remote / Nashik" type="Full-time" />
            <JobOpening title="International Sales Executive" location="London, UK" type="Full-time" />
          </div>
        </AnimatedSection>
         <AnimatedSection className="mt-16 text-center text-gray-600">
            <p>Don't see a role that fits? We're always looking for talented individuals.</p>
            <p>Send your resume to <a href="mailto:careers@freshtradeglobal.com" className="text-green-600 font-medium hover:underline">careers@freshtradeglobal.com</a></p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CareersPage;
