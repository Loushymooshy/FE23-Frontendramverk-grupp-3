import CardForm from '../components/CardForm.jsx';
import '../index.css';
// import Walletbutton from '../components/button.jsx';
import { useState } from 'react';

const AddCardPage = () => {
  const MAX_CARDS = 5; // Maximalt antal kort som användaren får lägga till

  const addCard = newCard => {
    let jsonData = window.localStorage.getItem('cards');
    let cards = jsonData ? JSON.parse(jsonData) : [];

    if (cards.length >= MAX_CARDS) {
      alert(`Du kan inte lägga till fler än ${MAX_CARDS} kort.`);
      return; // Stoppar funktionen om max antal kort är nått
    }

    // Fortsätt med att lägga till kortet om det inte överstiger maxgränsen
    if (jsonData === null) {
      jsonData = [newCard];
      window.localStorage.setItem('cards', JSON.stringify(jsonData));
    } else {
      cards.push(newCard);
      window.localStorage.setItem('cards', JSON.stringify(cards));
      console.log("Saved cards:", cards);
    }
  };

  // const handleClick = () => {
  //   console.log('knappen klickades');
  // };
  return (
    <div className="container">
      <div className="header">
        LÄGG TILL ETT<br></br>NYTT BANKKORT
      </div>
      <CardForm addCard={addCard} />

    </div>
  );}
;

export default AddCardPage;


