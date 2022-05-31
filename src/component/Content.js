import React from 'react';
import Presentation from './Presentation';
import Information from './Information';
import Nav from './Nav';
import './content.scss';
import { useState } from 'react';

function Content(props) {
  const [information, SetInformation] = useState(' ');
  const [cardVisib, SetCardVisib] = useState(false);
  const [classcomp, setClassComp] = useState(' ');
  const [isItClicked, setIsItClicked] = useState(false);

  return (
    <div className="content-div">
      {/*  NAVIGATION MENU */}
      <Nav
        setMenuContain={SetInformation}
        cardVisibility={SetCardVisib}
        classcomponant={setClassComp}
        setToogleContent={props.toogleContainToRadar}
      />

      <Presentation />
      {/* HERE IS THE MENU CONTAIN BOX THAT SLIDE AND SHOWED */}
      {cardVisib === true  ?  (
        <Information
          content={information}
          cardVisibility={SetCardVisib}
          isCloseButtonClicked={setIsItClicked}
        />
      ) : (
         (console.log("pb"))
      )}
    </div>
  );
}

export default Content;
