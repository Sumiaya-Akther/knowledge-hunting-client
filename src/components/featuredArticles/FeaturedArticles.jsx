import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router';
import { motion } from "framer-motion";


const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/featured-articles`)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
        //console.log(articles);
      })
      .catch((error) => {
        console.error("Failed to fetch featured articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>
  }



  return (
    <div className="my-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-700 text-center"
      >
        🌟 Featured Articles
      </h2>
      <p className='text-center max-w-2xl mx-auto mb-10'>Discover our top handpicked articles curated for quality and relevance.
        Stay ahead with trending topics, deep insights, and expert perspectives.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6 gap-6">
        {articles.slice(0, 8).map((article) => (
          <div
            key={article._id}
            className="rounded-xl shadow-md px-4 py-2 mb-3 h-[550px] bg-cyan-500 dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-2">
                <img
                  src={article.author_photo}
                  alt=""
                  className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
                />
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold leading-none">
                    {article.author_name}
                  </h2>
                  <span className="inline-block text-xs leading-none dark:text-gray-600">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img
                src={article.thumbnail}
                alt=""
                className="object-cover rounded-md object-center w-full h-72 dark:bg-gray-500"
              />
            </div>

            <div className=" space-y-3">
              <h1 className="font-bold mt-2 text-xl line-clamp-1">{article.title}</h1>
              <p className="text-sm text-gray-800 line-clamp-1 dark:text-gray-700">
                {article.content}...
              </p>
              <div className="badge badge-secondary p-1 capitalize">{article.category}</div>

              <Link to={`/article/${article._id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex bg-black text-white cursor-pointer items-center justify-center w-full p-2 my-2 font-semibold tracking-wide rounded-xl dark:text-gray-50"
                >
                  Read more
                </motion.button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;