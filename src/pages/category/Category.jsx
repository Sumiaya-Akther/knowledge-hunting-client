import React from 'react';
import { useLoaderData, useParams } from "react-router";

const Category = () => {
     const data = useLoaderData();
   const articles = data?.data?.data || [];
    return (
            <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Articles in this Category</h2>
      {articles.length === 0 ? (
        <p>No articles found in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article._id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.content?.slice(0, 80)}...</p>
              <p className="text-xs mt-2">Author: {article.author_name}</p>
              <p className="text-xs">Date: {article.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    );
};

export default Category;