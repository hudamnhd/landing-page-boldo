import { FaArrowRight } from "../assets/icon";
import { servicesGroupB } from "../constants";
import { Button } from "./ui/button";

import * as React from "react";
import { feedback } from "../constants";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

function CarouselSize() {
  return (
    <section className="bg-[#0A2640]">
      <div className="container mx-auto mt-20 py-10 sm:py-12 px-5">
        <div className="mb-10 md:mb-14">
          <h1 className="mb-8 text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1] text-background text-center max-w-2xl mx-auto">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="xl:max-w-[90%] mx-auto"
        >
          <CarouselContent>
            {[...feedback, ...feedback].map((feed, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 xl:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col justify-between space-y-10 rounded-xl bg-white p-7 sm:p-8 mx-2 w-fit duration-300 h-fit">
                      <p className="text-xl">
                        "{feed.content} Lorem ipsum dolor sit amet"
                      </p>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 inline-flex rounded-full border-2 border-muted-foreground">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={feed.img}
                            alt={feed.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium">
                            Judith Black
                          </div>
                          <div className="text-base font-medium text-muted-foreground">
                            CEO, Tuple
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:flex hidden" />
          <CarouselNext className="sm:flex hidden" />
        </Carousel>
      </div>
    </section>
  );
}
const ServicesGroupB = () => {
  return (
    <>
      <section className="mt-20 sm:mt-28 px-5 sm:px-10 mx-auto w-fit">
        {servicesGroupB.map((service, index) => (
          <div
            key={service.id}
            className={`mb-20 md:mb-24 gap-x-16 xl:flex`}
          >
            <div
              className={` ${
                index === 1 ? "xl:order-last  xl:ml-auto" : ""
              } flex-1 flex justify-center`}
            >
              <img
                src={service.img}
                className="hover:scale-105 duration-300 object-cover rounded-xl"
                alt={service.id}
              />
            </div>
            <div className=" flex-1 pt-10 sm:pt-24 max-w-3xl mx-auto">
              <h3 className="mb-8 text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1]">
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

              {index !== 1 && (
                <Button
                  size="lg"
                  variant="default"
                  className="bg-[#0a2640] hover:text-[#0a2640] hover:ring-2 hover:ring-[#0a2640] hover:bg-white mt-2"
                >
                  Start Now

                  <FaArrowRight />
                </Button>
              )}
            </div>
          </div>
        ))}
      </section>

      <CarouselSize />
    </>
  );
};

export default ServicesGroupB;
