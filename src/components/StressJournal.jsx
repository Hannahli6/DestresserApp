import React from 'react';
import '../sJournal.css';

const StressJournal = ()=> {
  return (
    <div> 
      <div>
        <div className="wrapper">
          <h3 className="date">01.03.2022</h3>
          <h3 className="date">01.03.2022</h3>
          <h3 className="date">01.03.2022</h3>
          <h3 className="date">01.03.2022</h3>
          <h3 className="date">01.03.2022</h3>
          <h3 className="date">01.03.2022</h3>
        </div>
        <div className="review">
        </div>
        <div className="journal" contentEditable="true"><ul><li /></ul></div>
        <div className="circle" />
      </div>
    </div>
  )
}

export default StressJournal;