"use client";
import { useCreateMutation } from "@/redux/trainer/trainerApi";
import { useUsersQuery } from "@/redux/user/userApi";
import React from "react";

const Users = () => {
  const { data, isLoading } = useUsersQuery();
  const [create] = useCreateMutation();
  if (isLoading) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  }
  const createTrainer = async (id) => {
    try {
      await create({ id: id });
      alert("Trainer Created !!");
      // console.log("result:", result);
    } catch (error) {
      console.log("error:", error.data);
    }
  };
  return (
    <div>
      {data?.data.map((user) => (
        <div
          key={user?._id}
          className=" w-full flex items-center justify-between gap-6 p-4 "
        >
          <h1>{user?.email}</h1>
          <h1>{user?.role}</h1>
          {user.role !== "TRAINER" && (
            <button
              onClick={() => createTrainer(user._id)}
              className=" px-3 py-2 bg-black text-white rounded "
            >
              Trainer
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
