import React, { useState } from "react";
import authors from "../../authors.json";

const Authors = () => {
  const [authorData, setAuthorData] = useState(authors);

  return (
    <div className="container mx-auto py-10">
      {authorData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {authorData.map((author) => (
            <div key={author.id} className="bg-white shadow-md rounded-md p-6">
              <img
                src={author.image}
                alt={author.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                {author.name}
              </h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <h2 className="text-2xl font-bold text-gray-600">
            No authors available
          </h2>
        </div>
      )}
    </div>
  );
};

export default Authors;
