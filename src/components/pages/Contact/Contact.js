// ./src/components/pages/Contact/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="pt-24 mb-10">
                <h2 className="text-center text-6xl">Contact US</h2>
            </div>
            <div className="container mx-auto bg-gray-50 mb-10">
                <div className="p-12">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="border bg-white p-5">
                            <h2 className="text-2xl font-bold">General Information</h2>
                            <p>121 King Street, Melbourne,</p>
                            <p>Victoria 3000 Australia</p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div className="border bg-white p-5">
                            <h2 className="text-2xl font-bold">Patient Experience</h2>
                            <p>Hannah Harper - Patient Experience Coordinator</p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div className="border bg-white p-5">
                            <h2 className="text-2xl font-bold">Working Hours</h2>
                            <p>Monday – Friday : 8:00 AM - 8:00 PM</p>
                            <p>Saturday : 10:00 AM - 6:00 PM</p>
                            <p>Sunday : 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map removed */}
        </div>
    );
};

export default Contact;
