// ./src/components/pages/AboutUs/AboutUs.js
import React from 'react';
import AboutUsFirst from '../../AboutUsFirst/AboutUsFirst';
import TreatmentOptions from '../../TreatOptions/TreatOptions';
// import SuccessStories from '../../SuccessStories/SuccessStories';
import AboutUsSecond from '../../AboutUsSecond/AboutUsSecond';

const AboutUs = () => {
    return (
        <div className="pb-24">
            <div className="py-12">
                <h2 className="text-center text-6xl font-bold text-blue-900">Treatments</h2>
            </div>
            {/* Existing About Us section */}
            <AboutUsFirst />
            {/* New Treatment Options Section */}
            {/* <TreatmentOptions /> */}
            {/* New Success Stories Section */}
            {/* <SuccessStories /> */}
            {/* Optional additional content */}
            <AboutUsSecond />
        </div>
    );
};

export default AboutUs;
