import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Categories = ({ data }) => {
  const articles = data?.data.data || [];

  // Get unique categories from articles
  const uniqueArticles = [
    ...new Map(articles.map(article => [article.category, article])).values(),
  ];

  return (
    <section className="my-20 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold mb-6 text-primary text-center">
        🌟 Categories
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-accent text-lg md:text-xl">
        Explore diverse article categories to match your interests and needs.
        From science to storytelling — there's something for everyone.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {uniqueArticles.map(article => (
          <Link
            key={article._id}
            to={`/category/${article.category}`}
            aria-label={`Explore ${article.category} articles`}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-secondary text-base-100 font-semibold rounded-full shadow-lg
                hover:bg-secondary/90 transition-colors duration-300"
            >
              {article.category}
            </motion.button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
