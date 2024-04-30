import Card from '../components/Card';
import Walletbutton from '../components/button.jsx';
import CardStack from '../components/CardStack.jsx';
import { useNavigate } from 'react-router-dom';
import ContextMenu from '../components/ContextMenu.jsx';
import React, { useState, useEffect } from 'react';
import '../index.css';

const HomePage = () => {
  const jsonCards = window.localStorage.getItem('cards'); //Hämtar korten som sparats i local storage
  const cards = jsonCards === null ? [] : JSON.parse(jsonCards); //Omvandlar jsonData som hämtats i local storage till ett Javascript-objekt

  const jsonActiveCard = window.localStorage.getItem('activeCard');
  const activeCardInitial = jsonActiveCard ? JSON.parse(jsonActiveCard) : null;
  const [activeCard, setActiveCard] = useState(activeCardInitial);

  const handleCardClick = (cardId) => {
    const clickedCard = cards.find(card => card.id === cardId);
    const newCards = cards.filter(card => card.id !== cardId);
    if (activeCard) {
      newCards.push(activeCard); // Lägger till det tidigare aktiva kortet i korthögen
    }
    setActiveCard(clickedCard);
    window.localStorage.setItem('cards', JSON.stringify(newCards)); // Uppdaterar local storage
    window.localStorage.setItem('activeCard', JSON.stringify(clickedCard));
  };
  

  const navigate = useNavigate(); //definerar navigate
  //navigate('/addcard');


  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (e, cardId) => {
    e.preventDefault();
    console.log('Right-click detected on card ID:', cardId);
    console.log('Event page coordinates:', e.pageX, e.pageY);
    setContextMenu({
      x: e.pageX,
      y: e.pageY,
      cardId: cardId,
    });
    console.log('menu has been created');
  };

  const handleDeleteCard = () => {
    if (contextMenu) {
      const updatedCards = cards.filter(card => card.id !== contextMenu.cardId);
      window.localStorage.setItem('cards', JSON.stringify(updatedCards));
      setContextMenu(null); // Stäng menyn efter borttagning
    }
  };

  const handleCloseMenu = () => {
    setContextMenu(null);
  };

  // Lägg till en lyssnare för att stänga menyn när användaren klickar någon annanstans
  useEffect(() => {
    document.addEventListener('click', handleCloseMenu);
    return () => {
      document.removeEventListener('click', handleCloseMenu);
    };
  }, []);

  const handleClick = () => {
    navigate('/addcard');
  };

  return (
    <div className="container">
      <div className="header">E-PLÅNBOK</div>
      {activeCard && <Card 
                className={activeCard.id}
                cardNumber={activeCard.nummer}
                cardHolder={activeCard.namn}
                expiryDate={activeCard.utgångsdatum}
                cvc={activeCard.cvc}
                vendor={activeCard.vendor}
                onContextMenu={e => handleContextMenu(e, activeCard.id)}/>}

      {cards.filter(card => card.id !== activeCard?.id).map(card => (
        <Card
          key={card.id}
          className={card.id}
          cardNumber={card.nummer}
          cardHolder={card.namn}
          expiryDate={card.utgångsdatum}
          cvc={card.cvc}
          vendor={card.vendor}
          onContextMenu={e => handleContextMenu(e, card.id)}
          onClick={() => handleCardClick(card.id)}
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
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onDelete={handleDeleteCard}
        />
      )}
    </div>
  );
};
export default HomePage;
