import React from 'react';
import facebook from '../../Assets/Images/facebook.png';
import instagram from '../../Assets/Images/instagram.png';
import twitter from '../../Assets/Images/twitter.png';
import whatsapp from '../../Assets/Images/whatsapp.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-comp'>
    <div className="footer-container">
        <div className="footer-logo">
            <p>Tyagi Fitness Club</p>
        </div>
        <p className='footer-location'>Locations: Gamma-1 near Sanjeevni Hospital</p>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className='footer-social'>
              <a href='https://www.instagram.com/_.harxit?igsh=MWYzNDF6emJqcGZwaw=='><li><img src={instagram} /></li></a>
              <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><li><img src={whatsapp} /></li></a>
              <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><li><img src={facebook} /></li></a>
              <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><li><img src={twitter} /></li></a>
            </ul>
        <p className='footer-copyright'>Copyright @ 2024 - All Rights Reserved.</p>
    </div>
</div>
  )
}

export default Footer;