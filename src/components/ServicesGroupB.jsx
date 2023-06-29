import { servicesGroupB } from "../constants";

const ServicesGroupB = () => {
  return (
    <section className="container mx-auto mt-10 px-5 sm:mt-24 sm:px-10">
      {servicesGroupB.map((service, index) => (
        <div
          key={service.id}
          className={`mb-24 flex justify-between  ${
            index === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } `}
        >
          <div className="">
            <img
              src={service.img}
              className="hover:scale-105 duration-300"
              alt={service.id}
            />
          </div>
          <div className="pt-10 sm:pt-24 md:w-1/2">
            <h3 className="mb-10 text-[30px] leading-[35px] sm:text-[36px] sm:leading-[52px] ">
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
                  } mb-4 flex  items-center space-x-4 rounded-md `}
                >
                  <IconContent className="text-2xl text-[#0A2640] group-hover:text-white" />
                  <p
                    className={` ${
                      index === 1 && "font-medium"
                    } text-[18px] sm:text-[20px]`}
                  >
                    {content.content}
                  </p>
                </div>
              );
            })}
            <button
              className={` ${
                index === 1 && "hidden"
              } mt-10 rounded-full bg-[#0a2640] px-10 py-3 text-[18px] font-semibold text-white hover:bg-white hover:ring-2 hover:ring-[#0a2640] hover:text-[#0a2640] duration-300`}
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
