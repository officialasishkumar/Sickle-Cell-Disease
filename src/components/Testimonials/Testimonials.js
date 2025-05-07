// ./src/components/Testimonials/Testimonials.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Patient',
            testimonial:
                'This campaign changed my life by providing the support and resources I needed. The community has been incredibly supportive throughout my journey.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Caregiver',
            testimonial:
                'The information and support here are invaluable. As a caregiver for my daughter with sickle cell, the resources provided have helped us navigate challenging times.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            id: 3,
            name: 'Alex Johnson',
            role: 'Healthcare Provider',
            testimonial:
                'As a healthcare provider, I\'ve seen firsthand how this initiative brings hope and clarity to those affected by sickle cell disease. The educational materials are excellent.',
            image: 'https://randomuser.me/api/portraits/men/62.jpg',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">
                        What Our Community Says
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto my-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Real stories from individuals affected by sickle cell disease, sharing their experiences and how our resources have helped them.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-10">
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 relative"
                        >
                            <div className="text-primary-500 opacity-20 absolute top-4 left-4">
                                <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
                            </div>
                            
                            <div className="flex items-center mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full border-4 border-primary-100 mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-primary-600">{item.role}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 italic relative z-10">"{item.testimonial}"</p>
                            
                            <div className="flex mt-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;
