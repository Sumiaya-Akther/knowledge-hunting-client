import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, type: "spring", stiffness: 50 }
    }),
    hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(74, 144, 226, 0.3)" }
};

const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#4A90E2", boxShadow: "0 6px 12px rgba(74,144,226,0.5)" },
    tap: { scale: 0.95 }
};

const ArticleCard = ({ article }) => {
    return (
        <motion.div
            className="bg-base-100 shadow-md rounded-xl overflow-hidden flex flex-col cursor-pointer h-[500px] max-h-[500px]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            tabIndex={0} // make keyboard accessible
            role="article"
            aria-label={`Article titled ${article.title}`}
        >
            {/* Author info */}
            <div className="flex items-center px-4 py-3 gap-3 border-b border-secondary/50 flex-shrink-0">
                <img
                    src={article.author_photo}
                    alt={article.author_name}
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                />
                <div>
                    <h3 className="font-semibold text-accent">{article.author_name}</h3>
                    <time className="text-xs text-secondary">
                        {new Date(article.date).toLocaleDateString()}
                    </time>
                </div>
            </div>

            {/* Thumbnail */}
            <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow overflow-hidden">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 text-primary">
                    {article.title}
                </h3>
                <p className="text-accent text-sm flex-grow line-clamp-4 mb-4 overflow-hidden">
                    {article.content}...
                </p>

                <div className="flex items-center justify-between flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold capitalize">
                        {article.category}
                    </span>

                    <Link to={`/article/${article._id}`}>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="bg-primary text-base-100 font-semibold px-4 py-2 rounded-lg shadow-md transition-colors duration-200"
                        >
                            Read more
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ArticleCard;
