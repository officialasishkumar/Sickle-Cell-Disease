import React from 'react';
import welcome from '../../img/welcome.png';

const WelcomeSection = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-blue-50" id="learn-more">
            <div className="container mx-auto px-4">
                <div className="md:flex items-center">
                    <div className="md:w-1/2 px-8 mb-8 md:mb-0">
                        <img 
                            src={welcome} 
                            alt="Sickle Cell Awareness" 
                            className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
                        />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <span className="text-primary-600 font-semibold">Our Mission</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
                            Understanding Sickle Cell Disease
                        </h2>
                        <div className="w-20 h-1 bg-primary-600 my-6"></div>
                        <h3 className="text-2xl md:text-3xl text-primary-700 font-medium mb-4">
                            Improving Lives Through Awareness and Treatment
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Sickle cell disease is a genetic blood disorder that affects millions worldwide. 
                            People with sickle cell disease have abnormal hemoglobin in their red blood cells, 
                            causing them to become rigid, sticky and misshapen.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            It is crucial to understand its impact and the importance of treatment options available.
                            Through awareness, research, and support, we can improve the quality of life for those affected.
                        </p>
                        <div className="mt-8">
                            <a href="#treatments" className="btn-primary inline-block">Discover Treatments</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
