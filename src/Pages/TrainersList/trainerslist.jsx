import React, { useContext } from 'react';
import Card3 from "../../Components/Card3/card";
import { productContext } from "../../Context/productContext";
import './trainerslist.css';

const Trainerslist = () => {
  const { trainers } = useContext(productContext);
  return (
    <div className="trainers-page">
      <div className="trainers-container">
        <p className='trainers-heading'>Here are the trainers you can explore and take guidance</p>
        <div className="trainers">
          {trainers.map((item, i) => {
            if(item.isAvailable)
            return (
              <Card3 img={item.image} name={item.name} fee={item.fee} desc={item.description} likes={item.likes} exp={item.exp}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trainerslist;