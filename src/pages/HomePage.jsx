import React from 'react';
import Card from '../components/Card';
import Walletbutton from '../components/button.jsx';
import CardStack from '../components/CardStack.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); //definerar navigate
  //navigate('/addcard');

  const jsonCards = window.localStorage.getItem('cards'); //Hämtar korten som sparats i local storage
  const cards = jsonCards === null ? [] : JSON.parse(jsonCards); //Omvandlar jsonData som hämtats i local storage till ett Javascript-objekt

  console.log('Loaded cards:', cards);

  const handleClick = () => {
    navigate('/addcard');
  };

  return (
    <div className="container">
      <div className="header">E-PLÅNBOK</div>
      <div>
        <Card className={'main'}></Card>
      </div>

      {cards.map(card => (
        <Card
          key={card.id}
          cardNumber={card.nummer}
          cardHolder={card.namn}
          expiryDate={card.utgångsdatum}
          cvc={card.cvc}
          vendor={card.vendor}
        />
      ))}
      <div>
        <Walletbutton
          onClick={handleClick}
          text="LÄGG TILL NYTT KORT"
          className="button"
          color="primary"
        ></Walletbutton>
      </div>
    </div>
  );
};
export default HomePage;
