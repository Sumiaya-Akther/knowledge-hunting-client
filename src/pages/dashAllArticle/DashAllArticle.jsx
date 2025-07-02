import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/loading/Loading';

const DashAllArticle = () => {

      const [articles, setArticles] = useState([]);
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allarticles`)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
        console.log(articles);
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
    <section className="p-6 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">📝 All Articles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-cyan-200 dark:border-gray-700">
          <thead className="bg-cyan-100 dark:bg-gray-800 text-left">
            <tr className="text-cyan-700 dark:text-cyan-300">
              <th className="p-3 border border-cyan-200">#</th>
              <th className="p-3 border border-cyan-200">Title</th>
              <th className="p-3 border border-cyan-200">Author</th>
              <th className="p-3 border border-cyan-200">Category</th>
              <th className="p-3 border border-cyan-200">Tags</th>
              <th className="p-3 border border-cyan-200">Likes</th>
              <th className="p-3 border border-cyan-200">Date</th>
            </tr>
          </thead>
          <tbody className="text-black dark:text-gray-100">
            {articles.map((article, index) => (
              <tr key={article._id} className="hover:bg-cyan-50 dark:hover:bg-gray-800 transition">
                <td className="p-3 border border-cyan-100">{index + 1}</td>
                <td className="p-3 border border-cyan-100 font-medium">{article.title}</td>
                <td className="p-3 border border-cyan-100 flex items-center gap-2">
                  <img src={article.author_photo} alt="" className="w-6 h-6 rounded-full" />
                  {article.author_name}
                </td>
                <td className="p-3 border border-cyan-100">{article.category}</td>
                <td className="p-3 border border-cyan-100">
                  {article.tags?.join(', ')}
                </td>
                <td className="p-3 border border-cyan-100">{article.likedBy?.length || 0}</td>
                <td className="p-3 border border-cyan-100">{article.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default DashAllArticle;