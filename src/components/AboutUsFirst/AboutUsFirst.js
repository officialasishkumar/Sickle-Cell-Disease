import React from 'react';
import image from '../../img/about-first.jpg';
import geneTherapyImage from '../../img/gene-therapy.jpg';
import boneMarrowImage from '../../img/bone-marrow.jpg';
import hydroxyureaImage from '../../img/hydroxyurea.jpg';

const AboutUsFirst = () => {
    const treatmentTechniques = [
        {
            id: 1,
            title: "Gene Therapy",
            image: geneTherapyImage,
            description: "Gene therapy aims to correct the underlying genetic defect in sickle cell disease. This innovative approach involves modifying the patient's own stem cells to produce healthy hemoglobin.",
        },
        {
            id: 2,
            title: "Bone Marrow Transplant",
            image: boneMarrowImage,
            description: "A bone marrow transplant can potentially cure sickle cell disease by replacing the patient's bone marrow with healthy marrow from a compatible donor. This procedure is most effective in younger patients with severe disease.",
        },
        {
            id: 3,
            title: "Hydroxyurea Treatment",
            image: hydroxyureaImage,
            description: "Hydroxyurea is a medication that can reduce the frequency of pain crises and acute chest syndrome by increasing fetal hemoglobin levels in the blood. It is often used as a long-term treatment option.",
        }
    ];

    return (
        <div className="py-16 bg-white">
            {/* Top Section */}
            <div className="container mx-auto px-6">
                <div className="md:flex items-center gap-16">
                    <div className="md:w-2/5 mb-10 md:mb-0">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
                            <img
                                className="rounded-lg shadow-2xl relative z-10 w-full h-auto"
                                src={image}
                                alt="Curing Sickle Cell Disease"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-50 rounded-lg z-0"></div>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <span className="text-primary-600 font-semibold">Our Approach</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2">
                            Curing Sickle Cell Disease
                        </h2>
                        <div className="w-16 h-1 bg-primary-600 my-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Sickle cell disease is a genetic blood disorder that affects millions worldwide. 
                            While there is currently no universal cure, various treatment options can help manage symptoms and improve quality of life.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our mission is to provide comprehensive information about the latest treatment techniques and support resources for those affected by sickle cell disease. Through education, advocacy, and research support, we aim to contribute to the global effort in combating this condition.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                                <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                                <span className="text-primary-700 font-medium">Innovative Research</span>
                            </div>
                            <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                                <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                                <span className="text-primary-700 font-medium">Patient Support</span>
                            </div>
                            <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                                <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                                <span className="text-primary-700 font-medium">Global Advocacy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Treatment Techniques Section */}
            <div className="container mx-auto px-6 mt-24">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold">Innovative Solutions</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        Treatment Techniques
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto my-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Explore the cutting-edge approaches being used to combat sickle cell disease and improve patient outcomes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {treatmentTechniques.map(technique => (
                        <div key={technique.id} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                            <div className="h-56 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    src={technique.image}
                                    alt={technique.title}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{technique.title}</h3>
                                <p className="text-gray-600">{technique.description}</p>
                                <a href={`#${technique.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-800 transition-colors">
                                    Learn more
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsFirst;
