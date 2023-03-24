import React from "react";
import p from "../assets/images1.png";

const Main = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="">
        <h1 className="text-2xl md:text-5xl sm:text-4xl font-bold text-purple-800 text-left">
          The <span className="text-green-600">Daily</span> MS <br />{" "}
          <span className="to-green-600">Excel</span> Quiz
        </h1>
      </div>
      <div>
        <img src={p} alt="robot" className="w-36 md:w-64 sm:w-48"/>
      </div>
    </div>
  );
};

export default Main;
