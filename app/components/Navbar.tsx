import { useState } from "react";
import { cn } from "~/utils/misc";
import { close, logoGreen, menu } from "../assets";
import { navLinks } from "../constants";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mx-auto flex items-center justify-between py-6 bg-[#0A2640] px-5 sm:px-10 md:px-14 ">
      {/* logo */}
      <div className="flex items-center gap-x-2.5">
        <img
          src={logoGreen}
          alt="boldo logo"
          className="h-[30px] sm:inline-flex hidden"
        />

        <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-white">
          Boldo
        </h1>
      </div>
      {/* navigasi */}

      <div className="space-x-2 hidden sm:flex">
        {navLinks.map((navlink) => (
          <div key={navlink.id}>
            <a
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "text-white hover:bg-[#3D5973] hover:text-white px-6",
                navlink.title === "Login" &&
                  "bg-white hover:bg-[#65E4A3] hover:text-black text-black",
              )}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </a>
          </div>
        ))}
        {
          /*{navLinks.map((navlink) => (
          <div key={navlink.id}>
            <a
              className={`${
                navlink.title === "Login"
                  ? "rounded-lg bg-white px-6 py-2 hover:bg-[#65E4A3] duration-300"
                  : "rounded-lg px-6 py-2 text-white hover:bg-[#3D5973] duration-300"
              }`}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </a>
          </div>
        ))}*/
        }
      </div>
      {/* navigasi mobile */}
      <div className="sm:hidden">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle(!toggle)}
          alt=""
        />
        <div
          className={` ${
            !toggle ? "hidden" : "block"
          } w-[95%] mx-auto sidebar absolute left-4 top-16 z-20 text-start space-y-1.5 rounded-[10px] bg-[#1C3D5B] p-4 font-semibold md:hidden`}
        >
          {navLinks.map((navlink) => (
            <a
              key={navlink.id}
              className={cn(
                navlink.title === "Login"
                  ? "rounded-md px-3 py-1 text-white hover:bg-[#65E4A3] hover:text-black"
                  : "rounded-md px-3 py-1 text-white hover:bg-[#3D5973]",
                "block",
              )}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
