import React, { useState } from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "animate.css";
import ProjectAnimate from "./projectAnimate.jsx";
import projectArray from "./projectArray.js";

function Projects() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const projects = ["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"];

  // State to track currently displayed category
  const [currentCategory, setCurrentCategory] = useState("latest");

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div id="projects" className="max-w-7xl mx-auto py-20 px-8 h-full">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projects}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>

      {/* Buttons or links to toggle categories */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => handleCategoryChange("latest")}
          className={`mx-2 py-2 px-4 text-white rounded ${
            currentCategory === "latest"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Latest Projects
        </button>
        <button
          onClick={() => handleCategoryChange("htmlCssJs")}
          className={`mx-2 py-2 px-4 text-white rounded ${
            currentCategory === "htmlCssJs"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          HTML/CSS/JS Projects
        </button>
        <button
          onClick={() => handleCategoryChange("react")}
          className={`mx-2 py-2 px-4 text-white rounded ${
            currentCategory === "react"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          React Projects
        </button>
        <button
          onClick={() => handleCategoryChange("fullStack")}
          className={`mx-2 py-2 px-4 text-white rounded ${
            currentCategory === "fullStack"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Full Stack Projects
        </button>
      </div>

      {/* Display projects based on current category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 py-8 text-white text-opacity-90">
        {projectArray[currentCategory].map((project, index) => (
          <ProjectAnimate
            key={index}
            id={index}
            projectColor={project.projectColor}
            projectUrl={project.projectUrl}
            projectImg={project.projectImg}
            projectTitle={project.projectTitle}
            projectDcrp={project.projectDcrp}
            projectLang={project.projectLang}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
