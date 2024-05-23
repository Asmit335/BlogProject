import React from "react";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Post() {
  const fetchPost = async () => {
    const response = await fetch("http://localhost:5050/api/blog");
    return response.json();
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error:{error.message}</div>;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {data.length > 0 ? (
            <div className="flex flex-wrap justify-center -m-4 mb-5">
              {data.map((post) => (
                <div key={post.id} className="p-4 md:w-1/3">
                  <Link to={`/detail/${post._id}`}>
                    <div className="h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 rounded-xl overflow-hidden">
                      <img
                        className="w-full h-48 object-cover"
                        // src={post.image}
                        src="https://source.unsplash.com/random/?blogs"
                        alt={post.title}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {new Date().toLocaleDateString()}
                        </h2>
                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                          {post.title.length > 25
                            ? `${post.title.substr(0, 25)}`
                            : post.title}
                        </h1>
                        <p className="leading-relaxed mb-3">`{post.desc}...`</p>
                        <div className="flex items-center justify-start">
                          <img
                            className="w-10 h-10 rounded-full mr-4"
                            src={post.authorImage}
                            alt={post.authorName}
                          />
                          <div className="text-sm">
                            <p className="text-gray-700 leading-none font-bold">
                              By Asmit
                              {/* {post.authorName} */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center  ">
              <h2 className="text-2xl font-bold text-gray-900">
                No Posts Found.
              </h2>
            </div>
          )}
        </div>
      </section>
      {data.length > 0 && <Pagination />}
    </div>
  );
}

export default Post;
