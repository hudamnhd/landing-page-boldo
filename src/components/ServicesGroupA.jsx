import { FaArrowRight } from "react-icons/fa";
import { services } from "../constants";
const ServicesGroupA = () => {
  return (
    <section>
      <div className="px-3 py-7 md:py-14">
        <div className="space-y-3 text-center">
          <p className="text-gray-500">Our Services</p>
          <h1 className="mx-auto text-3xl leading-[42px] sm:text-[48px] sm:leading-[72px] md:w-2/3">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div
          id="services"
          className="container mx-auto mt-5 flex  flex-col flex-wrap items-center justify-center rounded-xl px-5 sm:mt-10 sm:flex-row"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-start space-y-5 rounded-xl p-10 text-left hover:scale-105 duration-300"
            >
              <img
                src={service.img}
                alt=""
                className="h-auto w-3/5 w-auto sm:w-full"
              />
              <div className="space-y-3">
                <h3 className="text-2xl font-medium">{service.title}</h3>
                <p className="text-lg text-gray-500 sm:max-w-[280px]">
                  {service.content}
                </p>
              </div>
              <div>
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
      </div>
    </section>
  );
};

export default ServicesGroupA;
