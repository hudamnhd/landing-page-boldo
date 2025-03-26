import { useRef, useState } from "react";
import { FaArrowRight } from "../assets/icon";
import { services } from "../constants";
import { Button } from "./ui/button";

const ServicesGroupA = () => {
  return (
    <section id="services" className="px-5 sm:px-10 md:px-14">
      <div className="py-5">
        <div className="max-w-4xl mx-auto space-y-1.5 text-center">
          <p className="font-medium text-muted-foreground">Our Services</p>
          <h1 className="text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1]">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="md:container mx-auto mt-10 sm:mt-12  grid md:grid-cols-2 xl:grid-cols-3 gap-12 justify-items-center ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group w-fit flex flex-col items-center space-y-3 rounded-xl text-left transition-transform transform hover:-translate-y-3 hover:cursor-pointer duration-500"
            >
              <img src={service.img} alt="" className="h-full" />
              <div className="space-y-2">
                <div className="font-semibold tracking-tight text-xl">
                  {service.title}
                </div>
                <p className="text-muted-foreground max-w-[280px]">
                  {service.content}
                </p>
              </div>
              <div className=" max-w-[280px] w-full">
                <Button size="lg" variant="link" className="px-0">
                  Buy Template
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGroupA;
