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
  const [journalEntries, setJournalEntries] = useState([]);
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
      <div className="review">
          {journalEntries.map((journalEntry, index)=>{
          return (
            <div>
              {index === displayJournalIndex? 
              <div>
                <span>{journalEntry.text}</span> 
                <span>{journalEntry.date}</span> 
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
          <textarea rows="4" cols="50" onChange={handleOnTextChange} value={text}></textarea>
          <input type="date" onChange={handleOnDateChange}
           value={selectedDate}
           min="2022-3-10" max={todayDateStr} defaultValue={todayDateStr}/>
          <button onClick={handleOnClick}>butttttttonnn</button>
        </div>
      </div>
      
    </div>
  )
}
export default StressJournal;

