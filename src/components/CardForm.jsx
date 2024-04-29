import { useState } from 'react';
import '../styles/CardForm.css';
import Card from './Card';
import Walletbutton from './button.jsx';

const CardForm = () => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    vendor: '',
  });

  const handleClick = () => {
    console.log('knappen klickades');
  };

  const handleInputChange = e => {
    const { id, value } = e.target;
    setCardData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newCard = {
      id: Math.random(),
      namn: cardData.cardHolder,
      nummer: cardData.cardNumber,
      utgångsdatum: cardData.expiryDate,
      cvc: cardData.cvv,
    };

    props.addCard(newCard);
  };

  return (
    <>
      <Card
        cardNumber={cardData.cardNumber}
        cardHolder={cardData.cardHolder}
        expiryDate={cardData.expiryDate}
      />
      <form className="form-container">
        <div>
          <label htmlFor="cardNumber">Kortnummer:</label>
          <input
            className="form-input"
            id="cardNumber"
            type="text"
            onChange={handleInputChange}
            placeholder="1234 5678 9123 4567"
          />
        </div>

        <div>
          <label htmlFor="cardHolder">Kortinnehavare:</label>
          <input
            className="form-input"
            id="cardHolder"
            type="text"
            onChange={handleInputChange}
            placeholder="Namn Efternamn"
          />
        </div>

        <div className="half-width">
          <div className="input-half">
            <label htmlFor="expiryDate">Utgångsdatum:</label>
            <input
              className="form-input"
              id="expiryDate"
              type="text"
              onChange={handleInputChange}
              placeholder="MM/ÅÅ"
            />
          </div>

          <div className="input-half">
            <label htmlFor="cvv">CVV:</label>
            <input
              className="form-input"
              id="cvv"
              type="text"
              onChange={handleInputChange}
              placeholder="123"
            />
          </div>
        </div>
        <div>
          <label htmlFor="vendor">Kortutgivare:</label>
          <select
            className="form-input"
            id="vendor"
            onChange={handleInputChange}
          >
            <option value="" disabled selected></option>
            <option value="bitcoin_inc">Bitcoin Inc</option>
            <option value="ninja_bank">Ninja Bank</option>
            <option value="block_chain_inc">Block Chain Inc</option>
            <option value="evil_corp">Evil Corp</option>
          </select>
        </div>
        <Walletbutton
          type="submit"
          onClick={handleClick}
          text="LÄGG TILL KORT"
          className="button"
          color="secondary"
        />
      </form>
    </>
  );
};

export default CardForm;
