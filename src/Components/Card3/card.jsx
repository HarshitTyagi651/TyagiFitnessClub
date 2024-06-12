import React from "react";
import heart from '../../Assets/Images/heart.png';
import "./card.css";

const Card = (props) => {
  return (
    <div className="card3-comp">
      <div className="card3-left">
          <img src={props.img} />
      </div>
      <div className="card3-right">
        <h1>{props.name}</h1>
        <label className="desc-label">Description:</label>
        <p className="trainer-desc">{props.desc}</p>
        <label>Experience:<span className="trainer-exp">{props.exp}+ years</span></label>
        <label>Fee: <span className="trainer-fee">₹{props.fee}/month</span></label>
        <label className="items-center">Likes: <span className="trainer-likes"><img src={heart} />{props.likes}</span></label>
        <button className="trainer-more">VIEW MORE</button>
      </div>
    </div>
  );
};

export default Card;
