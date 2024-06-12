import React from "react";
import { Link } from "react-router-dom";
import "./DietList.css";

const DietList = () => {
  return (
    <div className="diet-plan-page">
      <p>Which diet you prefer</p>
      <div className="diet-plan-cont">
        <Link to='/vegdiet'>
          <div className="veg-diet">
            <p>Veg Diet</p>
          </div>
        </Link>
        <Link to='/nonvegdiet'>
          <div className="nonveg-diet">
            <p>Non-Veg Diet</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DietList;
