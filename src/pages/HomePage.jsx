import React from 'react';
import Card from '../components/Card';
import Walletbutton from '../components/button.jsx';
import CardStack from '../components/CardStack.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  navigate('/addcard');

  const handleClick = () => {
    navigate();
  };

  return (
    <div className="container">
      <div className="header">E-PLÅNBOK</div>
      <div>
        <Card></Card>
      </div>

      {/* <Card
        cardNumber="1234 5678 9101 1121"
        cardHolder="FIRSTNAME LASTNAME"
        expiryDate="MM/YY"
      /> */}
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
