import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
// import logo from "../assets/logo.png";
// import Image from "next/image";
const SideBar = ({ showNav, setShowNav }) => {
  //Home About Trainers Classes Schedules News Contact
  const menuItems = [
    { name: "Home", id: "home", link: "/" },
    { name: "Course", id: "course", link: "/" },
    { name: "Shohojato", id: "shohojato", link: "/shohojato" },
    { name: "Shuddhi", id: "shuddhi", link: "/shuddhi" },
    { name: "About", id: "about", link: "/" },
    { name: "Team", id: "team", link: "/" },
    { name: "Contact", id: "contact", link: "/" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`fixed top-0 text-black  ${
        showNav ? "left-0" : "-left-[105%]"
      } h-screen w-screen bg-black bg-opacity-60 z-50 pb-6 flex flex-col justify-between lg:hidden`}
    >
      <div
        className={`fixed top-0 z-50 text-black dark:text-white ${
          showNav ? "left-0" : "-left-[100%]"
        } h-full w-[75%] overflow-y-scroll no-scrollbar bg-white dark:bg-black  z-50 transition-all duration-500 pb-6 flex flex-col justify-between lg:hidden`}
      >
        <div className="w-full flex flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-between text-xl font-bold py-6 px-2">
            <div>
              {/* <Image
                src={logo}
                alt="logo"
                className=" w-[140px] h-auto object-contain "
                priority
              /> */}
              <h1 className=" text-xl font-extrabold uppercase inline-block whitespace-nowrap text-green-500 outline outline-1 outline-black p-2 bg-green-100 ">
                Fitness Gym
              </h1>
              <h1>Logo Here</h1>
            </div>
            <AiOutlineClose
              onClick={() => setShowNav(!showNav)}
              size={30}
              className="cursor-pointer text-black dark:text-white "
            />
          </div>
          <div className="w-full h-[1px] bg-slate-200"></div>

          {/* Navigation Menu */}
          <nav>
            <div className="space-y-4 pl-3 pt-4 z-30">
              {menuItems.map((menu, index) => (
                <Link key={index} href={menu.link}>
                  <div
                    className="relative group"
                    onClick={() => setShowNav(!showNav)}
                  >
                    <p>{menu?.name}</p>
                    <div className="w-full h-[1px] bg-slate-200 mt-4"></div>
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="w-full h-[1px] bg-slate-200"></div>
        <div className="pl-3 my-10 text-[12px] ">
          <p>Copyright © {currentYear} by Edupy Academy</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
