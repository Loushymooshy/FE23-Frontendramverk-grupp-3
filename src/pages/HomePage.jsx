
import Card from '../components/Card';
import Walletbutton from '../components/button.jsx';
import CardStack from '../components/CardStack.jsx';
import { useNavigate } from 'react-router-dom';
import ContextMenu from '../components/ContextMenu.jsx'
import React, { useState, useEffect  } from 'react';

const HomePage = () => {
  const navigate = useNavigate(); //definerar navigate
  //navigate('/addcard');

  const jsonCards = window.localStorage.getItem('cards'); //Hämtar korten som sparats i local storage
  const cards = jsonCards === null ? [] : JSON.parse(jsonCards); //Omvandlar jsonData som hämtats i local storage till ett Javascript-objekt

  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (e, cardId) => {
    e.preventDefault();
    console.log('Right-click detected on card ID:', cardId);
     console.log('Event page coordinates:', e.pageX, e.pageY);
    setContextMenu({
      x: e.pageX,
      y: e.pageY,
      cardId: cardId
    });
    console.log("menu has been created")
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
          onContextMenu={(e) => handleContextMenu(e, card.id)}
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
