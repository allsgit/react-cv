import React from 'react';
import { useState } from 'react';
import Gend from '../assets/images/Gendarmerie_nationale_logo.svg.png';
import SevenRMat from '../assets/images/265027817_1346734952455713_472836402613626373_n.jpeg';
import Ugc from '../assets/images/1600px-UGC_2018.png';
import Ca from '../assets/images/5a1d2c6a4ac6b00ff574e276.png';
import Artiverre from '../assets/images/artiverre-vitrier-vitrerie-miroiterie.png';
import { useRef } from 'react';

function Parcours() {
  const circleA = useRef();
  const circleB = useRef();
  const circleC = useRef();
  const circleD = useRef();
  const circleFirst = useRef();
  const test = useRef();
  const yearRef = useRef();
  const yearRefTwo = useRef();

  const [progress, setProgress] = useState(0);
  const [circleCheck, setCircleCheck] = useState('');
  const [testYear, setTestYear] = useState('22');
  const [testYearTwo, setTestYearTwo] = useState('22');
  const [jobTiltle, setJobTiltle] = useState('Gestionnaire RH');
  const [imageSwitch, setImageSwitch] = useState(SevenRMat);
  const [XpTitle, setXpTitle] = useState(
    `7eme Régiment de materiel - 2022 à aujourd'hui`
  );

  const [XpDetail, setXpDetail] = useState(
    <ul>
      <li>- Gestion quotidienne des agents via le SIRH KELIO</li>
      <li>- Gestion des éléments variables de paie </li>
      <li>- Publication des offres d’emploi </li>
      <li>- Saisie des arrêts maladies/accidents du travail </li>
      <li>- Tâches RH diverses liées à la carrière des agents</li>
    </ul>
  );

  const circleArray = document.querySelectorAll('.circle');
  
  function yearSwitchAnim(e) {
    yearRef.current.style.animation = 'mynewmove 1s ';
    yearRefTwo.current.style.animation = 'year-top-anim 1.4s ';

    document.querySelector('.image-mock').style.animation =
      'mynewmove-logo 0.7s ';
    document.querySelector('.experience-detail').style.animation =
      'mynewmove-detail 0.7s ';
    document.querySelector('.experience-explain').style.animation =
      'mynewmove-title 1.2s ';
   

 

    setTimeout(() => {
      document.querySelector('.year').style.animation = '';
      document.querySelector('.image-mock').style.animation = '';
      document.querySelector('.experience-detail').style.animation = '';
      document.querySelector('.experience-explain').style.animation = '';
      yearRefTwo.current.style.animation = '';
    }, 1000);

    /////////////
    ////////////
    //
    setTimeout(() => {
      if (e.target.className == 'circle-checked') {
        setTestYear('22');
        setImageSwitch(SevenRMat);
        setXpTitle('7eme Régiment de matériel');
        setJobTiltle('Gestionnaire RH CIVIL');
        setXpDetail(
          <ul>
            <li>- Gestion quotidienne des agents via le SIRH KELIO</li>
            <li>- Gestion des éléments variables de paie </li>
            <li>- Publication des offres d’emploi </li>
            <li>- Saisie des arrêts maladies/accidents du travail </li>
            <li>- Tâches RH diverses liées à la carrière des agents</li>
          </ul>
        );
      } else if (e.target.className == 'Acircle') {
        setTestYear('18');
        setTestYearTwo('22');
        setImageSwitch(Gend);
        setXpTitle('Etat Major de Gendarmerie ARA');
        setJobTiltle('Gestionnaire RH CIVIL');
        setXpDetail(
          <ul>
            <li>- Alimentation du SIRH DIALOGUE</li>
            <li>- Gestion du temps de travail des agents via SIRH SAP </li>
            <li>- Saisie des arrêts maladies/accidents du travail </li>
            <li>- Formation de nouveaux agents au SIRH </li>
            <li>- Taches de RH diverses liées à la carrière des agents</li>
          </ul>
        );
      } else if (e.target.className == 'Bcircle') {
        setTestYear('17');
        setTestYearTwo('18');
        setImageSwitch(Ca);
        setXpTitle('Crédit Agricole - Chèque');
        setJobTiltle('Opérateur de traitement');
        setXpDetail(
          <ul>
            <li>- Alimentation du SIRH DIALOGUE</li>
            <li>- Gestion du temps de travail des agents via SIRH SAP </li>
            <li>- Saisie des arrêts maladies/accidents du travail </li>
            <li>- Formation de nouveaux agents au SIRH </li>
            <li>- Taches de RH diverses liées à la carrière des agents</li>
          </ul>
        );
      } else if (e.target.className == 'Ccircle') {
        setTestYear('13');
        setTestYearTwo('17');
        setImageSwitch(Ugc);
        setXpTitle('UGC Ciné Cité');
        setJobTiltle('Agent de cinéma polyvalent');
        setXpDetail(
          <ul>
            <li>- Alimentation du SIRH DIALOGUE</li>
            <li>- Gestion du temps de travail des agents via SIRH SAP </li>
            <li>- Saisie des arrêts maladies/accidents du travail </li>
            <li>- Formation de nouveaux agents au SIRH </li>
            <li>- Taches de RH diverses liées à la carrière des agents</li>
          </ul>
        );
      } else if (e.target.className == 'Dcircle') {
        setTestYear('13');
        setTestYearTwo('13');
        setImageSwitch(Artiverre);
        setXpTitle('Vitrerie Artiverre');
        setJobTiltle('Assistant commercial');
        setXpDetail(
          <ul>
            <li>- Alimentation du SIRH DIALOGUE</li>
            <li>- Gestion du temps de travail des agents via SIRH SAP </li>
            <li>- Saisie des arrêts maladies/accidents du travail </li>
            <li>- Formation de nouveaux agents au SIRH </li>
            <li>- Taches de RH diverses liées à la carrière des agents</li>
          </ul>
        );
      }

    }, 200);
   

   
  }
  function circleCheckFunc (e) {
    if (XpTitle = "Crédit Agricole - Chèque") {
circleB.current.style.backgroundColor = "salmon"
    }
  }

  return (
    <div className="wrapper-item-parcours">
      <div
        className="year-from-to"
        ref={yearRefTwo}
      >{`de 20${testYear} à 20${testYearTwo}`}</div>
      <div className="top-explain">
        <div className="experience-explain">
          <h1>{XpTitle}</h1>
          <h2>{jobTiltle}</h2>
          <p className="experience-detail" ref={test}>
            {XpDetail}
          </p>
        </div>
        <div className="logo-box">
          {' '}
          <img src={imageSwitch} className="image-mock"></img>
        </div>
      </div>

      <div className="parcours-wrap">
        <span className="line"></span>
        <span
          className="line-progress"
          style={{ width: `${progress}%` }}
        ></span>

        <span
          ref={circleFirst}
          className="circle-checked"
          onClick={(e) =>
            setProgress(0) + setTestYear('22') + yearSwitchAnim(e) + circleCheckFunc()
          }
        ></span>
        <span
          className={`Acircle${circleCheck}`}
          ref={circleA}
          onClick={(e) => setProgress(17) + yearSwitchAnim(e) + circleCheckFunc()}
        ></span>
        <span
          ref={circleB}
          className={`Bcircle${circleCheck}`}
          onClick={(e) => setProgress(30) + yearSwitchAnim(e) + circleCheckFunc()}
        ></span>
        <span
          ref={circleC}
          className={`Ccircle${circleCheck}`}
          onClick={(e) =>
            setProgress(45) + yearSwitchAnim(e) + circleCheckFunc()
          }
        ></span>
        <span
          ref={circleD}
          className={`Dcircle${circleCheck}`}
          onClick={(e) => setProgress('57') + yearSwitchAnim(e)}
        ></span>
        <p className="twenty-year">20</p>
        <div className="year-container">
          {' '}
          <p className="year" ref={yearRef}>
            {testYear}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Parcours;
