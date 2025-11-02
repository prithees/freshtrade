
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Hero = () => (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1669754839259-04d3abecfee6?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">Global Sourcing, Fresh Delivery</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">Your reliable B2B partner for premium quality fruits and vegetables from around the world.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/products" className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
          View Products
        </Link>
        <Link to="/contact" className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

const HowItWorks = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">A seamless process from farm to your business in three simple steps.</p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 text-green-600 rounded-full p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Place Your Order</h3>
            <p className="text-gray-500">Browse our daily updated catalog and send a quote request for bulk orders.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 text-green-600 rounded-full p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. We Pack & Inspect</h3>
            <p className="text-gray-500">Our team ensures every item meets the highest quality standards before shipping.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 text-green-600 rounded-full p-6 mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" transform="scale(-1, 1) translate(-24, 0)" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 9.657l.001-.001M21 12a9 9 0 11-18 0 9 9 0 0118 0z" transform="scale(-1, 1) translate(-24, 0)" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12-7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Fast & Reliable Delivery</h3>
            <p className="text-gray-500">We handle logistics to ensure your order arrives fresh and on time, anywhere in the world.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"FreshTrade has transformed our supply chain. Their produce is consistently top-notch, and the daily pricing sheet makes planning so much easier. A truly professional partner."</p>
            <p className="font-semibold text-green-600">Maria Sanchez</p>
            <p className="text-sm text-gray-500">Head of Procurement, Gourmet Foods Inc.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"The quality of the exotic fruits we source from FreshTrade is unparalleled. Their team is responsive, and deliveries are always on schedule. Highly recommended for any serious business."</p>
            <p className="font-semibold text-green-600">David Chen</p>
            <p className="text-sm text-gray-500">Owner, The Organic Market</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default HomePage;
