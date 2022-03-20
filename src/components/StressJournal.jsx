import React, {useState} from 'react';
import '../sJournal.css';

const StressJournal = ({setHomePage, setShowStretchesPage, setShowJournalPage})=> {
  const dateObj = new Date();
  let month = dateObj.getMonth() + 1;
  (month<10? month = `0` + month : null)
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const todayDate = year + "-" + month + "-" + day;
  const todayDateStr = `${year}-${month}-${day}`;
  
  const [text, setText] = useState("");
  const [journalEntry, setJournalEntry] = useState({});
  const [journalEntries, setJournalEntries] = useState([{
    text : "Today I started my hackathon. I was really excited for the events. But later in the day when I went outside for a walk, somebody judged my appearance and pointed out that I looked 'too big'. I became moody for the rest of the day.  ",
    date : "2022-3-18"
  }, {
    text : "I had a bad day today. I was bullied by one of my closest friends. I can't believe she did that. I was very stressed",
    date : "2022-3-17"
  },{
    text : "I got a bad mark in chemistry today and my parents scolded me. They told me I am a failure even when I studied 5 hours everyday. ",
    date : "2022-3-16"
  }]);
  const [selectedDate, setSelectedDate] = useState(todayDateStr);
  const [displayJournalIndex, setDisplayJournalIndex] = useState(0);
  const [warningText, setWarningText] = useState(false);

  const handleOnTextChange = (e)=>{
    setText(e.target.value);
  }
  const handleOnClick = ()=>{
    if(text!="" && selectedDate){
      setWarningText(false);
      setJournalEntries([...journalEntries,{text : text,
      date : selectedDate}]);
      setText("");
    }else{
      setWarningText(true)
    }

  }
  const handleOnDateChange = (e)=>{
    setSelectedDate(e.target.value);
  }
  const handleOnDeleteClick = () =>{
    const newJournalEntries  = journalEntries.filter((value, index)=> displayJournalIndex!=index)
    setJournalEntries(newJournalEntries);
  }

  const handleOnHomePageClick = () => {
    setHomePage(true);
    setShowStretchesPage(false);
    setShowJournalPage(false);
  }

  return (
    <div className="journal-page">
      <h1>My Journal</h1>
      <div className="journal-page-content">
        <img id="home-button" onClick={handleOnHomePageClick} src="/src/components/imgs/home-icon.svg"></img>      
        <div className="review">
            {journalEntries.map((journalEntry, index)=>{
            return (
              <div className="review-content">
                {index === displayJournalIndex? 
                <>
                  <span>{journalEntry.date}</span> 
                  <span>{journalEntry.text}</span> 
                </>
                : null}
              </div>
            )
          })}
          <button onClick={handleOnDeleteClick}>🔥</button>
        </div>
        <div className="left-journal-section">
          <div className="journal-entries-container">
            {journalEntries.map((journalEntry, index)=>{
            return (
              <button key={index} id={index} onClick={()=>setDisplayJournalIndex(index)}>{journalEntry.date}</button>
            )
            })}
          </div>
          <div className="input-container">
            <textarea className="journal" onChange={handleOnTextChange} value={text} placeholder="Write a bit about your day or something you're stressed about!">
            </textarea>
            <div className="input-date-btn-container">
              <input type="date" id="checkId" onChange={handleOnDateChange}
            value={selectedDate}
            min="2022-3-10" max={todayDateStr} defaultValue={todayDateStr}/>
              <button onClick={handleOnClick}>Finish Entry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default StressJournal;

