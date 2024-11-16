import Hero from "@/components/Hero";
import Image from "next/image";
import image1 from "../../assets/img-002.jpg";

export default function Home() {
  return (
    <div className=" w-full h-auto flex flex-col items-center   ">
      <div className=" lg:px-36 px-2 w-full h-full mt-10 ">
        <Hero />
      </div>
      <div className=" lg:px-36 px-2 w-full h-auto bg-red-100 ">
        <div className=" w-full h-[400px] grid grid-cols-2 gap-10  ">
          <Image
            src={image1}
            width={500}
            height={500}
            priority
            alt="about image"
            className=" w-full h-[400px] object-contain "
          />
          <div>
            <p>Information About Us</p>
            <h1 className=" text-4xl font-extrabold my-6 ">
              Dazko A Crossfit Workout Training Center
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            <div className=" flex flex-col gap-2 mt-4 ">
              <p> Men Fitness and Workout</p>
              <p> Women Fitness and Workout</p>
              <p> Personal Trainings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
