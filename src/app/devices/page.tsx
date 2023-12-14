"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";

const Devices = () => {
  const { data: allDevices, isLoading } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () =>
      axios.get("https://dummyjson.com/products?limit=10").then((res) => res),
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>Devices</h2>
      <ul>
        {allDevices?.data.products.map((el) => (
          <Link href={`/devices/${el.id}`}>
            <li>{el?.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Devices;
