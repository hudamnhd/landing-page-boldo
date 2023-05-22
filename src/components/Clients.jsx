import { boldo, presto } from "../assets";

const Clients = () => {
  return (
    <div class="bg-[#0A2640] mt-14 marquee-w">
      <div class="marquee">
        <span>
          <div className=" flex items-center">
            <img src={boldo} className="h-7" alt="logo" />
            <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
              Boldo
            </p>
          </div>
        </span>
      </div>
      <div class="marquee marquee2">
        <span>
          <div className=" flex items-center">
            <img src={presto} className="h-7" alt="logo" />
            <p className="text-white font-bold text-2xl xs:text-4xl ml-1 ">
              Presto
            </p>
          </div>
        </span>
      </div>
      <div class="marquee marquee3">
        <span>
          <div className=" flex items-center">
            <img src={boldo} className="h-7" alt="logo" />
            <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
              Boldo
            </p>
          </div>
        </span>
      </div>
      <div class="marquee marquee4">
        <span>
          <div className=" flex items-center">
            <img src={presto} className="h-7" alt="logo" />
            <p className="text-white font-bold text-2xl xs:text-4xl ml-1 ">
              Presto
            </p>
          </div>
        </span>
      </div>
      <div class="marquee marquee5">
        <span>
          <div className=" flex items-center">
            <img src={boldo} className="h-7" alt="logo" />
            <p className=" text-white font-bold text-4xl  ml-1 ">Boldo</p>
          </div>
        </span>
      </div>
      <div class="marquee marquee6">
        <span>
          <div className=" flex items-center">
            <img src={presto} className="h-7 w-15" alt="logo" />
            <p className="text-white font-bold text-4xl ml-1 ">Presto</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Clients;
