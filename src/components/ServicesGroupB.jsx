import { servicesGroupB } from "../constants";

const ServicesGroupB = () => {
  return (
    <section className="md:container mx-auto mt-20 px-5 sm:px-10">
      {servicesGroupB.map((service, index) => (
        <div
          key={service.id}
          className={`mb-20 md:mb-24 grid sm:grid-cols-5 md:grid-cols-2 gap-x-10   max-w-md sm:max-w-full mx-auto`}
        >
          <div
            className={` ${
              index === 1 ? "sm:order-last  sm:justify-end w-full" : ""
            } sm:col-span-2 md:col-span-1 flex justify-center`}
          >
            <img
              src={service.img}
              className="hover:scale-105 duration-300 object-cover rounded-xl"
              alt={service.id}
            />
          </div>
          <div className=" sm:col-span-3  md:col-span-1 pt-10 sm:pt-24">
            <h3 className="mb-8 text-[26px] leading-8 sm:leading-[50px] xs:text-3xl  tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h3>
            {service.content.map((content) => {
              const IconContent = content.icon;
              return (
                <div
                  key={content.content}
                  className={` ${
                    index === 1 &&
                    "group p-4 shadow-md hover:bg-[#0A2640] hover:text-white duration-300"
                  } mb-4 flex  items-center gap-x-3 rounded-md `}
                >
                  <IconContent
                    className={` ${
                      index === 0 &&
                      "bg-[#0A2640] text-white rounded-full p-0.5"
                    }  text-[22px] md:text-[24px] text-[#0A2640] group-hover:text-white `}
                  />
                  <p
                    className={` ${
                      index === 1 && "font-medium"
                    } text-base sm:text-lg `}
                  >
                    {content.content}
                  </p>
                </div>
              );
            })}
            <button
              className={` ${
                index === 1 && "hidden"
              } mt-6 md:mt-8 rounded-lg bg-[#0a2640] px-10 py-2.5 text-lg font-semibold text-white hover:bg-white hover:ring-2 hover:ring-[#0a2640] hover:text-[#0a2640] duration-300`}
            >
              Start now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGroupB;
