import React from 'react';
import { motion } from "framer-motion";

const WritingsTips = () => {
    const tips = [
        "Write clearly and concisely.",
        "Add relevant images to support your content.",
        "Use meaningful tags to help others find your articles.",
        "Engage with readers by responding to comments.",
        "Keep your articles organized with headings and lists."
    ];
    return (
        <section className=" px-6 py-16 mt-20 mb-10 rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-indigo-50 shadow-xl">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-16 tracking-tight"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Tips for Writing Great Articles
            </motion.h2>

            <ul className="space-y-6 text-indigo-900 text-lg font-medium list-inside">
                {tips.map((tip, idx) => (
                    <motion.li
                        key={idx}
                        className="pl-4 relative before:content-['★'] before:absolute before:left-0 before:text-indigo-600 before:text-lg hover:text-indigo-700 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {tip}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default WritingsTips;