import React, { useState } from 'react';
import Countdown, {zeroPad} from 'react-countdown';

const StretchesPage = ()=> {
  const [time, setTime] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
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
  return (
    <div>
      <input placeholder="time" type="number" min="1" max="200" onChange=  {handleOnTimeChange} value={time}></input> 
      <button onClick={()=>setStartTimer(true)}>start</button>
      <button onClick={()=>{setTime(0);}}>clear</button>
      <Countdown date={Date.now() + (time*60*1000)} autoStart={startTimer} renderer={renderer} />
      
      <div className="stretches-page">
        <div className="timer-section">
          <button className="openNavBtn" onClick={()=>{setIsNavOpen(true)}}>Click me</button>
          <div className="timer-container">
            <h3>Timer</h3>
            <div className="timer"></div>
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
            >&times;</a
          >
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
  )
}

export default StretchesPage;
