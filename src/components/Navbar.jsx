import { navLinks } from "../constants";
import { logoGreen, menu, close } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mx-auto flex items-center justify-between bg-[#0A2640] px-5 py-5 md:px-16 ">
      {/* logo */}
      <div className="flex items-center space-x-2">
        <img src={logoGreen} alt="" />{" "}
        <h1 className="text-4xl font-bold text-white">Boldo</h1>
      </div>
      {/* navigasi */}
      <div className="space-x hidden md:flex">
        {navLinks.map((navlink) => (
          <div key={navlink.id}>
            <a
              className={`${
                navlink.title === "Login"
                  ? "rounded-full bg-white px-6 py-2 hover:bg-[#65E4A3]"
                  : "rounded-full px-6 py-2 text-white hover:bg-[#3D5973]"
              }`}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </a>
          </div>
        ))}
      </div>
      {/* navigasi mobile */}
      <div className="md:hidden">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle(!toggle)}
          alt=""
        />
        <div
          className={` ${
            !toggle ? "hidden" : "flex"
          } absolute right-5 top-16 flex-col items-center space-y-3 rounded-[10px] bg-[#1C3D5B] p-5 font-semibold md:hidden`}
        >
          {navLinks.map((navlink) => (
            <div key={navlink.id}>
              <a
                className={`${
                  navlink.title === "Login"
                    ? "rounded-full bg-white px-6 py-1 hover:bg-[#65E4A3]"
                    : "rounded-full px-6 py-1 text-white hover:bg-[#3D5973]"
                }`}
                href={`#${navlink.title}`}
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
