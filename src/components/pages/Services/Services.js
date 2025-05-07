import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faHandHoldingHeart, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Sickle Cell Awareness Campaign",
            description: "Join us in raising awareness about sickle cell disease and its impact on individuals and families. Our campaign focuses on educating the community about symptoms, diagnosis, and treatment options.",
            image: faBullhorn,
            color: "blue",
            detailDesc: "Our campaign focuses on educating the community about sickle cell disease, its symptoms, and the importance of early diagnosis and treatment. We organize community events, distribute educational materials, and collaborate with local organizations to spread awareness."
        },
        {
            id: "02",
            title: "Support for Sickle Cell Patients",
            description: "Providing resources and support for patients living with sickle cell disease. Our support groups and counseling services help patients manage their condition and improve quality of life.",
            image: faHandHoldingHeart,
            color: "purple",
            detailDesc: "We offer support groups, counseling, and resources to help patients manage their condition and improve their quality of life. Our trained professionals provide guidance on coping strategies, pain management, and navigating healthcare systems."
        },
        {
            id: "03",
            title: "Fundraising for Research",
            description: "Help us fund research initiatives aimed at finding a cure for sickle cell disease. Your contributions support vital research projects working towards new treatments and therapies.",
            image: faDollarSign,
            color: "green",
            detailDesc: "Your contributions will support vital research projects that aim to develop new treatments and ultimately a cure for sickle cell disease. We organize fundraising events, online campaigns, and partnerships with research institutions to drive innovation."
        },
        {
            id: "04",
            title: "Community Health Workshops",
            description: "Participate in workshops that educate the community about sickle cell disease and health management. These sessions empower patients and families with knowledge and resources.",
            image: faUsers,
            color: "amber",
            detailDesc: "Our workshops provide valuable information on managing sickle cell disease, including pain management strategies, healthy lifestyle choices, and the importance of regular medical check-ups. These sessions are designed to empower patients and their families with knowledge and resources."
        }
    ];

    const getIconColor = (color) => {
        switch(color) {
            case "blue": return "text-blue-500 bg-blue-100";
            case "purple": return "text-purple-500 bg-purple-100";
            case "green": return "text-green-500 bg-green-100";
            case "amber": return "text-amber-500 bg-amber-100";
            default: return "text-blue-500 bg-blue-100";
        }
    };

    return (
        <div id="campaigns" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold">Taking Action</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Sickle Cell Campaign Initiatives
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto my-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Supporting Our Community Through Awareness and Action. Join us in our mission to improve the lives of those affected by sickle cell disease.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`p-6 flex flex-col items-center text-center`}>
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getIconColor(service.color)}`}>
                                    <FontAwesomeIcon icon={service.image} className="text-2xl" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
