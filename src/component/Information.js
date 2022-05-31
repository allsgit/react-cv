import React from 'react';
import './presentation.scss';
import { useState } from 'react';


function Information(props) {
  const [cardV, setCardV] = useState('info-card');
  return (


    <div className={cardV}>
{/* CLOSE CONTENT (include portfolio and parcours) */}
      <button
        className="close-card"
        onClick={() => {
          
          setCardV('info-card-hide');
          setTimeout(() => {
            props.cardVisibility(false);
         
            
          }, 700);
        }}
      >
        X
      </button>
      {props.content}
    </div>
  );
}

export default Information;
