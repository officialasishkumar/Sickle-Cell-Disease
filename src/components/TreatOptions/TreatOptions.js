// ./src/components/TreatmentOptions/TreatmentOptions.js
import React from 'react';

const TreatmentOptions = () => {
    const treatments = [
        {
            id: 1,
            title: "Gene Therapy",
            description:
                "Gene therapy is a revolutionary treatment that targets the underlying genetic mutation causing sickle cell disease, offering a potential cure.",
            icon: "https://via.placeholder.com/100", // Replace with your icon/image
        },
        {
            id: 2,
            title: "Bone Marrow Transplant",
            description:
                "A bone marrow transplant replaces diseased cells with healthy ones from a compatible donor, offering hope to younger patients.",
            icon: "https://via.placeholder.com/100",
        },
        {
            id: 3,
            title: "Hydroxyurea Medication",
            description:
                "Hydroxyurea helps reduce painful episodes and improves quality of life by increasing fetal hemoglobin levels.",
            icon: "https://via.placeholder.com/100",
        },
        {
            id: 4,
            title: "Supportive Care",
            description:
                "Comprehensive supportive care includes pain management, hydration, and infection prevention to manage symptoms effectively.",
            icon: "https://via.placeholder.com/100",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
                    Treatment Options
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {treatments.map((treatment) => (
                        <div
                            key={treatment.id}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={treatment.icon}
                                    alt={treatment.title}
                                    className="w-16 h-16 mr-4"
                                />
                                <h3 className="text-2xl font-semibold text-blue-900">
                                    {treatment.title}
                                </h3>
                            </div>
                            <p className="text-gray-700">{treatment.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TreatmentOptions;
