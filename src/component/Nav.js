import React from 'react';
import MenuIconPortFolio from '../assets/images/icon-menu.png';
import MenuIconResume from '../assets/images/icons8-cv-50.png';
import MenuIconFavorite from '../assets/images/kisspng-computer-icons-favicon-scalable-vector-graphics-favorites-love-plus-icon-png-5ab0d3940bdab7.8737000215215379400486.png';
import './presentation.scss';
import { useState, useLocation } from 'react';
import Portfolio from './Portfolio';
import Parcours from './Parcours';
import Skill from "../assets/images/skill-icon-6.jpeg"

function Nav(props) {
  function addFavorite() {
    var url = window.location.href;
    try {
      window.external.addFavorite(url, 'Lionsure');
    } catch (e) {
      try {
        window.sidebar.addPanel('Lionsure', url, '');
      } catch (e) {
        alert('Failed to add to favorites, please press Ctrl + D to add!');
      }
    }
  }
  function activateMenuContain () {
    props.classcomponant('info-card');
    props.cardVisibility(true); 
  }


const menuIconClass= "menu"

  return (
    <nav>
      <ul>

{/* PORTFOLIO MENU */}
        <li class={menuIconClass}>
          <img
            src={MenuIconPortFolio}
            className="portfolio"
            alt=""
            onClick={(e) => {
              props.setMenuContain(<Portfolio />);
              activateMenuContain()
            }}
          />
          Portfolio
        </li>
{/* PARCOURS MENU */}
        <li class={menuIconClass}>
          <img
            src={MenuIconResume}
            className="portfolio"
            alt=""
            onClick={() => {
              props.setMenuContain(<Parcours />);
              activateMenuContain ()
            }}
          />
          Parcours
        </li>
{/* ADD TO FAVORITE MENU */}

        <li class={menuIconClass}>
          <img
            src={MenuIconFavorite}
            className="portfolio"
            alt=""
            onClick={() => {
              addFavorite();
            }}
          />
          Add to Favorite
        </li>
        <li class={menuIconClass}>
          <img
            src={Skill}
            className="portfolio"
            alt=""
            onClick={() => {
              props.setToogleContent(true)
              props.setMenuContain(<Portfolio />)
            }}
          />
          Compétence
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
