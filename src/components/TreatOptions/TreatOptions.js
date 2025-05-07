// ./src/components/TreatmentOptions/TreatmentOptions.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna, faProcedures, faPills, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

const TreatmentOptions = () => {
    const treatments = [
        {
            id: 1,
            title: "Gene Therapy",
            description:
                "Gene therapy is a revolutionary treatment that targets the underlying genetic mutation causing sickle cell disease, offering a potential cure by introducing healthy genes to produce normal hemoglobin.",
            icon: faDna,
            color: "blue",
            link: "https://www.mayoclinic.org/tests-procedures/gene-therapy/about/pac-20384619", // Placeholder link
        },
        {
            id: 2,
            title: "Bone Marrow Transplant",
            description:
                "A bone marrow transplant replaces diseased cells with healthy ones from a compatible donor, offering hope to younger patients with severe symptoms and access to matched donors.",
            icon: faProcedures,
            color: "purple",
            link: "https://www.mayoclinic.org/tests-procedures/bone-marrow-transplant/about/pac-20384854", // Placeholder link
        },
        {
            id: 3,
            title: "Hydroxyurea Medication",
            description:
                "Hydroxyurea helps reduce painful episodes and improves quality of life by increasing fetal hemoglobin levels. It's an FDA-approved treatment that reduces hospitalizations and complications.",
            icon: faPills,
            color: "green",
            link: "https://medlineplus.gov/druginfo/meds/a682004.html", // Placeholder link
        },
        {
            id: 4,
            title: "Supportive Care",
            description:
                "Comprehensive supportive care includes pain management, hydration, blood transfusions, and infection prevention to manage symptoms effectively and improve quality of life.",
            icon: faHandHoldingMedical,
            color: "red",
            link: "https://www.cdc.gov/ncbddd/sicklecell/treating.html", // Placeholder link
        },
    ];

    const getIconColor = (color) => {
        switch (color) {
            case "blue": return "text-blue-500";
            case "purple": return "text-purple-500";
            case "green": return "text-green-500";
            case "red": return "text-red-500";
            default: return "text-blue-500";
        }
    };

    const getBgColor = (color) => {
        switch (color) {
            case "blue": return "bg-blue-100";
            case "purple": return "bg-purple-100";
            case "green": return "bg-green-100";
            case "red": return "bg-red-100";
            default: return "bg-blue-100";
        }
    };

    return (
        <section className="py-20 bg-white" id="treatments">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold">Advanced Solutions</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Treatment Options
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto my-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Modern medicine offers several approaches to manage and treat sickle cell disease,
                        from innovative therapies to supportive care strategies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {treatments.map((treatment) => (
                        <div
                            key={treatment.id}
                            className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex items-center mb-6">
                                <div className={`p-4 rounded-lg mr-4 ${getBgColor(treatment.color)}`}>
                                    <FontAwesomeIcon
                                        icon={treatment.icon}
                                        className={`text-2xl ${getIconColor(treatment.color)}`}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {treatment.title}
                                </h3>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {treatment.description}
                            </p>

                            {/* Only show Learn more if not Supportive Care */}
                            {treatment.title !== "Supportive Care" && (
                                <a
                                    href={treatment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
                                >
                                    Learn more
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TreatmentOptions;