import React, { useEffect, useState } from "react";
import { boldo, presto } from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Clients = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>

        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>

        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>

        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>

        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>

        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>

        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={boldo} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Boldo
              </p>
            </div>
          </span>
        </div>
        <div className="slide">
          <span>
            <div className=" flex items-center">
              <img src={presto} className="h-7" alt="logo" />
              <p className=" text-white font-bold text-2xl xs:text-4xl  ml-1 ">
                Presto
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clients;

const Logo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mainContainer">
      <Slider {...settings}>
        <div className="container">
          <img src={boldo} />
        </div>
        <div className="container">
          <img src={presto} />
        </div>
        <div className="container">
          <img src={boldo} />
        </div>
        <div className="container">
          <img src={presto} />
        </div>

        <div className="container">
          <img src={boldo} />
        </div>
        <div className="container">
          <img src={presto} />
        </div>
      </Slider>
    </div>
  );
};
