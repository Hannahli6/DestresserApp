import React, { useState } from 'react';
import '../App.css';
import StressJournal from "./StressJournal.jsx";
import StretchesPage from "./StretchesPage.jsx";

function Home({setShowJournalPage, setShowStretchesPage, setHomePage}) {
   const handleOnJournalPageClick = () => {
    setShowJournalPage(true);
    setShowStretchesPage(false);
    setHomePage(false);
  }
  const handleOnStretchesPageClick = () => {
    setShowStretchesPage(true);
    setShowJournalPage(false);
    setHomePage(false);
  }

  return (
    <main>
      <div>
        <button onClick={handleOnStretchesPageClick}>Stretches</button>
        <button onClick={handleOnJournalPageClick}>Journal</button>
      </div>
    </main>
  );
}

export default Home;