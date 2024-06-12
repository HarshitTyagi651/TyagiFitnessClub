import React from "react";
import Card4 from "../../Components/Card4/card";
import "./workoutpage.css";
const WorkoutPage = () => {
  const evalFitness = {
    heading: "evaluate your fitness",
    paragraph:
      "check how healthy and fit you are and get the workout and diet plan based on it",
    btntext: "Evaluate",
    bg: 'blueviolet',
    path: '/fitnessevalpage',
  };
  const workoutPlan = {
    heading: "start your workout",
    paragraph:
      "check how healthy and fit you are and get the workout and diet plan based on it",
    btntext: "start",
    bg: 'orange',
    path: '/workoutlist',
  };
  const dietPlan = {
    heading: "get your diet",
    paragraph:
      "check how healthy and fit you are and get the workout and diet plan based on it",
    btntext: "Get",
    bg: 'orange',
    path: '/dietplan',
  };
  return (
    <div className="workout-page">
      <h1 className="workout-heading">Get Started</h1>
      <div className="workout-container">
        <Card4
          heading={evalFitness.heading}
          para={evalFitness.paragraph}
          btnText={evalFitness.btntext}
          bg={evalFitness.bg}
          path={evalFitness.path}
        />
        <Card4
          heading={workoutPlan.heading}
          para={workoutPlan.paragraph}
          btnText={workoutPlan.btntext}
          bg={workoutPlan.bg}
          path={workoutPlan.path}
        />
        <Card4
          heading={dietPlan.heading}
          para={dietPlan.paragraph}
          btnText={dietPlan.btntext}
          bg={dietPlan.bg}
          path={dietPlan.path}
        />
         <Card4
          heading={evalFitness.heading}
          para={evalFitness.paragraph}
          btnText={evalFitness.btntext}
          bg={evalFitness.bg}
        />
      </div>
      
    </div>
  );
};

export default WorkoutPage;
