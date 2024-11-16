import Users from "@/components/dashboard/Users";

import React from "react";

const page = () => {
  return (
    <div>
      <h1>dashboard page</h1>
      <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <div className=" w-full  ">
          <h1>Users</h1>
          <Users />
        </div>
      </div>
    </div>
  );
};

export default page;
