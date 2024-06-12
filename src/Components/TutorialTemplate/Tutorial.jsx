import React, { useContext } from "react";
import { productContext } from "../../Context/productContext";
import VideoCard from "../VideoCard/VideoCard";
import "./Tutorial.css";

const Tutorial = (props) => {
  const { workouts } = useContext(productContext);

  const filteredWorkouts = workouts.filter(
    (workout) => workout.category === props.category
  );

  return (
    <div className="tutorial-comp">
      <h1>{props.category}</h1>
      <div className="tutorial-comp-cont">
      {filteredWorkouts.map((workout) => (
        workout.excercises.map((exercise) => (
          <VideoCard key={`${workout.id}-${exercise.id}`} videoSrc={exercise.videoSrc} title={exercise.title} img={exercise.img}/>
        ))
      ))}
      </div>
    </div>
  );
};

export default Tutorial;
