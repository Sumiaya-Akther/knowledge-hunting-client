import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const ArticleDetails = () => {
    const { data: article } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(article);
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(article.likedBy.length);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleLike = () => {
        setLiked(!liked);
        setLikesCount((prev) => prev + (liked ? -1 : 1));
        // TODO: send like/unlike to backend with article._id and user.uid
    };


    const handleCommentPost = () => {
        if (!user || !newComment.trim()) return;
        const commentObj = {
            text: newComment,
            author: {
                name: user.displayName,
                photo: user.photoURL,
                uid: user.uid,
            },
            date: new Date().toLocaleString(),
        };
        setComments([commentObj, ...comments]);
        setNewComment("");

        // TODO: send comment to backend with article._id and commentObj
    };

    return (
        <div className="max-w-3xl mx-auto p-4 rounded-2xl shadow-lg bg-blue-300 dark:bg-gray-900">
            <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{article.title}</h1>
                <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                <div className="flex items-center mt-2 gap-3">
                    <img src={article.author_photo} alt={article.author_name} className="w-10 h-10 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{article.author_name}</span>
                </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{article.content}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    #{article.category}
                </span>
                {article.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-6 mb-4 text-gray-600 dark:text-gray-300">
                <button onClick={handleLike} className="flex items-center gap-1 hover:text-red-500">
                    {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {likesCount}
                </button>
                <div className="flex items-center gap-1">
                    <FaRegComment /> {comments.length}
                </div>
            </div>

            {user && (
                <div className="mb-4">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        onClick={handleCommentPost}
                        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Post Comment
                    </button>
                </div>
            )}

            <div className="mt-6 space-y-4">
                {comments.map((cmt, idx) => (
                    <div key={idx} className="flex gap-3 items-start bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                        <img src={cmt.author.photo} alt="User" className="w-8 h-8 rounded-full" />
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">{cmt.author.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{cmt.text}</p>
                            <p className="text-xs text-gray-400 mt-1">{cmt.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetails;