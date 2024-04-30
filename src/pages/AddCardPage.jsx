import CardForm from '../components/CardForm.jsx';
import '../index.css';
// import Walletbutton from '../components/button.jsx';
import { useState } from 'react';

  const AddCardPage = () => {

    const addCard = newCard => {
      let jsonData = window.localStorage.getItem('cards');
      console.log(jsonData)
      if(jsonData === null){
        jsonData = [newCard]
        window.localStorage.setItem('cards', JSON.stringify(jsonData))
      }
      else{
        const cards = JSON.parse(jsonData)
        cards.push(newCard)
        window.localStorage.setItem('cards', JSON.stringify(cards))
        console.log("Saved cards:", jsonData);
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


