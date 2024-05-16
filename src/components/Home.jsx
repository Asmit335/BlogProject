import React from "react";
import BlogList from "./BlogList";

const Home = () => {
  return (
    <>
      <img src="./images/BlogHome.png" alt="" />
      <h1 class="text-4xl font-bold text-center text-blue-700">Latest Blog</h1>
      <BlogList />
    </>
  );
};

export default Home;
