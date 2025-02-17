// ./src/components/Testimonials/Testimonials.js
import React from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            testimonial:
                'This campaign changed my life by providing the support and resources I needed. Highly recommended!',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Jane Smith',
            testimonial:
                'The information and support here are invaluable. It truly makes a difference.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Alex Johnson',
            testimonial:
                'A fantastic initiative that brings hope and clarity to those affected by sickle cell disease.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-8">
                    What Our Community Says
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <p className="italic text-gray-600 mb-4">"{item.testimonial}"</p>
                            <h3 className="text-xl font-semibold text-center">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
