import React  from 'react';
import { Link } from 'react-router';


const Caterogirs = ({ data }) => {

    const articles = data?.data.data;
   // console.log(articles);

    const uniqueArticles = [
        ...new Map(articles.map(article => [article.category, article])).values()
    ];
   // console.log(uniqueArticles);



    return (
        <div className='my-20 mb- px-4'>
            <h2 className="text-3xl md:text-4xl 
              font-bold mb-18 text-cyan-700 text-center">🌟 Categories</h2>
            <div className='flex flex-col md:flex-row mb-3 justify-center text-center gap-5'>
                {
                    uniqueArticles.map((article) => <Link key={article._id} to={`/category/${article.category}`}>
                        <button className='px-5 py-2 bg-purple-100 text-purple-700
               rounded-full shadow cursor-pointer hover:bg-purple-200 transition'>{article.category}</button>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Caterogirs;