import React from 'react';
import bulking from '../../Assets/Images/bulking.jpg';
import leanmuscles from '../../Assets/Images/leanmusles.jpg';
import weightloss from '../../Assets/Images/weightloss.jpg';
import Card5 from "../../Components/Card5/card";
import './DietPurpose.css';


const DietPurpose = (props) => {
    const vegDietFor = [
        {
            id: 1,
            name: 'Bulking',
            image: bulking,
        },
        {
            id: 1,
            name: 'Weight Loss',
            image: weightloss,
        },
        {
            id: 1,
            name: 'Lean Muscles',
            image: leanmuscles,
        },
    ]
  return (
    <div className='vegdiet-page'>
        <div className="vegdiet-cont">
        <p>What's your goal ? in {props.category}</p>
        <div className="diet-purpose">
          {vegDietFor.map((item, i) => {
            return <Card5 img={item.image} text={item.name} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default DietPurpose