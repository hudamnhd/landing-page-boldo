import { navLinks } from "../constants";
import { logoGreen, menu, close } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mx-auto flex items-center justify-between py-6 bg-[#0A2640] px-5 sm:px-10 md:px-14 ">
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <img
          src={logoGreen}
          alt="boldo logo"
          className="h-[30px] sm:h-[35px]"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Boldo</h1>
      </div>
      {/* navigasi */}
      <div className="space-x-1 hidden sm:flex">
        {navLinks.map((navlink) => (
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
        ))}
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
            !toggle ? "hidden" : "flex"
          } sidebar absolute right-5 top-16 z-20 flex-col items-center space-y-3 rounded-[10px] bg-[#1C3D5B] p-5 font-semibold md:hidden`}
        >
          {navLinks.map((navlink) => (
            <div key={navlink.id}>
              <a
                className={`${
                  navlink.title === "Login"
                    ? "rounded-lg bg-white px-6 py-1 hover:bg-[#65E4A3]"
                    : "rounded-lg px-6 py-1 text-white hover:bg-[#3D5973]"
                }`}
                href={`#${navlink.id}`}
              >
                {navlink.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
