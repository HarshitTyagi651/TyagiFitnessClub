import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = (props) => {
  const [hover, setHover] = useState(false);
  const bgColor = {
    backgroundColor: props.bg,
  }
  const btnBg = {
    backgroundColor: hover? props.bg : 'white',
  }
  return (
    <div className='card4-comp' style={bgColor}>
        <h1 className='card4-heading'>{props.heading}</h1>
        <p>{props.para}</p>
        <Link className="card4-link" to={props.path}><button style={btnBg} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{props.btnText}</button></Link>
    </div>
  )
}

export default Card; 