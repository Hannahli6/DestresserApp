import React, { useState } from 'react';

// import Home from "./Home.jsx";
import StressJournal from "./StressJournal.jsx";
import StretchesPage from "./StretchesPage.jsx";

function App() {
  const [showHomePage, setHomePage] = useState(true);
  const [showJournalPage, setShowJournalPage] = useState(false);
  const [showStretchesPage, setShowStretchesPage] = useState(true);
  
 console.log(showJournalPage)
  
  return (
    <main>
      <div>
        {showJournalPage? <StressJournal /> : null}
        {showStretchesPage? <StretchesPage /> : null}
      </div>
    </main>
  );
}

export default App;