import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../../components/loading/Loading';
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

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/featured-articles`)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch featured articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="my-20 px-4 md:px-10">
      <h2 className="text-4xl font-extrabold mb-6 text-primary text-center">
        🌟 Featured Articles
      </h2>
      <p className="text-center text-accent max-w-3xl mx-auto mb-12 text-lg">
        Discover our top handpicked articles curated for quality and relevance.
        Stay ahead with trending topics, deep insights, and expert perspectives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {articles.slice(0, 8).map((article, i) => (
          <motion.div
            key={article._id}
            className="bg-base-100 shadow-md rounded-xl overflow-hidden flex flex-col cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover="hover"
            tabIndex={0} // make keyboard accessible
            role="article"
            aria-label={`Article titled ${article.title}`}
          >
            {/* Author info */}
            <div className="flex items-center px-4 py-3 gap-3 border-b border-secondary/50">
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
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2 line-clamp-2 text-primary">{article.title}</h3>
              <p className="text-accent text-sm flex-grow line-clamp-4 mb-4">
                {article.content}...
              </p>

              <div className="flex items-center justify-between">
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
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
