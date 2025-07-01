import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import UpdateData from '../../components/updateData/UpdateData';
import Loading from '../../components/loading/Loading';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';



const MyArticles = () => {
    //const data = useLoaderData()
    // console.log(data);
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [articles, setArticles] = useState([]);
    //const [articles, setArticles] = useState(data?.data || []);
    //console.log(articles);
    const [loading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);


    useEffect(() => {
        axiosSecure.get(`/my-articles/${user?.email}`)
            .then((res) => {
                setArticles(res.data || []);
                setLoading(false);
                // console.log(res.data);
            })
            .catch((error) => {
                console.error("Failed to fetch articles:", error);
                setLoading(false);
            })
    }, [user.email, axiosSecure])


    // useEffect(() => {
    //     const fetchMyArticles = async () => {
    //         try {
    //             setTimeout(async () => {
    //                 const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-articles/${user.email`});
    //                 setArticles(res.data || []);
    //                 setLoading(false);
    //             }, 100);
    //         } catch (error) {
    //             console.error("Failed to fetch articles:", error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchMyArticles();
    // }, [user]);



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the group!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`${import.meta.env.VITE_API_URL}/deletearticle/${id}`);

                    if (res.data.deletedCount > 0) {
                        setArticles((prev) => prev.filter((a) => a._id !== id));
                        Swal.fire("Deleted!", "Your group has been deleted.", "success");
                    } else {
                        console.log(res.data);
                    }
                } catch (error) {
                    console.error("Error deleting group:", error);
                    Swal.fire("Error", "Something went wrong!", "error");
                }
            }
        });
    };



    const handleUpdate = (article) => {
        setSelectedArticle(article);
        document.getElementById('update_modal').showModal();
    };


    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedArticle = {
            articleId: selectedArticle._id, //Backend expects `articleId`
            title: form.title.value,
            content: form.content.value,
            category: form.category.value,
            tags: form.tags.value.split(',').map(tag => tag.trim()),
            thumbnail: form.thumbnail.value,
        };

        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API_URL}/updatearticle`,
                updatedArticle
            );

            if (res.data.modifiedCount > 0) {
                //  Update frontend state without reload
                setArticles((prevArticles) =>
                    prevArticles.map((a) =>
                        a._id === selectedArticle._id ? { ...a, ...updatedArticle } : a
                    )
                );
                toast.success('Article updated successfully!');
                document.getElementById('update_modal').close()
                //Swal.fire("Updated!", "Article updated successfully.", "success");
                setSelectedArticle(null);
            }
        } catch (err) {
            // Swal.fire("Error", "Update failed.", "error");
            toast.error('Update failed!');
        }
    };

    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className="text-3xl font-bold mb-10 text-center">My Articles</h2>
            {
                articles.length === 0 ? (
                    <div className='p-20 rounded-2xl bg-cyan-500'>
                        <p className="text-center font-semibold">You haven’t created any groups yet.</p>
                    </div>

                ) : (

                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full text-center">
                                <thead className='text-white bg-black'>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Content</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-blue-300 font-semibold'>
                                    {articles.map((a) => (
                                        <tr key={a._id}>
                                            <td>{a.title}</td>
                                            <td>{a.category}</td>
                                            <td>{a.content}</td>
                                            <td>
                                                <button
                                                    onClick={() => handleUpdate(a)}
                                                    className="btn btn-sm btn-info mr-2 cursor-pointer"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(a._id)}
                                                    className="btn btn-sm btn-error cursor-pointer"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Modal */}
                        <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box w-full max-w-4xl">
                                <h2 className="text-2xl font-bold text-center mb-6">Update Article</h2>

                                <UpdateData selectedArticle={selectedArticle} handleUpdateSubmit={handleUpdateSubmit}></UpdateData>

                                {/* Close Button */}
                                <div className="modal-action mt-4">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>



                    </div>
                )
            }

        </div>
    );
};

export default MyArticles;