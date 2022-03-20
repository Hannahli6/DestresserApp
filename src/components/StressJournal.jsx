import React, {useState} from 'react';
import '../sJournal.css';

const StressJournal = ()=> {
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
    text : "Today I started my hackathon.",
    date : "2022-3-18"
  }, {
    text : "I had a bad day today.",
    date : "2022-3-17"
  },{
    text : "I got a bad mark in chemistry and I'm sad",
    date : "2022-3-16"
  }]);
  const [selectedDate, setSelectedDate] = useState(todayDateStr);
  const [displayJournalIndex, setDisplayJournalIndex] = useState(null);
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

  return (
    <div className="journal-page">
      <div className="journal-page-content">
        <div className="review">
            {journalEntries.map((journalEntry, index)=>{
            return (
              <div className="review-content">
                {index === displayJournalIndex? 
                <div>
                  <span>{journalEntry.date}</span> 
                  <p>{journalEntry.text}</p> 
                </div>
                : null}
              </div>
            )
          })}
           <button onClick={handleOnDeleteClick}>delete</button>
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
            <div className="journal" contentEditable="true" onChange={handleOnTextChange} value={text}><ul><li /></ul></div>
            <div className="input-date-btn-container">
              <input type="date" onChange={handleOnDateChange}
             value={selectedDate}
             min="2022-3-10" max={todayDateStr} defaultValue={todayDateStr}/>
              <button onClick={handleOnClick}>butttttttonnn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StressJournal;

