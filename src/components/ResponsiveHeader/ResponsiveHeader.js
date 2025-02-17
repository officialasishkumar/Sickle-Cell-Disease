// ./src/components/ResponsiveHeader/ResponsiveHeader.js
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveHeader = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const barsIcon = <FontAwesomeIcon icon={faBars} />;

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/032/524/550/small_2x/kidney-bean-icon-vector.jpg"
                        alt="Logo"
                        className="h-12"
                    />
                    <span className="ml-2 text-xl font-bold text-blue-900">SickleCellAwareness</span>
                </Link>
                <button
                    className="lg:hidden text-2xl text-blue-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {barsIcon}
                </button>
                <ul
                    className={`${menuOpen ? "flex" : "hidden"
                        } lg:flex space-x-6 text-lg font-semibold text-blue-900`}
                >
                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-us"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Treatments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Campaigns
                        </Link>
                    </li>
                    {/* <li> */}
                        {/* <Link
                            to="/doctors"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Doctors
                        </Link> */}
                    {/* </li> */}
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-blue-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ResponsiveHeader;
