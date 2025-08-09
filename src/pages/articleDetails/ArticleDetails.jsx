import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ArticleDetails = () => {
    const { data: article } = useLoaderData();
    const { user } = useContext(AuthContext);
    //console.log(article);
    const navigate = useNavigate();
    const [liked, setLiked] = useState(article.likedBy.includes(false));
    const [likesCount, setLikesCount] = useState(article.likedBy.length);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(()=>{
        setLiked(article.likedBy.includes(user?.email))
    },[article.likedBy, user])

    const handleLike = () => {
        if (!user || !setLikesCount){
            return navigate('/login')
        }

        axios.patch(`${import.meta.env.VITE_API_URL}/like/${article._id}`, {
            email: user?.email,
        }).then(data =>{
            console.log(data?.data);
            const isLiked = data?.data?.liked;
            //update like state
            setLiked(isLiked)
            //update count state
            setLikesCount(prev =>(isLiked ? prev + 1 : prev - 1))
            
        }).catch(err =>{
            console.log(err);
            
        })

    };

    const handleComment = () =>{
         if (!user){
            return navigate('/login');
            
        }
    }


    const handleCommentPost = async () => {
        if (!user || !newComment.trim()){
            return;
        }

        const commentData = {
            article_id: article._id, // important: match backend field
            user_id: user.uid,
            user_name: user.displayName,
            user_photo: user.photoURL,
            comment: newComment.trim(),
        };

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentData);

            if (res.data.insertedId) {
                Swal.fire({
                    title: "Successfully commented the post!",
                    icon: "success",
                    draggable: true
                });
                setComments([commentData, ...comments]);
                setNewComment("");
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };


    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Fixed Image */}
                <div className="relative group md:sticky md:top-8 h-80 md:h-[600px] overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Right: Details */}
                <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 p-6 rounded-2xl shadow-xl">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
                        {article.title}
                    </h1>
                    <p className="text-sm text-gray-500 mb-4">{article.date}</p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-6">
                        <img src={article.author_photo} alt={article.author_name} className="w-12 h-12 rounded-full border-2 border-primary" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{article.author_name}</span>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        {article.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-sm shadow hover:scale-105 transition">
                            #{article.category}
                        </span>
                        {article.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full text-sm shadow hover:scale-105 transition">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Like & Comment Buttons */}
                    <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 mb-6">
                        <button
                            onClick={handleLike}
                            className="flex items-center gap-1 hover:text-red-500 transition"
                        >
                            {liked ? <IoMdHeart className="text-red-500" /> : <FaRegHeart />} {likesCount}
                        </button>
                        <div className="flex items-center gap-1">
                            <FaRegComment /> {comments.length}
                        </div>
                    </div>

                    {/* Comment Box */}
                    {user && (
                        <div className="mb-6">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Write a comment..."
                                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                            <button
                                onClick={handleCommentPost}
                                className="mt-3 px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition"
                            >
                                Post Comment
                            </button>
                        </div>
                    )}

                    {/* Comments List */}
                    <div className="space-y-4">
                        {comments.map((cmt, idx) => (
                            <div key={idx} className="flex gap-3 items-start bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                                <img src={cmt.user_photo} alt="User" className="w-8 h-8 rounded-full" />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">{cmt.user_name}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{cmt.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ArticleDetails;