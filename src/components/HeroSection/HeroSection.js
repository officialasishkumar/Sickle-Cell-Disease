// ./src/components/HeroSection/HeroSection.js
import React from 'react';
import HeroBg from '../../img/hero-bg.jpg';

const HeroSection = () => {
    return (
        <div
            className="relative overflow-hidden h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark Fade Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto slide-up">
                <p className="uppercase tracking-wider mb-2 font-medium text-gray-100">
                    Raising Awareness & Support
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white brightness-125">
                    Understanding Sickle Cell Disease
                </h1>
                <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-gray-100">
                    Learn about the causes, symptoms, and treatments of Sickle Cell Disease.
                    Empower yourself with knowledge and hope.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#learn-more"
                        className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg"
                    >
                        Learn More
                    </a>
                    <a
                        href="#treatments"
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition transform hover:-translate-y-1"
                    >
                        Explore Treatments
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;
