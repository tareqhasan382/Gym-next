import React from "react";

const page = () => {
  return (
    <div className="lg:px-36 px-2 w-full h-auto flex flex-col ">
      <h1 className=" w-full text-center italic font-bold text-6xl ">
        Our Coach
      </h1>
      <div className=" w-full flex flex-col items-center justify-start mt-10 ">
        <p>Join Us Now</p>
        <h3 className=" font-bold text-4xl text-center ">
          Join Us Our Free Workout <br /> Training With Dazko
        </h3>
        <div className=" w-full grid grid-cols-3 gap-4 ">
          <div className=" h-[200px] bg-black my-10 "></div>
          <div className=" h-[200px] bg-black my-10 "></div>
          <div className=" h-[200px] bg-black my-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default page;
