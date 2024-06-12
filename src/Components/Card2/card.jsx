import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card2-comp'>
        <div className="card2-container">
            <img src={props.img} />
            <div className="content">
                <p className='description'>{props.name}</p>
                <p className='price'>${props.price}</p>
                <div className="btns">
                <button>Buy</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;