import { hero } from "../assets";
import Clients from "./Clients.jsx";

const Hero = () => {
  return (
    <div className="py-5 sm:py-8 md:py-10 bg-[#0A2640] px-5 sm:px-10 md:px-14">
      <div className="grid grid-cols-1 gap-y-6 sm:gap-x-5 sm:grid-cols-5">
        <div className="col-span-2 relative overflow-hidden rounded-lg h-64 xs:h-72 ss:h-80 md:h-96  sm:order-last ">
          <img
            src={hero}
            alt="grapichs"
            className="absolute inset-0 h-full w-full  hover:scale-105 duration-300"
          />
        </div>

        <div className="max-w-xl mx-auto sm:mx-0 sm:max-w-full col-span-3 flex flex-col justify-center text-center sm:text-left items-center sm:items-start">
          <h1 className="max-w-sm sm:max-w-full text-white capitalize leading-[45px] sm:leading-[50px] font-[600] tracking-tight text-slate-100   text-[30px] xs:text-[36px] sm:text-[40px] md:text-5xl">
            Save Time By Building
            <span className="sm:block md:mt-4"> Fast With Boldo Template</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg leading-7 sm:leading-8 text-slate-200 max-w-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-8 md:mt-12 flex items-center  gap-x-6">
            <a
              href="#"
              className="rounded-lg  bg-[#65E4A3] text-slate-900 px-10 py-2.5  font-semibold  shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
            <a
              href="#"
              className=" flex text-white items-center gap-x-1.5 font-semibold leading-6 "
            >
              <span>Buy Template </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default Hero;
