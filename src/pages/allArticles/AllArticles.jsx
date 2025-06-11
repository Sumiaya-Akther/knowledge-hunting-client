import React from 'react';
import { useLoaderData } from 'react-router';

const AllArticles = () => {
    const data = useLoaderData();
    const articles = data?.data.data;
    // const [articles, setArticles] = useState(data?.data || []);
    console.log(articles);

    return (
       <div>
        {/* <h1 className='text-4xl font-bold my-10 text-center'>All Article</h1> */}
         <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"'>
            {
                articles.map((article) => (
                    <div key={article._id} className="rounded-xl shadow-md p-2 mb-5 bg-blue-300 sm:w-96 dark:bg-gray-50 dark:text-gray-800">
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
                       <div className='p-5'>
                         <img src={article.thumbnail} alt="" className="object-cover rounded-md object-center w-full h-72 dark:bg-gray-500" />
                       </div>
                        <div className="p-3">
                            <div className="space-y-3">
                                <h1 className='font-bold text-xl'>{article.title} </h1>
                                <div className="badge badge-secondary p-1">{article.category}</div>
                                <button type="button" className="flex bg-black text-white items-center justify-center w-full p-2 my-2 font-semibold tracking-wide rounded-4xl dark:text-gray-50">Read more</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
    );
};

export default AllArticles;