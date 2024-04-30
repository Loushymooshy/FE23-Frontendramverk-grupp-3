import CardForm from '../components/CardForm.jsx';
import '../index.css';
// import Walletbutton from '../components/button.jsx';
import { useState } from 'react';

const AddCardPage = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      namn: 'Kort 1',
      nummer: '1234 5678 9101 1121',
      utgångsdatum: '12/24',
      cvc: '123',
    },
    {
      id: 2,
      namn: 'Kort 2',
      nummer: '2345 6789 1011 1213',
      utgångsdatum: '11/25',
      cvc: '234',
    },
    {
      id: 3,
      namn: 'Kort 3',
      nummer: '3456 7890 1121 1314',
      utgångsdatum: '10/26',
      cvc: '345',
    },
  ]);

  const addCard = newCard => {
    let jsonData = window.localStorage.getItem('cards');
    console.log(jsonData);
    
  };

  // const handleClick = () => {
  //   console.log('knappen klickades');
  // };
  return (
    <div className="container">
      <div className="header">
        LÄGG TILL ETT<br></br>NYTT BANKKORT
      </div>
      {/* <Card
        cardNumber="1234 5678 9101 1121"
        cardHolder="FIRSTNAME LASTNAME"
        expiryDate="MM/YY"
      /> */}
      <CardForm addCard={addCard} />
      <div>
        {/* <Walletbutton
          onClick={handleClick}
          text="LÄGG TILL KORT"
          className="button1" */}
        {/* /> */}
        {/* <Walletbutton
          onClick={handleClick}
          text="LÄGG TILL KORT"
          className="button2"
        /> */}
      </div>
    </div>
  );
};

export default AddCardPage;
