import React from 'react';
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

const Category = () => {
  const data = useLoaderData();
  const articles = data?.data?.data || [];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-accent text-center mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Articles in this Category
        </motion.h2>

        {articles.length === 0 ? (
          <motion.div
            className="text-center text-secondary text-lg mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>No articles found in this category.</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article) => (
              <motion.div
                key={article._id}
                className="card bg-base-200 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <figure className="relative h-64 overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 badge badge-primary text-primary-content">
                    {article.category}
                  </div>
                </figure>
                
                <div className="card-body p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={article.author_photo || "https://via.placeholder.com/40"}
                      alt={article.author_name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-accent">{article.author_name}</h4>
                      <p className="text-xs text-secondary">{article.date}</p>
                    </div>
                  </div>

                  <h3 className="card-title text-xl font-bold text-accent mb-2">{article.title}</h3>
                  
                  <div className="card-actions justify-end mt-auto">
                    <Link to={`/article/${article._id}`} className="w-full">
                      <motion.button
                        className="btn btn-primary w-full normal-case text-lg font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Read more
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Category;