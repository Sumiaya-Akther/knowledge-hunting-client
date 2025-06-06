import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../../components/articleCard/ArticleCard';
import Loading from '../../components/loading/Loading';

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState(['All']);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(false);

    // Fetch articles from backend when selectedCategory changes
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                // API call with optional category query param
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/articles`, {
                    params: selectedCategory !== 'All' ? { category: selectedCategory } : {},
                });
                const fetchedArticles = res.data.data;

                setArticles(fetchedArticles);

                // Extract categories from articles (for filter buttons)
                const uniqueCategories = [
                    ...new Set(fetchedArticles.map(article => article.category)),
                ];
                setCategories(['All', ...uniqueCategories]);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [selectedCategory]);

    if (loading){
        return <Loading></Loading>
    }

    return (
        <div className="p-6">
            {/* Category filter buttons */}
            <div className="flex justify-center overflow-x-auto gap-3 mb-6">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-cyan-600 text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Articles list */}
            <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"'>
                {
                    articles.map((article) => <ArticleCard key={article._id} article={article}></ArticleCard>)
                }
            </div>
        </div>
    );
};

export default Articles;