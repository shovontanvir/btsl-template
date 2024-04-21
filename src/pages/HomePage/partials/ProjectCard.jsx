import React from "react";

const ProjectCard = ({ image, heading, theme }) => {
  return (
    <div className="group">
      <div className="text-center p-2 ">
        <div className="relative overflow-hidden ">
          <img
            src={image}
            className="w-96 duration-500 group-hover:bg-blue-300 group-hover:scale-150 transition-all"
          />
          <div className="absolute inset-0 py-44 pr-32 group-hover:bottom-0">
            <div
              className={` ${
                theme === "dark" ? "bg-[#0E0E0E]/90" : "bg-white/90"
              } flex items-center justify-center  opacity-0 group-hover:opacity-100 duration-500 py-10 w-full h-full`}
            >
              <h1
                className={`font-prata text-2xl font-normal ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
