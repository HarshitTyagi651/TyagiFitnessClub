import React from 'react';
import './subscription.css';

const Subscription = (props) => {
    const style = {
        backgroundColor: props.bg
    }
    const btnStyle = {
      backgroundColor: props.bgBtn
    }
  return (
    <div className='subs-comp' style={style}>
        <img src={props.img} />
        <h1 className='subs-name'>{props.name}</h1>
        <p className='subs-desc'>{props.desc}</p>
        <label>Features/Facilities</label>
        <p className='sub-features'>{props.features}</p>
        <p className='subs-price'>₹{props.price}/-</p>
        <button style={btnStyle}>Buy</button>
    </div>
  )
}

export default Subscription