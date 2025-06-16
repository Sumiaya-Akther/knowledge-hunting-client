import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Loading from '../../components/loading/Loading';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PostArticle = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    //const location = useLocation();
    const [loading, setLoading] = useState(false);

    const handlePostArticle = async (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const content = form.content.value;
        const category = form.category.value;
        const tags = form.tags.value.split(',').map(tag => tag.trim()).filter(Boolean);
        const thumbnail = form.thumbnail.value;
        const date = new Date().toISOString();
        const author_name = form.author_name.value;
        const author_email = form.author_email.value;

        const articleData = {
            title,
            content,
            category,
            tags,
            thumbnail,
            date,
            author_id: user?.uid,
            author_name,
            author_email,
            author_photo: user?.photoURL,
            likedBy: [],
        };

        console.log(articleData);
        setLoading(true);

        //save articles to the server

        // fetch (`${import.meta.env.VITE_API_URL}/articles`,{
        //     method:'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body:JSON.stringify(articleData),
        // }).then(res=> res.json())
        // .then(data => {
        //     console.log(data)
        // })


        axiosSecure.post(`/articles`, articleData)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Article Created Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                    navigate('/myArticles');
                }
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong please try again!",
                    });
                }
            })

            .finally(() => {
                setLoading(false); 
            });


    };

     if (loading){
        return <Loading></Loading>
    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-cyan-600 shadow-lg rounded-xl p-6 sm:p-10 border">
                <h2 className="text-3xl font-bold text-center mb-8">Post a New Article</h2>

                <form onSubmit={handlePostArticle} className="grid grid-cols-1 gap-6">
                    {/* Title */}
                    <div>
                        <label className="block mb-1 font-semibold">Title</label>
                        <input name="title" type="text" required className="input input-bordered w-full" placeholder="Enter article title" />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block mb-1 font-semibold">Content</label>
                        <textarea name="content" rows="5" required className="textarea textarea-bordered w-full" placeholder="Write your content here..."></textarea>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-1 font-semibold">Category</label>
                        <select name="category" required className="select select-bordered w-full">
                            <option value="">Select a Category</option>
                            <option value="Programming">Programming</option>
                            <option value="Science">Science</option>
                            <option value="Education">Education</option>
                            <option value="Literature">Literature</option>
                            <option value="Art & Design">Art & Design</option>
                            <option value="Technology">Technology</option>
                            <option value="History">History</option>
                            <option value="Language Learning">Language Learning</option>
                            <option value="Personal Development">Personal Development</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block mb-1 font-semibold">Tags (comma-separated)</label>
                        <input name="tags" type="text" className="input input-bordered w-full" placeholder="e.g. AI, Future, Innovation" />
                    </div>

                    {/* Thumbnail */}
                    <div>
                        <label className="block mb-1 font-semibold">Thumbnail Image URL</label>
                        <input name="thumbnail" type="url" className="input input-bordered w-full" placeholder="https://example.com/image.jpg" />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block mb-1 font-semibold">User Name</label>
                        <input
                            name="author_name"
                            type="text"
                            defaultValue={user?.displayName}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block mb-1 font-semibold">User Email</label>
                        <input
                            name="author_email"
                            type="email"
                            defaultValue={user?.email}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Submit */}
                    <div className="mt-4">
                        <button type="submit" className="btn bg-black text-white w-full">Post Article</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PostArticle;