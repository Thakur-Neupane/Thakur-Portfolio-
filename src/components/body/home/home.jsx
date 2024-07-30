import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import TypeAnimation from "../../animation/TypeAnimation";
import ProfilePictureUpDown from "./ProfilePictureUpDown";
import "./home.css";
import "../body.css";
import "animate.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const nameArray = [
    " ",
    "T",
    "h",
    "a",
    "k",
    "u",
    "r",
    "",
    "N",
    "e",
    "u",
    "p",
    "a",
    "n",
    "e",
  ];
  const HiArray = ["H", "i", "👋", ","];
  const IM = ["I", "'", "m"];
  const JobArr = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    "",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  return (
    <div
      id="home"
      className="relative mt-[14vh] max-w-7xl h-full mx-auto flex justify-between max-md:justify-center gap-3 items-center my-5 py-20 max-md:pb-0 px-8 max-md:gap-8 max-md:flex-wrap"
    >
      <div className="p-6 max-sm:p-3 flex flex-col items-start gap-4">
        <h1 className="font-extrabold text-5xl max-lg:text-4xl max-sm:text-4xl mb-3 leading-snug text-white opacity-90 relative">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={HiArray}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={IM}
            idx={8}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={11}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <br />
          <span className="text-yellow-400">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={JobArr}
              idx={17}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </span>
        </h1>
        <h1 className="text-8xl">
          {" "}
          <TypeAnimation />
        </h1>
        <div className="flex gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/thakurneupane111/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin
              className="text-blue-500 opacity-90 hover:text-white hover:bg-blue-500 rounded-full p-2 duration-300"
              size={80}
            />
          </a>
          <a
            href="https://github.com/Thakur-Neupane"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub
              className="text-blue-500 opacity-90 hover:text-white hover:bg-blue-500 rounded-full p-2 duration-300"
              size={80}
            />
          </a>
          <a
            href="mailto:thakur.neupane.neupane@gmail.com"
            className="icon-link"
          >
            <FaEnvelope
              className="text-blue-500 opacity-90 hover:text-white hover:bg-blue-500 rounded-full p-2 duration-300"
              size={80}
            />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1gPfUEOq5nFQ3ov4AWcocnN0hpwauGLIg/view?usp=sharing"
          className="btn-home border border-blue-500 px-3 py-2 rounded-sm text-blue-500 opacity-90
            hover:bg-blue-500 hover:text-white duration-300 active:scale-90 mt-4"
        >
          Resume
        </a>
      </div>
      <ProfilePictureUpDown />
    </div>
  );
}

export default Home;
