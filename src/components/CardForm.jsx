import { useState } from 'react';
import '../styles/CardForm.css';
import Card from './Card';
import Walletbutton from './button.jsx';
import { useNavigate } from 'react-router-dom';

const CardForm = () => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    vendor: '',
  });

  const [selectedOption, setSelectedOption] = useState('main');

  const handleInputChange = e => {
    const { id, value } = e.target;
    setCardData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelectChange = e => {
    setSelectedOption(e.target.value);
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Card
        className={selectedOption}
        cardNumber={cardData.cardNumber}
        cardHolder={cardData.cardHolder}
        expiryDate={cardData.expiryDate}
      />
      <form className="form-container" onSubmit={handleSubmit}>
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
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="main" disabled selected></option>
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="ninja">Ninja Bank</option>
            <option value="blockchain">Block Chain Inc</option>
            <option value="evil">Evil Corp</option>
          </select>
        </div>
        <Walletbutton
          type="submit"
          onClick={handleClick}
          text="ADD CARD"
          className="button"
          color="secondary"
        />
      </form>
    </>
  );
};

export default CardForm;
