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
 <div className='px-3 md:px-10'>
     <section className="px-6 py-16 mt-20 mb-10 rounded-3xl bg-gradient-to-br from-secondary/30  to-secondary/10 shadow-lg">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-16 tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tips for Writing Great Articles
      </motion.h2>

      <ul className="space-y-8 text-accent text-lg font-semibold list-inside relative">
        {tips.map((tip, idx) => (
          <motion.li
            key={idx}
            className="pl-8 relative cursor-default hover:text-secondary transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-0 top-1 text-secondary text-xl select-none">★</span>
            {tip}
          </motion.li>
        ))}
      </ul>
    </section>
 </div>
  );
};

export default WritingsTips;
