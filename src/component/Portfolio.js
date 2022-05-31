import React, { useState } from 'react';
import reservia from '../assets/images/reservia.png';
import JSicon from '../assets/images/icons8-javascript-64.png';
import HTMLicon from '../assets/images/icons8-html-60.png';
import CSSicon from '../assets/images/icons8-css-64.png';
import REACTicon from '../assets/images/icons8-react-native-50.png';
import JSONicon from '../assets/images/icons8-json-50.png';
import MYcv from '../assets/images/moncv.png';
import LesPP from '../assets/images/lespetitplat.png';
import { useRef } from 'react';
import './presentation.scss';

function Portfolio() {
  function mouseActionIn(e) {
    e.target.parentNode.parentNode.querySelector('.icon-line').style.animation =
      'iconanim 1s';
  }
  function mouseActionOut(e) {
    e.target.parentNode.parentNode.querySelector('.icon-line').style.animation =
      'none';
  }
  function clickAnim (e) {

  }

  let tagArray = [];

  function add(e) {
    if (tagArray.includes(e.target.innerText)) {
    } else {
      tagArray.push(e.target.innerText);
      console.log(tagArray);
    }
  }
  return (
    <div className="portfolio-wrap" tag="test">
 {/*      <div className="tag-wrap">
        <h3>Filtre de projets: </h3>
        <div className="tag"></div>
        <div className="tag" onClick={(e) => add(e)}>
          JAVASCRIPT
        </div>
        <div className="tag" onClick={(e) => add(e)}>
          CSS
        </div>
        <div className="tag" onClick={(e) => add(e)}>
          HTML
        </div>
        <div className="tag" onClick={(e) => add(e)}>
          REACT-NATIVE
        </div>
      </div> */}

      <div className="portfolio-card" tag="ok">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
          onClick={(e) =>{
clickAnim(e)
          }}
        >
          <img src={MYcv}></img>
          <p className="thumb-title">MON CV</p>
        </div>
        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
            <img src={JSicon} alt="" />
            <img src={REACTicon} alt="" />
          </div>

          <h3>MON CV</h3>
          <br></br>
          <p>
            est un site de location type Air BnB : intégration
            <span className="important-word">CSS HTML</span> de la maquette
            figma. Utilisation de
            <span className="important-word">
              REACT JS, DES HOOK, DES ROUTES, PROPS, ET STATE
            </span>
            pour naviguer sur les profil des loueurs
            <span className="important-word"></span>
          </p>
        </div>
      </div>
      <div className="portfolio-card">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
        >
          <img src={reservia}></img>
        </div>
        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
            <img src={JSicon} alt="" />
            <img src={JSONicon} alt="" />
            <img src={REACTicon} alt="" />
          </div>

          <h3>KASA</h3>
          <br></br>
          <p>
            est un site de location type Air BnB : intégration
            <span className="important-word">CSS HTML</span> de la maquette
            figma. Utilisation de
            <span className="important-word">
              REACT JS, DES HOOK, DES ROUTES, PROPS, ET STATE
            </span>
            pour naviguer sur les profil des loueurs
            <span className="important-word"></span>
          </p>
        </div>
      </div>
      <div className="portfolio-card">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
        >
          <img src={reservia}></img>
        </div>
        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
            <img src={JSicon} alt="" />
            <img src={JSONicon} alt="" />
          </div>

          <h3>FISH EYES</h3>
          <br></br>
          <p>
            est un site de photographe freelance - intégration
            <span className="important-word">CSS HTML</span> de la maquette
            figma,
            <span className="important-word">FETCH d'un JSON</span> ,
            utulisation
            <span className="important-word">JAVASCRIPT des MAP et FILTER</span>
            afin de gérer l'affichage des photographe.
            <span className="important-word">
              Création d'un formulaire de contact.
            </span>
          </p>
        </div>
      </div>
      <div className="portfolio-card">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
        >
          <img src={LesPP}></img>
          <p className="thumb-title">LES PETITS PLATS</p>
        </div>
        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
            <img src={JSicon} alt="" />
            <img src={JSONicon} alt="" />
          </div>

          <h3>LES PETITS PLATS</h3>
          <br></br>
          <p>
            FISH EYES est un site de recettes - le travail effectué :
            intégration <span className="important-word">CSS HTML</span> de la
            maquette figma,
            <span className="important-word">FETCH d'un JSON</span> ,
            <span className="important-word">
              création d'un algoritme de recherche JAVASCRIPT
            </span>
            filtre recette par TAG
            <span className="important-word"></span>
          </p>
        </div>
      </div>
      <div className="portfolio-card">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
        >
          <img src={reservia}></img>
        </div>

        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
          </div>

          <h3>RESERVIA</h3>
          <br></br>
          <p>
            Reservia est un site de reservation type air B&B <br></br>Le projet
            demandé est une
            <span className="important-word">intégration CSS et HTML </span>
            d'une maquette Figma avec prise en charge du
            <span className="important-word">responsive mobile et desktop</span>
          </p>
        </div>
      </div>
      <div className="portfolio-card">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
        >
          <img src={reservia}></img>
        </div>
        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
          </div>
          <h3>HO MY FOOD !</h3>
          <br></br>
          <p>
            Ho My FOOD est un site de commande de repas en ligne - le travail
            effectué est une
            <span className="important-word">intégration HTML - CSS</span> de la
            maquette figma et La gestion des
            <span className="important-word">animation CSS Keyframe.</span>
          </p>
        </div>
      </div>
      <div className="portfolio-card">
        <div
          className="thumb"
          onMouseEnter={(e) => {
            mouseActionIn(e);
          }}
          onMouseLeave={(e) => {
            mouseActionOut(e);
          }}
        >
          <img src={reservia}></img>
        </div>
        <div className="project-descript" tag="html, css, intégration">
          <div className="icon-line">
            <img src={HTMLicon} alt="" />
            <img src={CSSicon} alt="" />
            <img src={JSicon} alt="" />
          </div>
          <h3>GAMEON</h3>
          <br></br>
          <p>
            GAMEON est une
            <span className="important-word">Landing page JAVASCRIPT</span> avec
            implémentation des conditions sur les champ de saisies et validation
            formulaire
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
