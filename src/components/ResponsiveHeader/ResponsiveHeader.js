// ./src/components/ResponsiveHeader/ResponsiveHeader.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const ResponsiveHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-md py-3'
                    : 'bg-white/80 backdrop-blur-sm py-5'
                }`}
        >
            <nav className="container mx-auto flex items-center justify-between px-4">
                <a href="#home" className="flex items-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/032/524/550/small_2x/kidney-bean-icon-vector.jpg"
                        alt="Logo"
                        className="h-10 md:h-12"
                    />
                    <div className="ml-3">
                        <span
                            className={`block text-xl font-bold ${scrolled ? 'text-primary-700' : 'text-gray-800'
                                }`}
                        >
                            SickleCell
                        </span>
                        <span
                            className={`text-xs ${scrolled ? 'text-primary-500' : 'text-gray-600'
                                }`}
                        >
                            Awareness Initiative
                        </span>
                    </div>
                </a>

                {/* Mobile menu button */}
                <button
                    className={`lg:hidden text-2xl focus:outline-none ${scrolled ? 'text-primary-700' : 'text-gray-800'
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-lg font-medium">
                        {['home', 'treatments', 'campaigns'].map((section) => (
                            <li key={section}>
                                <a
                                    href={`#${section}`}
                                    className={`hover:text-primary-500 transition ${scrolled ? 'text-gray-700' : 'text-gray-800'
                                        }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className={`py-2 px-5 rounded-full transition-all font-semibold ${scrolled
                                ? 'bg-primary-600 text-white hover:bg-primary-700'
                                : 'bg-white/20 text-gray-800 hover:bg-white/30 backdrop-blur-sm'
                            }`}
                    >
                        Contact Us
                    </a>
                </div>
            </nav>  

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-gradient-to-b from-primary-700 to-primary-900 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <ul className="flex flex-col space-y-8 text-2xl text-center">
                        {['home', 'treatments', 'campaigns'].map((section) => (
                            <li key={section}>
                                <a
                                    href={`#${section}`}
                                    className="text-white hover:text-blue-200 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="bg-white text-primary-700 py-2 px-8 rounded-full hover:bg-blue-50 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default ResponsiveHeader;
