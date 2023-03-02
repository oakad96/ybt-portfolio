import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

export function Greeting({ aboutImg }) {
  return (
    <div className="Layout min-h-[100vh] w-full flex flex-col justify-start items-center snap-start">
      <div
        className="Greeting relative w-full flex-grow bg-light px-12 space-x-36 flex flex-row justify-center items-center"
        id="Greeting"
      >
        <div className="ImageBox">
          <img
            src={aboutImg}
            alt="ProfilePicture"
            className=" filter grayscale bg-medium shadow-xl bg-opacity-80 border-4 border-solid border-light h-[400px] w-[400px] max-w-none object-cover object-top rounded-full"
          />
        </div>
        <div className="TextBox text-dark text-lg bg-opacity-60 py-10 px-4 tracking-wide flex flex-col">
          <h2 className=" text-7xl font-bold mb-3">
            Hello! I am <br />{" "}
            <span className="text-6xl">Yücel Baran Tuncer</span>
          </h2>
          <h2 className=" text-2xl font-bold my-5 p-1 pr-5 rounded-lg text-light bg-dark shadow-md">
            Innovative, diligent, and tech-savvy Mining Engineer
          </h2>
          <button
            className="bg-dark text-light flex flex-row p-4 rounded-full mt-10 mr-8 self-end shadow-md active:scale-95 hover-darken hover:bg-gray-300 hover:-translate-y-0.5 transition"
            onClick={() => {
              document
                .getElementById("About")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About me{" "}
            <RxDoubleArrowDown className=" animate-bounce ml-3 mt-1 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
