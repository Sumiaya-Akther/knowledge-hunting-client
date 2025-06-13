import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="w-11/12 mx-auto px-6 flex flex-col items-center gap-6">
                {/* Logo */}
                <div className="flex items-center space-x-3 text-white font-bold text-3xl">
                    <h1 className="btn btn-ghost flex items-center font-bold text-3xl">Knowledge<span className='text-cyan-600'>Hunt</span></h1>

                </div>

                {/* Links */}
                <nav>
                    <ul className="flex space-x-8 flex-col md:flex-row text-center text-lg font-medium">
                        <li>
                            <Link to='/aboutUs' className="hover:text-cyan-400 transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                           <Link to='#' className="hover:text-cyan-400 transition-colors">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                           <Link to="#" className="hover:text-cyan-400 transition-colors">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl text-gray-400">
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-8">
                &copy; {new Date().getFullYear()} CoBania. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
