import React, { useState } from "react";

import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [colour, setColor] = useState("rgb(171, 255, 184)");

  const style = {
    backgroundColor: colour,
  };

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      determineBMICategory(bmiValue);
    }
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory("Underweight");
      setColor("rgb(116, 206, 255)");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setCategory("Normal weight");
      setColor("rgb(116, 255, 130)");
    } else if (bmi >= 25 && bmi < 29.9) {
      setCategory("Overweight");
      setColor("rgb(234, 255, 116)");
    } else {
      setCategory("Obesity");
      setColor("rgb(255, 179, 128)");
    }
  };

  return (
    <div className="bmiCal-comp">
      <div className="bmiCal-left">
        <div className="bmi-weight">
          <label>
            Enter your weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div className="bmi-height">
          <label>
            Enter your height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <button onClick={calculateBMI}>Calculate</button>
      </div>

      <div className="bmiCal-right">
        <div className="bmi-result" style={style}>
          <h1 className="bmi-h1">Result:</h1>
          {bmi && (
            <div>
              <h2  className="bmi-result-num">
                Your BMI: <span>{bmi}</span>
              </h2>
              <h3 className="bmi-result-cat">
                Category: <span>{category}</span>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
