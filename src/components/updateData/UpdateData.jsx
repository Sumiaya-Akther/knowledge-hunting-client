import React from 'react';

const UpdateData = ({ selectedArticle, handleUpdateSubmit }) => {
    return (
        <div>
            <form onSubmit={handleUpdateSubmit} className="grid grid-cols-1 gap-4">
                {/* Title */}
                <div>
                    <label className="block mb-1 font-semibold">Title</label>
                    <input
                        name="title"
                        type="text"
                        defaultValue={selectedArticle?.title}
                        required
                        className="input input-bordered w-full"
                        autoFocus
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block mb-1 font-semibold">Content</label>
                    <textarea
                        name="content"
                        defaultValue={selectedArticle?.content}
                        rows="5"
                        required
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-semibold">Category</label>
                    <select
                        name="category"
                        defaultValue={selectedArticle?.category}
                        required
                        className="select select-bordered w-full"
                    >
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
                    <label className="block mb-1 font-semibold">Tags</label>
                    <input
                        name="tags"
                        type="text"
                        defaultValue={selectedArticle?.tags?.join(', ')}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block mb-1 font-semibold">Thumbnail URL</label>
                    <input
                        name="thumbnail"
                        type="url"
                        defaultValue={selectedArticle?.thumbnail}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Submit */}
                <div className="mt-2">
                    <button type="submit" className="btn bg-blue-700 text-white w-full">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateData;