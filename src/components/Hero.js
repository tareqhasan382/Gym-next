"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import imageHero from "../assets/about_1_1.png";

const Hero = () => {
  return (
    <div className=" w-full h-auto grid lg:grid-cols-2 grid-cols-1 ">
      <aside className="py-6">
        <p>Welcome Fitness Gym</p>
        <h1 className=" lg:text-3xl text-xl lg:text-left text-center font-extrabold">
          Shape Your <br /> Perfect Body
        </h1>
        <p className="py-4 text-justify ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <div className="w-full flex lg:flex-row md:flex-row landscape:sm:flex-row flex-col gap-6">
          <button className="bg-gradient-to-r from-[#00e000] to-[#75cf75] px-4 py-3 rounded font-semibold text-black">
            Take a your tour
          </button>

          <button className="flex items-center">
            <span className="bg-gradient-to-r from-[#00e000] to-[#75cf75] p-3 rounded-full mx-2 text-white">
              <Play />
            </span>
            <span className="font-semibold"> Watch Now!</span>
          </button>
        </div>
      </aside>
      <aside className="relative w-full h-full flex flex-col items-center justify-center lg:pt-0 pt-10 z-10 ">
        {/* Responsive Background Circle */}
        <div className="absolute flex items-center justify-center border-[3px] border-dashed dark:border-white border-black rounded-full w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] -z-10"></div>

        {/* Gradient Circle */}
        <div className="absolute flex items-center justify-center bg-gradient-to-r from-[#00e000] to-[#75cf75] rounded-full w-[280px] h-[280px] lg:w-[280px] lg:h-[280px] -z-10"></div>

        <Image
          src={imageHero}
          width={400}
          height={400}
          alt="Hero Image"
          priority
          className=" w-auto h-[350px] lg:h-[350px] object-fill -z-10 "
        />
        <div className=" w-full h-10  "></div>
      </aside>
    </div>
  );
};

export default Hero;
