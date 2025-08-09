import React from "react";
import { Link } from "react-router"; // react-router-dom import
import { motion } from "framer-motion";
import logo from '../../assets/logo1.png';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-base-100 text-base-content py-10 shadow-inner mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold mb-3 flex items-center gap-1 select-none">
            <img src={logo} alt="Knowledge Hunt Logo" className="w-12" />
            Knowledge <span className="text-primary">Hunt</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Empowering you to learn, explore, and grow with curated articles and
            resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-primary transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allArticles"
                className="hover:text-primary transition-colors duration-200"
              >
                All Articles
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <Link to="/support" className="hover:text-primary transition-colors duration-200">
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-primary transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-primary transition-colors duration-200">
                Report
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect with Us</h3>
          <div className="flex space-x-4 mb-4 text-gray-700 dark:text-gray-300">
            {/* External social links with <a> */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-primary transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.38 4.482A13.953 13.953 0 011.671 3.149 4.916 4.916 0 003.195 9.723a4.902 4.902 0 01-2.228-.616v.062a4.917 4.917 0 003.946 4.814 4.902 4.902 0 01-2.224.084 4.917 4.917 0 004.59 3.417 9.868 9.868 0 01-6.102 2.104c-.397 0-.79-.023-1.175-.068a13.945 13.945 0 007.557 2.213c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.882v1.367h.041c.402-.761 1.384-1.562 2.849-1.562 3.046 0 3.61 2.006 3.61 4.613v5.582z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Knowledge Hunt. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
