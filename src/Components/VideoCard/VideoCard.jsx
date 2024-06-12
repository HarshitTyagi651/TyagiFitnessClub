import React, { useState } from 'react';
import './VideoCard.css';

const VideoCard = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="video-card-comp">
      <div className="video-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     {
        isHovering? ( <video className="card-video" autoPlay muted loop src={props.videoSrc} />): <div className="img" style={{backgroundImage: `url(${props.img})`}}></div>
     }
    </div>
    <p>{props.title}</p>
    </div>
  );
};

export default VideoCard;
