import { hero } from "../assets";
import { boldo, presto } from "../assets";
import { Marquee } from "./marquee";
import { Button } from "./ui/button";

const logos = [
  { src: boldo, name: "Boldo" },
  { src: presto, name: "Presto" },
];

const LogoList = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="flex gap-x-2 items-center" key={index}>
          <img
            src={logos[index % logos.length].src}
            className="h-7"
            alt={`logo ${logos[index % logos.length].name}`}
          />
          <p className="text-white font-bold text-2xl xs:text-4xl">
            {logos[index % logos.length].name}
          </p>
        </div>
      ))}
    </>
  );
};

const Hero = () => {
  return (
    <div className="py-5 sm:py-8 md:py-10 bg-[#0A2640] px-5 sm:px-10 md:px-14">
      <div className="grid grid-cols-1 gap-y-6 sm:gap-x-5 xl:grid-cols-5">
        <div className="col-span-2 relative overflow-hidden rounded-lg h-64 xs:h-80 md:h-96  xl:order-last ">
          <img
            src={hero}
            alt="grapichs"
            className="absolute inset-0 h-full w-full  hover:scale-105 duration-300"
          />
        </div>

        <div className="max-w-xl mx-auto sm:mx-0 sm:max-w-full col-span-3 flex flex-col justify-center text-left items-start">
          <div className="text-white container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
            <a
              className="group mb-2 inline-flex items-center gap-2 px-0.5 text-sm font-medium"
              href="#"
            >
              <img src={boldo} className="h-4" />
              <span className="underline-offset-4 group-hover:underline">
                Get Started with Boldo
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1]">
              Save Time By Building
              <span className="sm:block mt-1">Fast With Boldo Template</span>
            </h1>
            <p className="max-w-2xl text-white font-light text-foreground sm:text-lg mt-2">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="flex w-full items-center justify-start gap-2 pt-6">
              <Button size="lg" variant="primary1">Get Started</Button>
              <Button size="lg" variant="link" className="text-white">
                Buy Template
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*<Clients />*/}
      <Marquee
        fade={true}
        direction="left"
        reverse={false}
        pauseOnHover={false}
        className="" // pass class to change gap or speed
        innerClassName="gap-16 mt-4 sm:mt-6 md:mt-10" // pass class to change gap or speed
      >
        <LogoList />
      </Marquee>
    </div>
  );
};

export default Hero;
