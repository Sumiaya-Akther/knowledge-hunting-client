import React from 'react';
import { Link } from 'react-router';
import errorLotti from '../../assets/lotties/Page Not Found 404.json';
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-6 py-12">
            <div className="bg-base-100 max-w-lg w-full p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6 border border-secondary/20">
                
                {/* Animation */}
                <div className="max-w-96">
                    <Lottie animationData={errorLotti} loop={true} />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-error text-center">
                    404 - Page Not Found
                </h1>

                {/* Subtitle */}
                <p className="text-accent text-center leading-relaxed">
                    Oops! The page you’re looking for doesn’t exist or may have been moved. 
                    Let’s get you back on track.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="mt-4 bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
