import { boldo02 } from "../assets";
import { footerLinks } from "../constants";
const CTAFooter = () => {
  return (
    <section id="about">
      <div class="bg-custom-background container mx-auto rounded-lg bg-[#0A2640]">
        <div class="mx-auto space-y-4 px-5 py-10 md:w-2/3 md:space-y-8 md:py-16">
          <h1 class="text-center text-[28px] leading-[38px] text-white sm:leading-[72px] md:text-[48px] ">
            An enterprise template to ramp up your company website
          </h1>
          <div class="flex flex-col justify-center space-x-0 space-y-2 md:flex-row md:space-x-3 md:space-y-0 ">
            <input
              type="email"
              name="email"
              placeholder="Your email addres"
              class="rounded-full px-6 py-2 text-center text-lg focus:outline-none focus:ring sm:text-left"
            />
            <button class="rounded-full border-2 border-[#69E6A6] bg-[#69E6A6] px-8 py-2 font-bold  hover:bg-green-400">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <footer className="container mx-auto mb-1 mt-10 flex flex-col space-y-5 px-5 pb-5 sm:mt-20 sm:justify-between sm:px-10 md:flex-row md:space-x-12 md:space-y-0">
        <div class="space-y-4 md:w-[60%]">
          <div class="flex items-center space-x-2">
            <img src={boldo02} alt="Logo" class="h-7" />
            <h1 class="text-4xl font-bold">Boldo</h1>
          </div>
          <p class="text-[16px] text-gray-500 ">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p class="text-[16px] text-gray-500">All rights reserved.</p>
        </div>
        <div class="flex flex-row items-center justify-between ">
          {footerLinks.map((footerlink) => (
            <div className="flex  w-1/4 flex-col space-y-3 text-lg sm:mx-10 md:w-1/5">
              <h4 className="font-bold">{footerlink.title}</h4>
              {footerlink.links.map((link) => (
                <div>
                  <a
                    href="https://github.com/hudamnhd/landing-page-boldo"
                    className="group flex items-center text-gray-500 hover:text-black"
                  >
                    {link.name}{" "}
                    <span
                      className={` ${
                        !link.info && "hidden"
                      }  ml-2 rounded-full  bg-[#69E6A6] px-2 text-[13px] font-bold text-black group-hover:bg-green-400`}
                    >
                      {link.info}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default CTAFooter;
