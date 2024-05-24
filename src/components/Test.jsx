import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Test = () => {
  const fetchData = async (limit, skip) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data.products;
  };

  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchData(limit, skip),
    staleTime: 1000,
  });

  const { data: categories } = useQuery({
    queryKey: ["keysss"],
    queryFn: async () => {
      const resp1 = await fetch(`https://dummyjson.com/products/categories`);
      return resp1.json();
    },
  });

  const handleMove = (moveCount) => {
    setSkip((prevSkip) => Math.max(prevSkip + moveCount, 0));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="flex items-center mb-4">
          <form className="max-w-md mx-auto flex-grow">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <select
            name="category"
            id="category"
            className="ml-4 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Category</option>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category}
                </option>
              ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="/">{product.title}</a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleMove(-limit)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2 hover:bg-blue-700"
          >
            Prev
          </button>
          <button
            onClick={() => handleMove(limit)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
