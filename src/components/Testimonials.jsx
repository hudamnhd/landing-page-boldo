import { useState } from "react";
import ItemCarousel from "./ItemCarousel";

const Testimonials = () => {
  return (
    <section className="bg-[#0A2640]">
      <div className="container mx-auto mt-20 space-y-14 py-10 sm:py-12 px-10">
        <div className="space-y-5 md:space-y-0">
          <h1 className="mb-5 text-center text-3xl text-white sm:text-[48px] sm:leading-[55px] md:mb-0 md:w-[70%] md:text-left md:leading-[72px]">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <ItemCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
