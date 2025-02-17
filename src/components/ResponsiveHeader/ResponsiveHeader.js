// ./src/components/ResponsiveHeader/ResponsiveHeader.js
import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResponsiveHeader = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const barsIcon = <FontAwesomeIcon icon={faBars} />;

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <a href="#home" className="flex items-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/032/524/550/small_2x/kidney-bean-icon-vector.jpg"
                        alt="Logo"
                        className="h-12"
                    />
                    <span className="ml-2 text-xl font-bold text-blue-900">SickleCellAwareness</span>
                </a>
                <button
                    className="lg:hidden text-2xl text-blue-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {barsIcon}
                </button>
                <ul
                    className={`${menuOpen ? 'flex' : 'hidden'} lg:flex space-x-6 text-lg font-semibold text-blue-900`}
                >
                    <li>
                        <a
                            href="#home"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#treatments"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Treatments
                        </a>
                    </li>
                    <li>
                        <a
                            href="#campaigns"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Campaigns
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ResponsiveHeader;
