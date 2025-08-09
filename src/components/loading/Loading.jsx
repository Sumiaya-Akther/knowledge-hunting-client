import React from 'react';
import loadingLotti from '../../assets/lotties/Cute Bird Flapping Animation.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center min-h-screen bg-base-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Lottie Animation */}
            <div className="w-56 h-56">
                <Lottie animationData={loadingLotti} loop={true} />
            </div>

            {/* Loading Text */}
            <p className="mt-4 text-lg font-semibold text-primary animate-pulse">
                Loading, please wait...
            </p>
        </motion.div>
    );
};

export default Loading;
