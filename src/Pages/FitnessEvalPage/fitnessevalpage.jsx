import React from "react";
import bmi from "../../Assets/Images/bmi.jpg";
import yoga from "../../Assets/Images/yoga1.jpg";
import BmiCalculator from "../../Components/BMICalculator/BmiCalculator";
import InhaleTest from "../../Components/InhaleCalculater/InhaleTest";
import "./fitnessevalpage.css";

const FitnessEvalPage = () => {
  return (
    <div className="fitnesseval-page">
      <h1 className="fitnesseval-heading">
        How fit you are? Follow the given steps to check and evaluate your
        fitness
      </h1>
      <section className="fitness-def">
        <div className="def-left">
          <h1 className="fitness-h1">What is fitness or healthy body ?</h1>
          <p className="fitness-p">
            Fitness or a healthy body refers to the state of physical well-being
            achieved through regular exercise, balanced nutrition, adequate
            rest, and the absence of disease. It encompasses cardiovascular
            endurance, muscular strength, flexibility, and a healthy body
            composition.
          </p>
        </div>
        <div className="def-right">
          <img src={yoga} />
        </div>
      </section>

      <div className="fitness-divider"></div>

      <section className="eval-tests">
        <h1 className="fitness-h1">here are some tests you can do to check your health</h1>

        {/* BMI */}
        <div className="bmi-test">
          {/* DEFINATION  */}
          <div className="bmi-content">
            <div className="bmi-left">
              <h2 className="fitness-h2">What is BMI ?</h2>
              <p className="fitness-p">
                Body Mass Index (BMI) is a numerical value derived from an
                individual's weight and height, used to assess whether they are
                underweight, normal weight, overweight, or obese. The formula
                for BMI is weight in kilograms divided by the square of height
                in meters (kg/m²). It provides a simple, widely-used method for
                categorizing weight status and identifying potential health
                risks associated with being underweight or overweight. While BMI
                is a useful screening tool, it has limitations as it does not
                account for muscle mass, bone density, or fat distribution.
                Therefore, it should be considered alongside other measurements
                and clinical assessments for a more comprehensive evaluation of
                an individual's health.
              </p>
            </div>
            <div className="bmi-right">
              <img src={bmi} />
            </div>
          </div>

          {/* TEST  */}

          <div className="bmi-calculator">
            <h2 className="fitness-h2">Calculate your BMI </h2>
            <BmiCalculator />
          </div>
        </div>

        {/* Inhale Hold */}

        <div className="inhalehold-test">
          <InhaleTest />
        </div>
      </section>
    </div>
  );
};

export default FitnessEvalPage;
