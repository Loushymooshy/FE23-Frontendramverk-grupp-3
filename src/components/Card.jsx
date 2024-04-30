import '../styles/Card.css';

import bitcoinLogo from '../assets/Bitcoin-logo.jpg';
import chipLogo from '../assets/chip.png';
import wifiLogo from '../assets/Wifi-logo.png';


// vi kommenterar in utkommenterade rader senare när logg bytet fungerar.


function Card({ className, cardNumber, cardHolder, expiryDate, vendor }) {
  //const { color, logo } = vendorStyles[vendor] || {color: "defaultColor", logo: chipLogo};

  return (
    <div className={`card-container ${className}`} //style={{ backgroundColor: color }}
    >
      <div className="card-top">
        <div className="wifi-and-chip-container">
          <div className="wifi-logo">
            <img src={wifiLogo} alt="Wifi Logo" />
          </div>
          <div className="card-chip-logo">
            <img src={chipLogo} alt="Card Chip Logo" />
          </div>
        </div>
        <div className="card-logo">
          <img src={bitcoinLogo} alt="Bitcoin Logo" />
        </div>
      </div>
      <div className="card-number">{cardNumber || 'xxxx xxxx xxxx xxxx'}</div>
      <div className="card-bottom">
        <div className="card-holder-name">{cardHolder || 'Namn Efternamn'}</div>
        <div className="card-expiry">{expiryDate || 'MM/ÅÅ'}</div>
      </div>
    </div>
  );
}

export default Card;
