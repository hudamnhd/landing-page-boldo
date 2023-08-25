import { useState, useRef } from "react";
import { products } from "../constants";
const Products = () => {
  const desiredItemCount = 9; // Jumlah item yang diinginkan

  const repeatedProduct = Array.from(
    { length: desiredItemCount },
    (_, index) => products[index % products.length]
  );

  const itemsPerPage = 3;

  const [visibleServices, setVisibleServices] = useState(itemsPerPage);

  const maxVisibleServices = Math.min(
    visibleServices + itemsPerPage,
    repeatedProduct.length
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
      id="product"
      className="px-5 sm:px-10 md:px-14 "
      ref={firstItemRef}
    >
      <div className="mb-5 space-y-3 text-center sm:mb-10">
        <p className="sm:text-lg opacity-60">Our Blog</p>
        <h1 className="max-w-4xl mx-auto leading-9 sm:leading-[50px] md:leading-[60px] tracking-tight text-gray-900 text-[26px] xs:text-[36px] sm:text-[40px] md:text-5xl">
          Value proposition accelerator product management venture
        </h1>
      </div>
      <div className="md:container mx-auto mt-14 grid ss:grid-cols-2 [@media(min-width:825px)]:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12 justify-items-center ">
        {repeatedProduct.slice(0, visibleServices).map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-xltransition-transform transform hover:-translate-y-3 hover:cursor-pointer duration-500"
          >
            <div>
              <img src={product.imgProduct} className="h-auto" alt="" />
              <div className="flex space-x-2 mt-5 mb-2.5">
                <h4 className="font-bold">{product.type}</h4>
                <p className="text-gray-500">{product.date}</p>
              </div>
              <p className="max-w-[300px] text-lg">{product.content}</p>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <img src={product.img} alt="" />
              <p>{product.person}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-12 mb-20  flex justify-center">
        <button
          onClick={toggleItems}
          className="rounded-lg ring-2 ring-[#0A2640] px-7 py-1.5 font-semibold text-[#0A2640] hover:bg-[#0A2640] hover:text-white duration-300"
        >
          {isMaxVisible ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Products;
