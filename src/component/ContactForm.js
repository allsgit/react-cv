import React from 'react';
import { useRef } from 'react';

function ContactForm(props) {
  const modalRef = useRef();
  const closeRef = useRef();
  console.log(modalRef);
  function goToContact() {
    props.englobant.current.style.animation = 'switch-it 1s';
    closeRef.current.style.transform = 'scale(1.3)';
    closeRef.current.style.animation = 'close-button-anim 0.5s';

    console.log(props.englobant);
    setTimeout(() => {
      props.clickedForm(false);
      props.englobant.current.style.animation = '';
      closeRef.current.style.backgroundColor = ' ';
    }, 600);
  }
  return (
    <>
      <div id="contact-form" ref={modalRef}>
        <h2>Nom</h2>
        <input class="name" type="text" />
        <h2>Prenom</h2>
        <input class="surname" type="text" />
        <h2>Mail</h2>
        <input class="mail" type="text" />
        <h2>Votre message</h2>
        <input class="message" type="text" />

        <button class="send">Envoyer</button>

       
        <button class="close-button-form" ref={closeRef} onClick={() => +goToContact()}>
          <span class="inner">
            <span class="label">Fermer</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default ContactForm;
