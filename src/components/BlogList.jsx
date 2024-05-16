import { Button } from "@material-tailwind/react";
import React from "react";

function BlogList() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 rounded-xl overflow-hidden">
                <img
                  className="w-full"
                  src="https://cdn.pixabay.com/photo/2024/04/08/10/36/podcast-8683196_640.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    25 Sep 2023
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    The Art of Mindfulness
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae autem tenetur asperiores.
                  </p>
                  <div className="flex items-center justify-end"></div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 rounded-xl overflow-hidden">
                <img
                  className="w-full"
                  src="https://cdn.pixabay.com/photo/2017/02/21/06/14/web-page-2084779_640.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    25 Sep 2023
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    Exploring the Hidden Gems of Southeast Asia
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae autem tenetur asperiores.
                  </p>
                  <div className="flex items-center justify-end"></div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 rounded-xl overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    25 Sep 2023
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    Unraveling the Mysteries of Quantum Computing
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae autem tenetur asperiores.
                  </p>
                  <div className="flex items-center justify-end"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              See More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogList;
