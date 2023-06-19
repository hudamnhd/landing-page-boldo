import { boldo, presto } from "../assets";

const Clients = () => {
  return (
    <div className="bg-[#0A2640] mt-14 marquee-w">
      <div className="marquee">
        <span>
          <div className=" flex items-center">
            <img src={boldo} className="h-7" alt="logo" />
            <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
              Boldo
            </p>
          </div>
        </span>
      </div>
      <div className="marquee marquee2">
        <span>
          <div className=" flex items-center">
            <img src={presto} className="h-7" alt="logo" />
            <p className="text-white font-bold text-2xl xs:text-4xl ml-1 ">
              Presto
            </p>
          </div>
        </span>
      </div>
      <div className="marquee marquee3">
        <span>
          <div className=" flex items-center">
            <img src={boldo} className="h-7" alt="logo" />
            <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
              Boldo
            </p>
          </div>
        </span>
      </div>
      <div className="marquee marquee4">
        <span>
          <div className=" flex items-center">
            <img src={presto} className="h-7" alt="logo" />
            <p className="text-white font-bold text-2xl xs:text-4xl ml-1 ">
              Presto
            </p>
          </div>
        </span>
      </div>
      <div className="marquee marquee5">
        <span>
          <div className=" flex items-center">
            <img src={boldo} className="h-7" alt="logo" />
            <p className=" text-white font-bold text-4xl ml-1">Boldo</p>
          </div>
        </span>
      </div>
      <div className="marquee marquee6">
        <span>
          <div className=" flex items-center">
            <img src={presto} className="h-7 w-15" alt="logo" />
            <p className="text-white font-bold text-4xl ml-1">Presto</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Clients;
