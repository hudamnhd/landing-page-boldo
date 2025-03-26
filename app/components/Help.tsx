import { useState } from "react";

const Help = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className={`z-50 fixed bottom-3 left-3 bg-slate-300 opacity-30 rounded-full p-2 hover:opacity-100 ${
          toggle === true && "opacity-80"
        } `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-help-icon lucide-circle-help"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
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
        } sidebar z-20 text-[12px] ss:text-[16px] fixed bottom-12 left-3 bg-slate-100 p-3 ss:p-5 rounded-xl w-fit`}
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

        <p className="font-semibold">Reference design :</p>
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
