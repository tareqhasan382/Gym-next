import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <div className=" lg:w-[150px] w-[100px] min-h-screen bg-gray-800 text-white p-4 ">
      <Link
        href="/dashboard/add-class"
        className=" inline-flex whitespace-nowrap "
      >
        Add Class
      </Link>
      <Link href="/dashboard">dashboard</Link>
    </div>
  );
};

export default AdminSidebar;
