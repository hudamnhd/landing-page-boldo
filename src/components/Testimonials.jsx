import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { feedback } from "../constants";
const Testimonials = () => {
  return (
    <section class="bg-[#0A2640]">
      <div class="container mx-auto mt-20 space-y-14 px-5 py-10 sm:py-20 md:px-10">
        <div class="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0">
          <h1 class="mb-5 text-center text-3xl text-white sm:text-[48px] sm:leading-[55px] md:mb-0 md:w-[70%] md:text-left md:leading-[72px]">
            An enterprise template to ramp up your company website
          </h1>
          <div class="flex flex-row space-x-4 ">
            <a
              href="#"
              className="group rounded-full border-2 border-white bg-white p-4 hover:bg-[#1C3D5B]"
            >
              <FaArrowLeft className="text-xl group-hover:text-white" />
            </a>{" "}
            <a
              href="#"
              className="group rounded-full border-2 border-white bg-white p-4 hover:bg-[#1C3D5B]"
            >
              <FaArrowRight className=" text-xl group-hover:text-white" />
            </a>
          </div>
        </div>
        <div class="flex flex-col  items-start space-y-5 px-3 md:flex-row  md:justify-between md:space-x-5  md:space-y-0">
          {feedback.map((feed) => (
            <div class="flex flex-col space-y-10 rounded-xl bg-white p-8 hover:scale-105 md:w-1/3 ">
              <p class="text-2xl">"{feed.content}"</p>
              <div class="flex items-center space-x-5">
                <img src={feed.img} alt="" />
                <div className="space-y-2">
                  <h4 className="text-[16px] font-bold">{feed.name}</h4>
                  <p className="text-[14px]">{feed.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
