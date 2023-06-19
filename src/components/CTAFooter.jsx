import { boldo02 } from "../assets";
import { footerLinks } from "../constants";

const CTAFooter = () => {
  return (
    <section id="about">
      <div className="bg-custom-background container mx-auto rounded-lg bg-[#0A2640]">
        <div className="mx-auto space-y-4 px-5 py-10 md:w-2/3 md:space-y-8 md:py-16">
          <h1 className="text-center text-[28px] leading-[38px] text-white sm:leading-[72px] md:text-[48px] ">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex flex-col justify-center space-x-0 space-y-2 md:flex-row md:space-x-3 md:space-y-0 ">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Your email addres"
              className="rounded-full px-6 py-2 text-center text-lg focus:outline-none sm:text-left"
            />
            <button className="rounded-full bg-[#65E4A3] px-8 py-2 font-semibold  hover:bg-[#4CCB8A] ">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <footer className="container mx-auto mb-1 mt-10 flex flex-col space-y-5 px-5 pb-5 sm:mt-20 sm:justify-between sm:px-10 md:flex-row md:space-x-12 md:space-y-0">
        <div className="space-y-4 md:w-[60%]">
          <div className="flex items-center space-x-2">
            <img src={boldo02} alt="Logo" className="h-7" />
            <h1 className="text-4xl font-bold">Boldo</h1>
          </div>
          <p className="text-[16px] text-gray-500 ">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="text-[16px] text-gray-500">All rights reserved.</p>
        </div>
        <div className="flex flex-row items-center justify-between ">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex  w-1/4 flex-col space-y-3 text-lg sm:mx-10 md:w-1/5"
            >
              <h4 className="font-bold">{footerlink.title}</h4>
              {footerlink.links.map((link) => (
                <div key={link.name}>
                  <a
                    href="https://github.com/hudamnhd/landing-page-boldo"
                    className="group flex items-center text-gray-500 hover:text-black duration-300"
                  >
                    {link.name}{" "}
                    <span
                      className={` ${
                        !link.info && "hidden"
                      }  ml-2 rounded-full  bg-[#65E4A3] px-2 text-[13px] font-semibold text-black group-hover:bg-green-400`}
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
