import React, { useState, useRef } from 'react';
import Countdown, {zeroPad} from 'react-countdown';
import '../stretchesPage.css';

const StretchesPage = ()=> {
  const [time, setTime] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const countdownTimeRef = useRef();
  
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span class="time-number">00:00:00</span>;
    } else {
      return (
        <span class="time-number">
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
      <div className="stretches-page">
        <div className="timer-section">
          <button className="openNavBtn" onClick={()=>{setIsNavOpen(true)}}>Click me</button>
          <div className="timer-container">
            <h3>Timer</h3>
            <div className="timer">
              <Countdown ref={countdownTimeRef} date={Date.now() + (time*60*1000)} autoStart={false} renderer={renderer} />
            </div>
            <div id="start-clear-container">

              <button id="start-button" onClick={()=>setStartTimer(true)}>start</button>
              <input class="input-box" placeholder="time" type="number" min="1" max="200" onChange=  {handleOnTimeChange} value={time}></input>
              <button id="clear-button" onClick={()=>{setTime(0);}}>clear</button>
              
            </div>
          </div>
          <div className="music-selection">
            <img src="src/components/imgs/ambient/rain1.svg"></img>
            <img src="src/components/imgs/ambient/coffee1.svg"></img>
            <img src="src/components/imgs/ambient/forest1.svg"></img>
            <img src="src/components/imgs/ambient/music1.svg"></img>
          </div>
          <div id="spacer">
          </div>
        </div>
  
        <div id="mySidenav" className="sidenav" style={{width: isNavOpen? "750px": "0"}}>
          
          <a href="javascript:void(0)" className="closebtn" onClick={()=>{setIsNavOpen(false)}}
            >&times;</a>

          <div id="sidenav-container">
            
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
              <button> </button>
              <button> </button>
              <button> </button>
              <button> </button>
              <button> </button>
              <button> </button>
              <button> </button>
              <button> </button>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default StretchesPage;