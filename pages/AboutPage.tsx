import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=292')" }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Our Commitment to Freshness</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, FreshTrade Global started with a simple mission: to connect local farmers with international markets, ensuring fair prices for producers and superior quality for businesses. We've since grown into a trusted global wholesaler, but our core values of quality, integrity, and reliability remain unchanged.
              </p>
              <p className="text-gray-600">
                We believe that fresh, high-quality produce is the cornerstone of any great culinary experience. That's why we've built a robust network of certified farms and an efficient logistics system to bring the best of nature's bounty directly to your business.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/600/400?image=20" alt="Fresh produce market" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">The principles that guide our every decision and action.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-block mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-500">We never compromise on the quality and freshness of our produce.</p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-500">We build lasting relationships through transparency and honest practices.</p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-block mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.954 10.546A9 9 0 1112 3a9 9 0 018.954 7.546z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-500">We are committed to sustainable sourcing and reducing our environmental footprint.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="bg-green-600 rounded-lg text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="max-w-2xl mx-auto mb-6">Whether you're a grower or a buyer, we're always looking for partners who share our passion for quality.</p>
            <Link to="/contact" className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105">
              Contact Sales
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;