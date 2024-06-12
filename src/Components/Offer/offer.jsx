import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './offer.css';

const Offer = () => {
  const initialTime = 3000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='offer-comp'>
            <div className="offer-left">
                <h1>Big Offer</h1>
                <p className='offer-exclusive'>Exclusive offer for you</p>
                <p className='offer-time'>limited time left: <span>{formatTime(timeLeft)}</span></p>
                <div className="price">
                    <p className='old-price'>$20</p>
                    <p className='new-price'>$11</p>
                </div>
                <Link to='/subscriptions'><button>Join Now</button></Link>
            </div>
            <div className="offer-right">
            </div>
        
    </div>
  )
}

export default Offer;