import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostComment from "./PostComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const PostDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [editCommentIndex, setEditCommentIndex] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const fetchSinglePost = async () => {
    const response = await fetch(`http://localhost:5050/api/blog/${id}`);
    return response.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singlePost", id],
    queryFn: fetchSinglePost,
  });

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  const handleEditComment = (index) => {
    setEditCommentIndex(index);
    setEditCommentText(comments[index]);
  };

  const handleSaveEditComment = () => {
    const updatedComments = [...comments];
    updatedComments[editCommentIndex] = editCommentText;
    setComments(updatedComments);
    setEditCommentIndex(null);
    setEditCommentText("");
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{data.blog.title}</h1>
          <div>
            <Link
              to={`/edit/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Edit
            </Link>
            <Link
              to={`/delete/${id}`}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </Link>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://source.unsplash.com/random/?blogs"
            alt="Author"
          />
          <div>
            <p className="text-gray-700 font-bold">Author Name</p>
            <p className="text-gray-500 text-sm">
              Published on {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-6"
          src="https://source.unsplash.com/random/?blogs"
          alt="Post"
        />
        <div className="prose">
          <p>{data.blog.content}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos
            est, sit molestias inventore ab magni reiciendis fugiat? Distinctio,
            nulla quo, deleniti hic dolores qui fugit neque fugiat sit ab ea
            sunt nobis laboriosam repellendus ratione corrupti nisi consequatur
            itaque eaque aspernatur quibusdam. Dolorum libero a ipsum totam.
            Aut, veritatis architecto nisi voluptas a eius! Non aperiam
            reiciendis, laboriosam quod rem sed pariatur qui eaque! Quam
            deleniti maiores recusandae odio nihil. Quasi fugit, at cum
            exercitationem pariatur tempora fugiat expedita sed eligendi dolorum
            dolores atque excepturi ullam necessitatibus, id temporibus aliquid
            quia consequatur voluptas quas harum minima! Rem, eius vel!
          </p>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> ({likes})
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={handleDislike}
          >
            <FontAwesomeIcon icon={faThumbsDown} /> ({dislikes})
          </button>
        </div>
        <PostComment onCommentSubmit={handleCommentSubmit} />
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="border-t pt-4 mt-4">
                {editCommentIndex === index ? (
                  <>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={editCommentText}
                      onChange={(e) => setEditCommentText(e.target.value)}
                    ></textarea>
                    <div className="flex justify-end space-x-2 mt-2">
                      <button
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        onClick={handleSaveEditComment}
                      >
                        Save
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        onClick={() => setEditCommentIndex(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>{comment}</p>
                    <div className="flex space-x-2 mt-2">
                      <button
                        className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        onClick={() => handleEditComment(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        onClick={() => handleDeleteComment(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
