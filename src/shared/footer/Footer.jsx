import React, { useContext } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Footer = () => {
    ;
    const { user } = useContext(AuthContext)
    return (
        <footer className="bg-base-300  py-10">
            <div className="w-11/12 mx-auto px-6 flex flex-col items-center gap-6">
                {/* Logo */}
                <div className="flex items-center space-x-3  font-bold text-3xl">
                    <h1 className="btn btn-ghost flex items-center font-bold text-xl md:text-3xl"><img className='w-18' src="logo1.png" alt="" />Knowledge <span className='text-cyan-600'>Hunt</span></h1>

                </div>

                {/* Links */}
                <nav>
                    <ul className="menu menu-horizontal text-[16px] px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-600 font-extrabold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allArticles"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-600 font-bold" : ""
                                }
                            >
                                All Articles
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-600 font-extrabold" : ""
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-600 font-extrabold" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/support"
                                className={({ isActive }) =>
                                    isActive ? "text-cyan-600 font-extrabold" : ""
                                }
                            >
                                Support
                            </NavLink>
                        </li>
                        {
                            user ? <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? "text-cyan-600 font-extrabold" : ""
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li> : <></>
                        }
                    </ul>
                </nav>

                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl text-gray-400">
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center  text-sm mt-8">
                &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;