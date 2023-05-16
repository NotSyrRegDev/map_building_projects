import React from 'react';
import './Heroarea.css';

const Heroarea = ( {theHeadline} ) => {
  return (
    <div>

    <div className="heroarea_content">

      <h1 className="heroarea_headline">  {theHeadline} </h1>

    </div>

    </div>
  )
}

export default Heroarea