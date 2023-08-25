import { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../constants";

const ServicesGroupA = () => {
  const desiredItemCount = 6; // Jumlah item yang diinginkan

  const repeatedServices = Array.from(
    { length: desiredItemCount },
    (_, index) => services[index % services.length]
  );

  const itemsPerPage = 3;

  const [visibleServices, setVisibleServices] = useState(itemsPerPage);

  const maxVisibleServices = Math.min(
    visibleServices + itemsPerPage,
    repeatedServices.length
  );

  const isMaxVisible = visibleServices === maxVisibleServices;

  const toggleItems = () => {
    if (isMaxVisible) {
      setVisibleServices(itemsPerPage);
      if (firstItemRef.current) {
        firstItemRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setVisibleServices(maxVisibleServices);
    }
  };

  const firstItemRef = useRef(null);
  return (
    <section
      id="services"
      className="px-5 sm:px-10 md:px-14 "
      ref={firstItemRef}
    >
      <div className="py-5">
        <div className="max-w-4xl mx-auto space-y-1.5 text-center">
          <p className="sm:text-lg text-gray-500">Our Services</p>
          <h1 className="leading-9 sm:leading-[50px] md:leading-[60px] tracking-tight text-gray-900 text-[26px] xs:text-[36px] sm:text-[40px] md:text-5xl">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="md:container mx-auto mt-10 sm:mt-12  grid sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center ">
          {repeatedServices.slice(0, visibleServices).map((service, index) => (
            <div
              key={index}
              className="group w-fit flex flex-col items-center space-y-5 rounded-xl text-left transition-transform transform hover:-translate-y-3 hover:cursor-pointer duration-500"
            >
              <img src={service.img} alt="" className="h-full" />
              <div className="space-y-2.5">
                <h3 className="text-2xl font-medium">{service.title}</h3>
                <p className="text-gray-500 max-w-[280px]">{service.content}</p>
              </div>
              <div className=" max-w-[280px] w-full">
                <div>
                  <a
                    href="https://github.com/hudamnhd/landing-page-boldo"
                    className="flex w-fit items-center space-x-5  border-b-2 border-gray-500 pb-1 font-semibold"
                  >
                    <span>Explore page</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-16 flex justify-center">
          <button
            onClick={toggleItems}
            className="rounded-lg ring-2 ring-[#0A2640] px-7 py-1.5  font-semibold text-[#0A2640] hover:bg-[#0A2640] hover:text-white duration-300"
          >
            {isMaxVisible ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGroupA;
