"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProductDetails = (params) => {
  console.log(params.id);
  const { data: oneData, isLoading } = useQuery({
    queryKey: ["getOneProduct", params.params.id],
    queryFn: () =>
      axios
        .get(`https://dummyjson.com/products/${params.params.id}`)
        .then((res) => res),
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h3>ProductDetails {params?.params?.id}</h3>
      <p>{oneData?.data.title}</p>
      <p>{oneData?.data.description}</p>
      <p>{oneData?.data.price}</p>
    </div>
  );
};

export default ProductDetails;
