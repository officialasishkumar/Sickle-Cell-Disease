// ./src/App.js
import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import AboutUs from './components/pages/AboutUs/AboutUs'; // Treatments section
import Services from './components/pages/Services/Services'; // Campaigns section
import Footer from './components/Footer/Footer';
import ResponsiveHeader from './components/ResponsiveHeader/ResponsiveHeader';

function App() {
    return (
        <div>
            {/* Navbar with in-page anchors */}
            <ResponsiveHeader />

            {/* Home Section */}
            <section id="home">
                <HeroSection />
                <WelcomeSection />
            </section>

            {/* Treatments Section */}
            <section id="treatments" className="py-12">
                <AboutUs />
            </section>

            {/* Campaigns Section */}
            <section id="campaigns" className="py-12">
                <Services />
            </section>

            {/* Footer remains (contains contact info) */}
            <Footer />
        </div>
    );
}

export default App;
