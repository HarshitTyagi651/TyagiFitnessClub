import React, { useContext } from "react";
import workoutbasedworkout from "../../Assets/TypesOfWorkout/BasedOnCategory/data";
import Card5 from "../../Components/Card5/card";
import { productContext } from "../../Context/productContext";
import "./WorkoutList.css";

const WorkoutList = () => {
  const { personbasedworkout } = useContext(productContext);
  return (
    <div className="workoutlist-page">
      <div className="workoutlist-cont">
        <p>Based on Human Category</p>
        <div className="workouts">
          {personbasedworkout.map((item, i) => {
            return <Card5 img={item.image} text={item.name} path={item.path}/>;
          })}
        </div>
        <div className="divider"></div>
        <p>Based on different Workout types</p>
        <div className="workouts">
          {workoutbasedworkout.map((item, i) => {
            return <Card5 img={item.image} text={item.name} path={item.path}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
