"use client";
import { useTraineesQuery } from "@/redux/trainee/traineeApi";
import React from "react";

const Trainers = () => {
  const { data } = useTraineesQuery();
  // console.log("data:", data);
  return (
    <div>
      {data?.data.map((item) => (
        <div key={item._id} className=" flex items-center gap-4 ">
          <h1>{item.fullName}</h1>
          <h1>{item.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default Trainers;
