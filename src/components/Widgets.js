import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className = "widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("A 'two-pizza rule' for work", "1d ago • 278,956 readers" )}
      {newsArticle("Does a five-hour workday ... work?", "1d ago • 6,170 readers" )}
      {newsArticle("What it takes to be your own boss", "3d ago • 3,944 readers" )}
      {newsArticle("Retiring at 50: Millennials say yes", "3d ago • 25,880 readers" )}
      {newsArticle("Space tourism on the horizon", "15h ago • 14,184 readers" )}
    </div>
  )
}

export default Widgets
