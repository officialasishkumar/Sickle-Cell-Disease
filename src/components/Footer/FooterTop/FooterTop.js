import React from 'react';

const FooterTop = () => {
    return (
        <div>
            <div className="container py-12 mx-auto border-t-4 border-b-4 mt-24">
                <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
                    <div className="m-5">
                        <img
                        className="w-full md:w-2/3"
                            src="https://static.vecteezy.com/system/resources/thumbnails/032/524/550/small_2x/kidney-bean-icon-vector.jpg"
                            alt=""
                            style={{height:180,width:150}}
                        />
                        <p className="py-4 text-lg">
                            Our mission is to raise awareness about sickle cell disease and provide support to those affected. 
                            We strive to be a trusted resource for patients and families navigating this condition.
                        </p>
                    </div>

                    <div className="border mx-10 md:mx-0 rounded-lg p-8">
                        <div className="text-center">
                            <h2 className="text-2xl">Get Involved</h2>
                            <p className="pb-5">
                                Join our efforts in raising awareness and supporting sickle cell patients. 
                                Your involvement can make a difference!
                            </p>
                            <h2 className="text-4xl">Contact Us</h2>
                            <div className="mt-4">
                                <p className="mb-2">
                                    Vanita Jain<br/>
                                    <a href="mailto:vjain@electronics.du.ac.in" className="text-blue-600 hover:underline">
                                        vjain@electronics.du.ac.in
                                    </a>
                                </p>
                                <p>
                                    Arun Kumar Dubey<br/>
                                    <a href="mailto:arun.dubey@bvcoend.ac.in" className="text-blue-600 hover:underline">
                                        arun.dubey@bvcoend.ac.in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border mx-10 md:mx-0 rounded-lg p-8">
                        <div className="text-center">
                            <h2 className="text-2xl">Resources</h2>
                            <p className="pb-5">
                                Access valuable resources and information about sickle cell disease, treatment options, and support groups.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
