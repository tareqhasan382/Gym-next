"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/providers/ThemeToggle";
import SideBar from "./SideBar";
import { userLoggedOut } from "@/redux/auth/authSlice";

const menuEffect = `max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-green-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300  cursor-pointer `;
const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [showNav, setShowNav] = useState(false);
  // Home About Trainers Classes Schedules News Contact

  return (
    <nav className=" lg:px-36 px-2 dark:bg-black bg-white w-full h-[70px] flex items-center border-b-2 border-green-500  ">
      <h1 className=" text-xl font-extrabold uppercase inline-block whitespace-nowrap text-green-500 outline outline-1 outline-black p-2 bg-green-100 ">
        Fitness Gym
      </h1>
      <div className=" max-lg:hidden w-full h-full flex items-center justify-between pl-10 ml-10 ">
        <ul className=" h-full flex gap-6 items-center  ">
          <Link href="/">
            <li className={`${menuEffect}`}>Home</li>
          </Link>
          <Link href="about">
            <li className={`${menuEffect}`}>About</li>
          </Link>
          <Link href="trainers">
            <li className={`${menuEffect}`}>Trainers</li>
          </Link>
          <Link href="classes">
            <li className={`${menuEffect}`}>Classes</li>
          </Link>
        </ul>
        <div className=" h-full flex gap-6 items-center  ">
          <Link href="schedules">
            <p className={`${menuEffect}`}>Schedules</p>
          </Link>
          <Link href="dashboard">
            <p className={`${menuEffect}`}>Dashboard</p>
          </Link>
          <p className={`${menuEffect}`}>Contact</p>
          <div className=" flex gap-2 ">
            <ThemeToggle />
            {auth?.user ? (
              <button
                onClick={() => dispatch(userLoggedOut())}
                className="hover:text-primary text-gray-600 dark:text-gray-200 hidden sm:block font-bold text-[15px]"
              >
                Sign out
              </button>
            ) : (
              <Link
                href="sign-in"
                className="hover:text-primary text-gray-600 dark:text-gray-200 hidden sm:block font-bold text-[15px]"
              >
                <button>Sign in</button>
              </Link>
            )}
          </div>
          <button className="px-2 sm:px-4 py-1 sm:py-2.5 text-sm rounded font-bold text-white border-2 border-green-500 bg-green-500 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-green-500 hidden sm:block">
            Start Learning
          </button>
        </div>
      </div>
      <div className=" lg:hidden w-full flex gap-6 items-end justify-end ">
        {/* <Sun /> */}
        <ThemeToggle />
        <Link
          href="sign-in"
          className="hover:text-primary text-gray-600 dark:text-gray-200  font-bold text-[15px]"
        >
          Sign in
        </Link>
        <AlignJustify
          size={30}
          className="cursor-pointer transition ease-in duration-150"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className=" -top-[80px] ">
        <SideBar showNav={showNav} setShowNav={setShowNav} />
      </div>
    </nav>
  );
};

export default Navbar;
