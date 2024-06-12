import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({paragraph, btn, bgImage, path, btnStyle}) => {

  const cardStyle = {
    backgroundImage: `url(${bgImage})`
  }
  const BtnStyle = {
    cursor: btnStyle
  }

  return (
    <div className='card-comp' style={cardStyle}>
      <div className="card-container" >
        <p>{paragraph}</p>
        <Link to={path} className='link'>
          <button className='checkout' style={BtnStyle}>{btn}</button>
        </Link>
      </div>
    </div>
  )
}

export default Card