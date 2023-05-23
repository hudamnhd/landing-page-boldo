import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const Help = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className={`fixed bottom-3 left-3 bg-slate-300 opacity-30 rounded-full p-2 hover:opacity-100 ${
          toggle === true && "opacity-80"
        } `}
      >
        <FaQuestion className="text-black" />
      </button>
      <div
        className={`text-4xl animated-element ${
          toggle ? "fade-out" : "fade-in hidden"
        }`}
      >
        Hudasa
      </div>
      <div
        className={` ${
          toggle === false && "hidden"
        } sidebar text-[12px] ss:text-[16px] fixed bottom-12 left-3 bg-slate-100 p-3 ss:p-5 rounded-xl w-fit`}
      >
        <p className="font-semibold">Github repo :</p>
        <a
          href="https://github.com/hudamnhd/landing-page-boldo"
          target="_blank"
          rel="noreferrer"
          className="opacity-70 hover:opacity-100  "
        >
          https://github.com/hudamnhd/landing-page-boldo
        </a>

        <p className="font-semibold">Design :</p>
        <a
          href="https://www.figma.com/community/file/1081611224529759785"
          target="_blank"
          rel="noreferrer"
          className="opacity-70 hover:opacity-100"
        >
          https://www.figma.com/community/file/1081611224529759785
        </a>
      </div>
    </div>
  );
};

export default Help;
