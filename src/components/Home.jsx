import React from "react";
import Post from "./Post";

const dummyPost = [
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2024/04/08/10/36/podcast-8683196_640.jpg",
    title: "The Art of Mindfulness",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae autem tenetur asperiores",
    authorId: 3,
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_640.jpg",
    title: "Adventures in Wilderness",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae autem tenetur asperiores",
    authorId: 3,
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2017/02/21/06/14/web-page-2084779_640.png",
    title: "Unraveling the Mysteries of Quantum Computing",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae autem tenetur asperiores",
    authorId: 3,
  },
  {
    id: "4",
    image:
      "https://cdn.pixabay.com/photo/2017/02/21/06/14/web-page-2084779_640.png",
    title: "Exploring the Hidden Gems of Southeast Asia",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae autem tenetur asperiores",
    authorId: 3,
  },
  {
    id: "5",
    image:
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "A Journey Through the Alps",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae autem tenetur asperiores",
    authorId: 4,
  },
  {
    id: "6",
    image:
      "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "The Future of Artificial Intelligence",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae autem tenetur asperiores",
    authorId: 5,
  },
];

const Home = () => {
  return (
    <>
      <img src="./images/BlogHome.png" alt="" />
      <h1 class="text-4xl font-bold text-center text-blue-700">Latest Blog</h1>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center -m-4 mb-5">
              <Post />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
