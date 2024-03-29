import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Boldo Template";
    const toggleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div
      className={` ${
        !isVisible && "hidden"
      } fixed bottom-3 right-3 cursor-pointer rounded-full bg-[#0A2640] p-2 opacity-90`}
      onClick={handleScrollTop}
    >
      <FaArrowUp className="text-white" />
    </div>
  );
};

export default ScrollTop;
