// ./src/App.js
import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import AboutUs from './components/pages/AboutUs/AboutUs'; 
import Services from './components/pages/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import TreatmentOptions from './components/TreatOptions/TreatOptions';
import Footer from './components/Footer/Footer';
import ResponsiveHeader from './components/ResponsiveHeader/ResponsiveHeader';
import './App.css';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
    // Smooth scroll implementation
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' && target.getAttribute('href')?.startsWith('#')) {
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                
                if (element) {
                    e.preventDefault();
                    window.scrollTo({
                        top: element.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.body.addEventListener('click', handleAnchorClick);
        
        return () => {
            document.body.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <div className="font-sans">
            {/* Navbar with in-page anchors */}
            <ResponsiveHeader />
            {/* <Chatbot /> */}

            {/* Home Section */}
            <section id="home">
                <HeroSection />
                <WelcomeSection />
            </section>

            {/* Testimonials Section */}
            {/* <Testimonials /> */}

            {/* Treatments Section */}
            <section id="treatments">
                <TreatmentOptions />
                <AboutUs />
            </section>

            {/* Campaigns Section */}
            <section>
                <Services />
            </section>

            {/* Footer remains (contains contact info) */}
            <Footer />
        </div>
    );
}

export default App;
