import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopContributors = () => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/top-contributors`)
            .then(res => setContributors(res.data))
            .catch(err => console.error('Error fetching top contributors:', err));
    }, []);

    return (
        <section className="py-12 bg-white dark:bg-gray-900">
            <div className=" px-6">
                <h2 className="text-3xl md:text-4xl 
              font-bold mb-12 text-cyan-700 text-center">
                    👥 Top Contributors
                </h2>
                <p className='text-center max-w-2xl mx-auto mb-10'>Meet our most active and dedicated writers on the platform.
                    These contributors have made a big impact with their articles.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {contributors.map((user) => (
                        <div
                            key={user._id}
                            className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl shadow text-center hover:shadow-md transition"
                        >
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</h3>
                            <p className="text-gray-500 text-sm">{user._id}</p>
                            <p className="mt-2 text-cyan-600 dark:text-cyan-400 font-semibold">{user.count} Articles</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopContributors;
