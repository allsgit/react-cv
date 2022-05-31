import React from 'react';
import './presentation.scss';
import { useState, useRef } from 'react';
import ContactForm from './ContactForm';
import Face from './Face';


const txtAnim = document.querySelector('.work-name');

function Presentation() {
  const wrapperPresent = useRef()
  const [profilSwitch, setProfilSwitch] = useState('profil');
  const [moreinfo, setMoreInfo] = useState('info-profil');
  const [toogle, setToogle] = useState(false);
  const [isItClicked, setIsItClicked] = useState(false);
  useState('presentation');

  console.log(isItClicked);

  return (
    <div className="presentation" ref={wrapperPresent}>
      
      {isItClicked === true ? (
        
        <ContactForm clickedForm={setIsItClicked} englobant={wrapperPresent}/>
      ) : (
        <Face clicked={setIsItClicked} englobantTwo={wrapperPresent}/>
      )}
    </div>
  );
}

export default Presentation;
