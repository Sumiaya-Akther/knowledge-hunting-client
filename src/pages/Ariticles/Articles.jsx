import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../../components/articleCard/ArticleCard';
import Loading from '../../components/loading/Loading';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState(['All']);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/articles`, {
                    params: selectedCategory !== 'All' ? { category: selectedCategory } : {},
                });

                let fetchedArticles = res.data.data;

                fetchedArticles.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
                });

                setArticles(fetchedArticles);

                const uniqueCategories = [...new Set(fetchedArticles.map((a) => a.category))];
                setCategories(['All', ...uniqueCategories]);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [selectedCategory, sortOrder]);

    if (loading) return <Loading />;

    return (
        <section className="px-4">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">Explore Articles</h1>
                <p className=" mt-2">
                    Discover insightful content shared by learners and contributors.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-row items-center justify-center gap-4 mb-8">
                {/* ✅ Category Dropdown */}
                <div className="flex justify-center md:justify-start">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm   "
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort Dropdown */}
                <div className="flex justify-center md:justify-end">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm  dark:bg-gray-800 "
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
            </div>

            {/* Articles Grid */}
            {articles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {articles.map((article) => (
                        <ArticleCard key={article._id} article={article} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-12">No articles found.</p>
            )}
        </section>
    );
};

export default Articles;
