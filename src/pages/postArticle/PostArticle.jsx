import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const PostArticle = () => {

    const { user } = useContext(AuthContext);

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-cyan-600 shadow-lg rounded-xl p-6 sm:p-10 border">
                <h2 className="text-3xl font-bold text-center mb-8">Post a New Article</h2>

                <form className="grid grid-cols-1 gap-6">
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