// ./src/components/pages/Home/Home.js
import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import WelcomeSection from '../../WelcomeSection/WelcomeSection';
import Testimonials from "../../Testimonials/Testimonials" // New import

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WelcomeSection />
            <Testimonials />
            {/* Other sections like Services, AppointmentSection, etc. */}
        </div>
    );
};

export default Home;
