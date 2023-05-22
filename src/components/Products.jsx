import { products } from "../constants";
const Products = () => {
  return (
    <section>
      <div class="mb-5 space-y-3 px-5 text-center sm:mb-10">
        <p class="text-[20px] opacity-60">Our Blog</p>
        <h1 class="mx-auto text-3xl leading-[42px] sm:text-[40px] sm:leading-[55px] md:w-2/3 md:text-[48px] md:leading-[72px]">
          Value proposition accelerator product management venture
        </h1>
      </div>
      <div
        id="product"
        class="container mx-auto  mb-8 flex flex-col  flex-wrap justify-center px-5 drop-shadow-md  sm:mb-10 sm:flex-row"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-xl p-10 hover:bg-gray-100"
          >
            <div className="space-y-5">
              <img src={product.imgProduct} className="h-auto w-auto" alt="" />
              <div className="flex space-x-2">
                <h4 className="font-bold">{product.type}</h4>
                <p className="text-gray-500">{product.date}</p>
              </div>
              <p className="max-w-[300px] text-[20px]">{product.content}</p>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <img src={product.img} alt="" />
              <p>{product.person}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="container mx-auto mb-10 flex justify-center sm:mb-24">
        <button class="rounded-full border-2 border-[#0A2640] px-8 py-3 text-xl font-bold text-[#0A2640] hover:bg-[#0A2640] hover:text-white">
          Load more
        </button>
      </div>
    </section>
  );
};

export default Products;
