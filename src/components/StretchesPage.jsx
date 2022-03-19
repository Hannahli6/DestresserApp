import React, { useState, useRef } from 'react';
import Countdown, {zeroPad} from 'react-countdown';
import '../stretchesPage.css';

const StretchesPage = ()=> {
  const [time, setTime] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const countdownTimeRef = useRef();
  
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>00:00:00</span>;
    } else {
      return (
        <span>
           {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  const handleOnTimeChange = (e)=>{
    setTime(e.target.value)
  }
  const handleOnStartTime = ()=>{
    countdownTimeRef.current.api.start();
  }
  return (
    <div>
      <input placeholder="time" type="number" min="1" max="200" onChange=  {handleOnTimeChange} value={time}></input> 
      <button onClick={handleOnStartTime}>start</button>
      <button onClick={()=>{setTime(0);}}>clear</button>

      
      <div className="stretches-page">
        <div className="timer-section">
          <button className="openNavBtn" onClick={()=>{setIsNavOpen(true)}}>Click me</button>
          <div className="timer-container">
            <h3>Timer</h3>
            <div className="timer">
              <Countdown ref={countdownTimeRef} date={Date.now() + (time*60*1000)} autoStart={false} renderer={renderer} />
            </div>
          </div>
          <div className="music-selection">
            <button>rain</button>
            <button>cafe</button>
            <button>forest</button>
            <button>cafe</button>
          </div>
        </div>
  
        <div id="mySidenav" className="sidenav" style={{width: isNavOpen? "550px": "0"}}>
          
          <a href="javascript:void(0)" className="closebtn" onClick={()=>{setIsNavOpen(false)}}
            >&times;</a>

          <div id="sidebar-container">
            <div>
              <div className="main-stretch">
              <div className="main-stretch-circle"></div>
              <h3>neck stretches</h3>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </div>
            
            <div className="stretch-buttons">
              <button className="stretch-button">1</button>
              <button className="stretch-button">1</button>
              <button className="stretch-button">1</button>
              <button className="stretch-button">1</button>
              <button className="stretch-button">1</button>
              <button className="stretch-button">1</button>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default StretchesPage;
