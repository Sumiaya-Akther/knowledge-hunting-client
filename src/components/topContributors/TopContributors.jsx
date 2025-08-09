import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const TopContributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/top-contributors`)
      .then(res => setContributors(res.data))
      .catch(err => console.error('Error fetching top contributors:', err));
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-base-100">
      <h2 className="text-4xl font-extrabold mb-8 text-primary text-center">
        👥 Top Contributors
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-accent text-center text-lg">
        Meet our most active and dedicated writers on the platform. These contributors have made a big impact with their articles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {contributors.map(user => (
          <motion.div
            key={user._id}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(242, 177, 33, 0.4)' }} 
            className="bg-base-100 rounded-xl p-6 shadow-md flex flex-col items-center text-center cursor-pointer transition-shadow"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-secondary"
            />
            <h3 className="text-xl font-semibold text-accent">{user.name}</h3>
            <p className="text-sm text-gray-500 mb-2 truncate max-w-[150px]">{user._id}</p>
            <p className="text-secondary font-bold text-lg">{user.count} Articles</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopContributors;
