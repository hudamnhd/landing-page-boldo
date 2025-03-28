import { ChevronDown } from "../assets/icon";
import { servicesGroupC } from "../constants";

const ServicesGroupC = () => {
  return (
    <section>
      {servicesGroupC.map((content) => (
        <div
          key={content.id}
          className=" space-y-5 md:container mx-auto my-20 sm:space-y-10  px-5 sm:px-10 md:px-14 "
        >
          <div className="grid relative [@media(max-width:900px)]:h-[300px] rounded-xl">
            <img
              src={content.img}
              className="w-full h-full object-cover rounded-xl"
              alt="Group Work"
            />
          </div>
          <div className="flex flex-col gap-5 justify-between space-y-7 xl:flex-row md:space-y-0 items-start">
            <h3 className="text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1] xl:max-w-2xl xl:text-start text-center">
              {content.title}
            </h3>
            <div className=" hidden flex flex-col w-full  mx-auto md:mx-0 max-w-lg sm:max-w-xl md:max-w-md">
              {content.content.map((subdata) => (
                <div
                  key={subdata.sub}
                  className=" mb-4 flex items-center justify-between border-b border-black pb-4  xs:text-lg"
                >
                  <span>{subdata.sub}</span>
                  <span>
                    <ChevronDown className=" sm:text-xl" />
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4  w-full  mx-auto max-w-2xl">
              <Accordion
                question="We connect our customers with the best?"
                answer="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. "
              />
              <Accordion
                question="Android research & development rockstar?"
                answer="Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGroupC;

import React, { useState } from "react";

const Accordion = (
  { question, answer }: { question: string; answer: string },
) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" mb-4  border-b border-black pb-4 md:text-lg">
      <div
        className={`flex justify-between items-center gap-x-5 cursor-pointer ${
          isOpen ? "font-medium" : ""
        }`}
        onClick={toggleAccordion}
      >
        <div>{question}</div>
        <div
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform  bg-[#0A2640] text-white
rounded-full p-0.5 text-[#0A2640] hover:text-white h-[18px]  xs:h-[20px] w-[18px] xs:w-[20px] flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-muted-foreground text-base">{answer}</div>
      )}
    </div>
  );
};
