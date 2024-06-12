import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/Images/facebook.png';
import instagram from '../../Assets/Images/instagram.png';
import logo from '../../Assets/Images/logo.jpg';
import twitter from '../../Assets/Images/twitter.png';
import whatsapp from '../../Assets/Images/whatsapp.png';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero-comp'>
        <div className="hero-container">
            <img src={logo} className='logo'/>
            <h1>Tyagi Fitness Club</h1>
            <p>Gym jaao </p>
            <ul className='hero-social'>
              <a href='https://www.instagram.com/_.harxit?igsh=MWYzNDF6emJqcGZwaw=='><li><img src={instagram} /></li></a>
              <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><li><img src={whatsapp} /></li></a>
              <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><li><img src={facebook} /></li></a>
              <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><li><img src={twitter} /></li></a>
            </ul>
            <Link to="/subscriptions"><button className='btn-subscription'>Get Subscription</button></Link>
            <div className="hero-end"></div>
        </div>
    </div>
  )
}

export default Hero