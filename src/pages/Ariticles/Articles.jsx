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
        <section className="px-4 md:px-8 lg:px-12 py-10 bg-base-100">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
                    Explore Articles
                </h1>
                <p className="mt-3 text-accent max-w-2xl mx-auto text-sm md:text-base">
                    Discover insightful content shared by learners and contributors.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                {/* Category Dropdown */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-secondary px-4 py-2 rounded-lg text-sm bg-base-100 text-accent shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                {/* Sort Dropdown */}
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border border-secondary px-4 py-2 rounded-lg text-sm bg-base-100 text-accent shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>

            {/* Articles Grid */}
            {articles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {articles.map((article) => (
                        <div
                            key={article._id}
                            className="transform transition hover:scale-[1.02] hover:shadow-lg"
                        >
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-primary mt-16">No articles found.</p>
            )}
        </section>

    );
};

export default Articles;
