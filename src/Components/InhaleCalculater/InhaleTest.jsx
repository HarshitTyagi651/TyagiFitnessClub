import React, { useEffect, useRef, useState } from 'react';
import './InhaleTest.css';

const InhaleTest = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [progressBarColor, setProgressBarColor] = useState('red');
  const [condition, setCondition] = useState('');

  const countRef = useRef(null);

  useEffect(() => {
    if (!isActive && time >= 70000) {
      setIsStop(false);
      setIsActive(true);
    }
  }, [isActive, time]);

  useEffect(() => {
    // Determine progress bar color and breath-holding condition
    const updateProgress = () => {
      const progressBarWidth = (time / 70000) * 100;
      let color, conditionText;

      if (time < 30000) {
        color = 'red';
        conditionText = 'Bad';
      } else if (time < 60000) {
        color = '#c8b100';
        conditionText = 'Normal';
      } else {
        color = 'green';
        conditionText = 'Good';
      }

      setProgressBarColor(color);
      setCondition(conditionText);
    };

    updateProgress();
  }, [time]);

  const handleStart = () => {
    setIsActive(true);
    setIsStop(true);
    countRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= 70000) {
          clearInterval(countRef.current);
          setIsActive(false);
          setIsStop(false);
          return prevTime;
        }
        return prevTime + 10;
      });
    }, 10);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsStop(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsStop(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor(time / 1000) % 71}`.slice(-2);
    return `${getSeconds} : ${getMilliseconds}`;
  };

  return (
    <div className="inhale-stopwatch">
      <p className='inhale-heading'>Let's see how long can you hold your breath</p>
      <p className='inhale-para-setps'>Steps</p>
      <ol className='inhale-steps'>
        <li>Sit or stand comfortably, in a relaxed state.</li>
        <li>Take a deep breath in, filling your lungs completely.</li>
        <li>Start a timer as soon as you finish inhaling.</li>
        <li>Hold your breath for as long as you can comfortably do so.</li>
        <li>Stop the timer as soon as you exhale.</li>
      </ol>
      <div className="inhale-time">
        {formatTime(time)}
      </div>
      <div className="inhale-progress-container">
        <div
          className="inhale-progress-bar"
          style={{
            width: `${(time / 70000) * 100}%`,
            backgroundColor: progressBarColor,
          }}
        ></div>
      </div>
      <div className="inhale-buttons">
        {
          !isActive && !isStop ?
            <button onClick={handleStart} className='inhale-button' style={{backgroundColor: 'green'}}>Start</button>
            : (
              isStop ? <button onClick={handleStop} className='inhale-button' style={{backgroundColor: 'red'}}>Stop</button> :
              <button onClick={handleReset} className='inhale-button'style={{backgroundColor: 'blue'}}>Reset</button>
            )
        }
      </div>
      <div className="inhale-condition">
        {isActive && condition && <p style={{color: `${progressBarColor}`}}>{condition}</p>}
      </div>
    </div>
  );
}

export default InhaleTest;
