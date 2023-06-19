import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { feedback } from "../constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ItemCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div>
        <button
          className="shadow-md shadow-slate-500 absolute -right-6 top-1/2 transform -translate-y-1/2 hover:bg-[#1C3D5B] hover:text-white border-2 border-white bg-slate-50 text-[#1C3D5B]   rounded-full text-xl p-4"
          onClick={next}
        >
          <FaArrowRight />
        </button>
        <button
          className="shadow-sm shadow-slate-500 absolute -left-6 top-1/2 transform -translate-y-1/2 hover:bg-[#1C3D5B] hover:text-white border-2 border-white bg-slate-50 text-[#1C3D5B] rounded-full p-4 text-xl"
          onClick={previous}
        >
          <FaArrowLeft />
        </button>
      </div>
    );
  };

  return (
    <div className="relative">
      <Carousel
        infinite
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        renderButtonGroupOutside={true}
      >
        {feedback.map((feed) => (
          <div
            key={feed.name}
            className="flex flex-col justify-between space-y-10 rounded-xl bg-white p-8 m-3 h-80 duration-300 hover:scale-105 bg-slate-100"
          >
            <p className="text-2xl">"{feed.content}"</p>
            <div className="flex items-center space-x-5">
              <img src={feed.img} alt="" />
              <div className="space-y-2">
                <h4 className="text-[16px] font-bold">{feed.name}</h4>
                <p className="text-[14px]">{feed.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ItemCarousel;
