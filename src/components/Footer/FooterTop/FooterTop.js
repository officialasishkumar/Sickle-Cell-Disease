import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FooterTop = () => {
    return (
        <div className="bg-primary-900 text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* About Column */}
                    <div>
                        <div className="flex items-center mb-6">
                            <img
                                className="h-12 mr-3"
                                src="https://static.vecteezy.com/system/resources/thumbnails/032/524/550/small_2x/kidney-bean-icon-vector.jpg"
                                alt="Logo"
                            />
                            <div>
                                <h3 className="text-2xl font-bold">SickleCell</h3>
                                <p className="text-blue-300 text-sm">Awareness Initiative</p>
                            </div>
                        </div>
                        <p className="text-blue-100 leading-relaxed mb-6">
                            Our mission is to raise awareness about sickle cell disease and provide support to those affected. 
                            We strive to be a trusted resource for patients and families navigating this condition.
                        </p>
                        
                        
                    </div>
                    
                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 relative">
                            <span className="relative z-10">Get Involved</span>
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400"></span>
                        </h3>
                        <p className="text-blue-100 mb-6">
                            Join our efforts in raising awareness and supporting sickle cell patients. 
                            Your involvement can make a difference!
                        </p>
                        
                    </div>
                    
                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 relative">
                            <span className="relative z-10">Contact Us</span>
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400"></span>
                        </h3>
                        
                        
                        <div className="mt-8">
                            <p className="mb-2 text-blue-100">
                                Vanita Jain<br/>
                                <a href="mailto:vjain@electronics.du.ac.in" className="text-blue-300 hover:text-blue-100 transition">
                                    vjain@electronics.du.ac.in
                                </a>
                            </p>
                            <p className="text-blue-100">
                                Arun Kumar Dubey<br/>
                                <a href="mailto:arun.dubey@bvcoend.ac.in" className="text-blue-300 hover:text-blue-100 transition">
                                    arun.dubey@bvcoend.ac.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-primary-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-blue-200 mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Sickle Cell Awareness Initiative. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
