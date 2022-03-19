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
      <div className="home-page">
        <h1 className= "wName">YESHAHAH</h1>
        <div className="home-page-btns">
          <button className="stretchesButton" onClick={handleOnStretchesPageClick}>Stretches</button>
        <button className="journalButton" onClick={handleOnJournalPageClick}>Journal</button>
        </div>
      </div>
    </main>
  );
}

export default Home;