import React, { useState, useRef } from 'react';
import Countdown, {zeroPad} from 'react-countdown';
import '../stretchesPage.css';

const STRETCHES = [
  { name: "High Knee Stretch", img: "/src/components/imgs/stretch-gifs/stretch1.gif"}, 
  { name: "Overhead Stretch", img: "/src/components/imgs/stretch-gifs/stretch2.gif"},
  { name: "Triceps Stretch", img: "/src/components/imgs/stretch-gifs/stretch3.gif"},
  { name: "Head Tilts", img: "/src/components/imgs/stretch-gifs/stretch4.gif"},
  { name: "Lunges", img: "/src/components/imgs/stretch-gifs/stretch5.gif"},
  { name: "Quad Stretch", img: "/src/components/imgs/stretch-gifs/stretch6.gif"},
]

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

const CountdownWrapper = React.memo(({ countdownTimeRef, time }) => {
  return <Countdown ref={countdownTimeRef} date={Date.now()+(time*60*1000)} autoStart={false} renderer={renderer} />
})

const StretchesPage = ()=> {
  const [time, setTime] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [stretchIndex, setStretchIndex] = useState(0)
  const [isCounterRunning, setIsCounterRunning] = useState(false)
  const countdownTimeRef = useRef();
  const currentStretch = STRETCHES[stretchIndex]
  

  const handleOnTimeChange = (e)=>{
    setTime(e.target.value)
  }
  const handleOnStartTime = ()=>{
    if (isCounterRunning) {
      setIsCounterRunning(false)
      countdownTimeRef.current.api.pause();
    } else {
      setIsCounterRunning(true)
      countdownTimeRef.current.api.start();
    }

  }
  return (
    <div>
      <div className="stretches-page">
        <div className="timer-section">
          <button className="openNavBtn" onClick={()=>{setIsNavOpen(true)}}>Click me</button>
          <div className="timer-container">
            <h3>Timer</h3>
            <div className="timer">
              <CountdownWrapper countdownTimeRef={countdownTimeRef} time={time}/>
            </div>
            <div id="start-clear-container">

              <button id="start-button" onClick={handleOnStartTime}>{isCounterRunning ? 'pause' : 'start'}</button>
              <input class="input-box" placeholder="time" type="number" min="1" max="200" onChange={handleOnTimeChange} value={time}></input>
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
          
          <a href="#" className="closebtn" onClick={()=>{setIsNavOpen(false)}}
            >&times;</a>

          <div id="sidenav-container">
            
            <div className="main-stretch">
              <div className="main-stretch-circle"><img src={currentStretch.img} width="100%"/></div>
              <h3>{currentStretch.name}</h3>
            </div>
            
            <div className="stretch-buttons">
              {STRETCHES.map(({ name, img }, index) => 
                <button onClick={() => setStretchIndex(index)}><img src={img} width="100%"/></button>)}
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default StretchesPage;