import '../styles/Card.css';

import main from '../assets/main.png';
import chipLogo from '../assets/chip.png';
import wifiLogo from '../assets/Wifi-logo.png';
import bitcoin from '../assets/bitcoin.png';
import evil from '../assets/evil.png';
import ninja from '../assets/ninja.png';
import blockchain from '../assets/blockchain.png';

let imgUrl;

function Card({ className, cardNumber, cardHolder, expiryDate, vendor, onContextMenu, onClick}) {
  if (className === 'main') {
    imgUrl = main;
  } else if (className === 'bitcoin') {
    imgUrl = bitcoin;
  } else if (className === 'ninja') {
    imgUrl = ninja;
  } else if (className === 'blockchain') {
    imgUrl = blockchain;
  } else if (className === 'evil') {
    imgUrl = evil;
  }

  return (
    <div className={`card-container ${className}`} onContextMenu={onContextMenu} onClick={onClick}>
      <div className="card-top">
        <div className="wifi-and-chip-container">
          <div className="wifi-logo">
            <img src={wifiLogo} alt="Wifi Logo" />
          </div>
          <div className="card-chip-logo">
            <img src={chipLogo} alt="Card Chip Logo" />
          </div>
        </div>
        <div>
          <img
            className={`${className}_image`}
            src={imgUrl}
            alt="selectedOption"
          />
        </div>
      </div>
      <div className="card-number">{cardNumber || 'xxxx xxxx xxxx xxxx'}</div>
      <div className="card-bottom">
        <div className="card-holder-name-text-container">
          <div className="card-holder-name-text">Kortinnehavarens namn</div>
          <div className="card-holder-name">
            {cardHolder || 'Namn Efternamn'}
          </div>
        </div>
        <div className="card-holder-date-text-container">
          <div className="card-holder-date-text">giltlig t.o.m</div>
          <div className="card-expiry">{expiryDate || 'MM/ÅÅ'}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
