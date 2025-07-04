import React from 'react';
import { Link } from 'react-router';

const ArticleCard = ({ article }) => {
    return (
        <div>
            <div className="rounded-xl shadow-md px-4 py-2 mb-3 h-[510px] bg-cyan-500 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={article.author_photo
                        } alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{article.author_name
                            }</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-600">{article.date
                            }</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={article.thumbnail} alt="" className="object-cover rounded-md object-center w-full h-70" />
                </div>
                <div className='py-2'>
                    <div className="space-y-3">
                        <h1 className='font-bold text-[18px] line-clamp-1'>{article.title} </h1>
                        <div className="badge badge-secondary p-1">{article.category}</div>
                        <Link to={`/article/${article._id}`}>
                            <button type="button" className="flex bg-black text-white items-center justify-center w-full p-2 my-2 font-semibold tracking-wide rounded-4xl dark:text-gray-50 cursor-pointer">Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;