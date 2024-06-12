import React, { useContext } from "react";
import Tutorial from "../../Components/TutorialTemplate/Tutorial";
import { productContext } from "../../Context/productContext";
import "./WorkoutTutorial.css";

const WorkoutTutorial = (props) => {
  const {workouts} = useContext(productContext)
  return (
    <div className="workout-tutorial-page">
     {workouts.map((item, i) => {
            if (props.category == item.category) {
              return (
                <Tutorial
                  key={i}
                  category={item.category}
                />
              );
            }
          })}
    </div>
  );
};

export default WorkoutTutorial;
