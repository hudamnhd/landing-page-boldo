import { servicesGroupC } from "../constants";
import { FaCheckCircle } from "react-icons/fa";

const ServicesGroupC = () => {
  return (
    <section>
      {servicesGroupC.map((content) => (
        <div className="my-12 space-y-5 px-10 drop-shadow-md sm:container sm:mx-auto sm:my-36 sm:space-y-10">
          <img src={content.img} className="w-full" alt="Group Work" />
          <div className="flex flex-col justify-between space-y-7 md:flex-row md:space-y-0 ">
            <h3 className="text-center text-[26px] leading-[40px] sm:text-[36px] sm:leading-[50px] md:w-1/2 md:text-left">
              {content.title}
            </h3>
            <div className="flex flex-col ">
              {content.content.map((subdata) => (
                <p className="text-md mb-4 flex items-center justify-between border-b border-black pb-4 md:text-lg">
                  {subdata.sub}
                  <span>
                    <FaCheckCircle className="ml-20 text-xl" />
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGroupC;
