import React, { useState } from 'react';

// import './App.css';
import Home from "./Home.jsx";
import StressJournal from "./StressJournal.jsx";
import StretchesPage from "./StretchesPage.jsx";

function App() {
  const [showHomePage, setHomePage] = useState(true);
  const [showJournalPage, setShowJournalPage] = useState(false);
  const [showStretchesPage, setShowStretchesPage] = useState(false);
  
 console.log(showJournalPage)
  
  return (
    <main>
      <div>
        {showHomePage? 
        <Home 
          setShowJournalPage= {setShowJournalPage} 
          setShowStretchesPage={setShowStretchesPage}
          setHomePage = {setHomePage}
          /> : null}
        {showJournalPage? <StressJournal /> : null}
        {showStretchesPage? <StretchesPage /> : null}
      </div>
    </main>
  );
}

export default App;