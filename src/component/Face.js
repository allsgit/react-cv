import React from 'react';
import ImgProfil from '../assets/images/1615124005271.jpeg';
import GitIcon from '../assets/images/GitHub-Mark-32px.png';
import LinkedinIcon from '../assets/images/icons8-linkedin-50.png';
import { useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import ContactForm from './ContactForm';
import Arrow from '../assets/images/arrowR.png';
import userEvent from '@testing-library/user-event';

function Face(props) {
  const [profilSwitch, setProfilSwitch] = useState('profil');
  const [moreinfo, setMoreInfo] = useState('info-profil');
  const [toogle, setToogle] = useState(false);

  function goToContact() {
   
    
    props.englobantTwo.current.style.animation = "switch-it 1s"
      
      console.log(props.englobantTwo);
       setTimeout(() => {
        props.clicked(true); 
        props.englobantTwo.current.style.animation =  ""
      }, 600, 10);
      
        
  }

  return (
    <>
      <div className="information-candidat">
        <div
          className="more-info"
          onClick={() => {
            if (toogle == false) {
              setToogle(true);
              setProfilSwitch('profil-switch');
              setMoreInfo('info-profil-switch');
            } else {
              setToogle(false);
              setProfilSwitch('profil');
              setMoreInfo('info-profil');
            }
          }}
        >
          {profilSwitch === 'profil-switch' ? "- d'infos" : "+ d'infos"}
        </div>
        <div className="wrapper">
          <div className={moreinfo}>
            <h2>Age : 34 ans</h2>
            <h2>Nationalité : Française</h2>
            <h2>mail : allanseu@gmail.com</h2>
            <h2>Permis B</h2>
          </div>
          <div className={profilSwitch}>
            <img className="kiki" src={ImgProfil}></img>
          </div>
        </div>

        <h1 className="name">Allan Seu</h1>
        <h2 className="work-name">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Developpeur Front End - React.js').start();
            }}
          />
        </h2>
      </div>
      <div className="online-reseau">
        <img src={GitIcon} alt="github"></img>
        <img src={LinkedinIcon} alt="linkedinn"></img>
      </div>
      <div className="contact-bloc">
        <a
          className="contact-me-mail"
          href=""
          onClick={(e) => e.preventDefault() + goToContact()}
        >
          Contactez moi !
        </a>

        <a
          className="contact-me-phone"
          href=""
          onClick={(e) => e.preventDefault()}
        >
          06 23 55 71 96
        </a>
      </div>
    </>
  );
}

export default Face;
