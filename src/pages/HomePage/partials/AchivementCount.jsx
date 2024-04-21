import React from "react";
import AchivementCountData from "../../../DummyData/AchivementCountData";

const AchivementCount = ({ theme }) => {
  return (
    <div className="lg:py-14 relative">
      <div className="grid lg:grid-cols-2">
        {AchivementCountData.map((item) => (
          <div className="flex items-center lg:px-0 px-4">
            <h1
              className={`font-medium text-7xl pr-2 font-futura ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {item.countnumber}{" "}
            </h1>
            <div className=" p-4">
              <img src={item.image} className="mb-3" />
              <p className=" font-blackerdisplay font-normal text-lg text-[#AAA] ">
                {" "}
                {item.description}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementCount;
