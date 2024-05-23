import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const fetchData = async () => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    return resp.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["keysss", id],
    queryFn: fetchData,
    staleTime: 1000,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error:{error.message}</div>;
  return (
    <>
      <div className="">Product:{data.title}</div>
      <div>Price{data.price}</div>
    </>
  );
};

export default Product;
