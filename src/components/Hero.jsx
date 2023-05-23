import { hero } from "../assets";
import Clients from "./Clients.jsx";

const Hero = () => {
  return (
    <div className="bg-[#0A2640] px-5 pb-7 md:px-14 md:py-7 md:pb-14">
      <div className="flex flex-col-reverse justify-between md:flex-row ">
        <div className=" mx-auto mt-8 flex flex-col items-center space-y-8 text-left text-center md:mx-0 md:mt-16  md:items-start md:text-left">
          <h1 className="text-4xl font-medium leading-[50px] text-white md:text-5xl">
            Save time by building{" "}
            <span className="mt-0 md:mt-4 md:block">
              fast with Boldo Template
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-[28px]  text-white">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex space-x-3 ">
            <button className="rounded-full border-2 border-[#65E4A3] bg-[#65E4A3] px-6 py-3 text-[18px] font-bold hover:border-[#7FFEBD] hover:bg-[#7FFEBD] sm:px-10 ">
              Buy template
            </button>
            <button className="rounded-full border-2 border-white px-6 py-3 text-[18px] font-semibold text-white hover:bg-white hover:text-[#0A2640] sm:px-16 ">
              Explore
            </button>
          </div>
        </div>
        <div className=" mx-auto mt-5 md:mx-0 md:mt-0">
          <img src={hero} alt="grapichs" />
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default Hero;
