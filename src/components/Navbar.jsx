import React from "react";
import { FaSistrix, FaArrowLeft } from "react-icons/fa";
import people from '../assets/people01.png'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <FaArrowLeft size={17} />
      </div>
      <div className="flex items-center gap-8"> 
        <FaSistrix size={21}/>
        <img src={people} alt="people"className="w-10 " />
      </div>
    </div>
  );
};

export default Navbar;
