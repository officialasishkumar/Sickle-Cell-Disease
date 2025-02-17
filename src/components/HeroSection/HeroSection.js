// ./src/components/HeroSection/HeroSection.js
import React from 'react';
import HeroBg from '../../img/hero-bg.jpg';

const HeroSection = () => {
    return (
        <div
            className="relative overflow-hidden h-screen flex items-center justify-center"
            style={{
                background: `url(${HeroBg}) center/cover no-repeat`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-75"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Understanding Sickle Cell Disease
                </h1>
                <p className="max-w-xl mx-auto mb-8 text-lg md:text-xl">
                    Learn about the causes, symptoms, and treatments of Sickle Cell Disease.
                    Empower yourself with knowledge and hope.
                </p>
                <a
                    href="#learn-more"
                    className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
