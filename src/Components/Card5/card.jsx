import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = (props) => {
    const style = {
        backgroundImage: `url(${props.img})`,
    }
  return (
    <Link to={props.path}><div className='card5-comp'>
    <div className="card5-img" style={style}></div>
    <p>{props.text}</p>
</div></Link>
  )
}

export default Card