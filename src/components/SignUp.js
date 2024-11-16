"use client";
import Image from "next/image";
import React, { useState } from "react";
import authImage from "../assets/blog.png";
import Link from "next/link";
import { useLoginMutation } from "@/redux/auth/authApi";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // Handle input change
  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("email & password are required");
      return;
    }

    const result = await login(formData).unwrap();
    if (result) {
      alert("Login successful");
      router.push("/");
    }
  };
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center  ">
      <h1>Sign Up</h1>
      <div className=" lg:w-[70%] w-full grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <aside className=" w-full h-auto bg-green-400 ">
          <Image
            src={authImage}
            width={400}
            height={400}
            alt="sign in Image"
            priority
            className=" w-full h-auto object-cover "
          />
        </aside>
        <aside className=" w-full ">
          <form onSubmit={handleSubmit} className="w-full h-auto px-8 ">
            <div className=" w-full ">
              {error && <p className="text-red-500">{error}</p>}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full px-2 py-3 outline outline-1 outline-black  "
              />
            </div>
            <div className=" w-full ">
              {error && <p className="text-red-500">{error}</p>}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" w-full px-2 py-3 outline outline-1 outline-black  "
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className=" w-full bg-black text-white h-[50px] mt-4 font-bold "
            >
              Sign up
            </button>
            <div className=" w-full ">
              <p>
                Already have an account ? please
                <Link href="/sign-in" className=" underline text-blue-500 ">
                  sign in
                </Link>
              </p>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default SignUp;
