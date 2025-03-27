import React, { useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { products } from "../constants";

const Products = () => {
  const ProducstItem = ({ isReverse }: { isReverse?: boolean }) => {
    const data = isReverse ? [...products].reverse() : products;
    return (
      <>
        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-xltransition-transform transform hover:-translate-y-3 hover:cursor-pointer duration-500"
          >
            <div>
              <img src={product.imgProduct} className="h-auto" alt="" />
              <div className="flex space-x-2 mt-5 mb-2.5">
                <div className="font-bold">{product.type}</div>
                <p className="text-muted-foreground">{product.date}</p>
              </div>
              <p className="max-w-[300px]">{product.content}</p>
            </div>

            <div className="mt-6 flex items-center space-x-2">
              <img src={product.img} alt={`profile ${product.person}`} />
              <p>{product.person}</p>
            </div>
          </div>
        ))}
      </>
    );
  };
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section
      id="product"
      className="px-5 sm:px-10 md:px-14 mb-8"
    >
      <div className="mb-5 space-y-3 text-center sm:mb-10">
        <p className="font-medium text-muted-foreground">Our Blog</p>
        <h1 className="mb-8 text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1] text-center max-w-3xl mx-auto">
          Value proposition accelerator product management venture
        </h1>
      </div>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="md:container mx-auto mt-14 grid ss:grid-cols-2 [@media(min-width:825px)]:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12 justify-items-center ">
          <ProducstItem />
        </div>
        <CollapsibleContent>
          <div className="md:container mx-auto mt-14 grid ss:grid-cols-2 [@media(min-width:825px)]:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12 justify-items-center ">
            <ProducstItem isReverse={true} />
          </div>
        </CollapsibleContent>
        <div className="w-fit mx-auto my-10">
          <CollapsibleTrigger className="rounded-md ring-2 ring-[#0A2640] px-7 py-1.5 font-semibold text-[#0A2640] hover:bg-[#0A2640] hover:text-white duration-300">
            {isOpen ? "Show Less" : "Show More"}
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </section>
  );
};

export default Products;
