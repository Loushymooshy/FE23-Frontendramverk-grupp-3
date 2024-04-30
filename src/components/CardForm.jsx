import { useState } from 'react';
import '../styles/CardForm.css';
import Card from './Card';
import Walletbutton from './button.jsx';
import { useNavigate } from 'react-router-dom';

const CardForm = props => {
  const [cardData, setCardData] = useState({
    //Sparar Data från formuläret í variabeln cardData
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    vendor: '',
  });

  const [selectedOption, setSelectedOption] = useState('main');

  const handleInputChange = e => {
    //Känner av när något förändras i formuläret
    const { id, value } = e.target;

    if (id === 'cardNumber') {
      const sanitized = value.replace(/\D/g, ''); // Tar bort allt som inte är siffror
      const trimmed =
        sanitized.length > 16 ? sanitized.slice(0, 16) : sanitized;
      const formatted = trimmed.replace(/(.{4})/g, '$1 ').trim(); // Lägger till mellanslag var fjärde siffra
      setCardData(prevState => ({
        ...prevState,
        [id]: formatted,
      }));
    } else if (id === 'expiryDate') {
      const sanitized = value.replace(/\D/g, ''); // Tar bort allt som inte är siffror
      const trimmed = sanitized.length > 4 ? sanitized.slice(0, 4) : sanitized;
      const formatted =
        trimmed.length > 2
          ? `${trimmed.slice(0, 2)}/${trimmed.slice(2)}`
          : trimmed;
      setCardData(prevState => ({
        ...prevState,
        [id]: formatted,
      }));
    } else {
      setCardData(prevState => ({
        ...prevState,
        [id]: value,
      }));
    }
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
      vendor: cardData.vendor,
    };

    props.addCard(newCard);
    navigate('/');
  };

  const navigate = useNavigate();

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
            maxLength="16"
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
              maxLength="4"
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
              maxLength="3"
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
          text="LÄGG TILL KORT"
          className="button"
          color="secondary"
        />
      </form>
    </>
  );
};

export default CardForm;
