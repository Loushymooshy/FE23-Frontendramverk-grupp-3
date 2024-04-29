import React from "react";
import "../styles/CardForm.css";

const CardForm = () => {
    return (
    <form className="form-container">
        <div>
            <label htmlFor="cardNumber">Kortnummer:</label>
            <input className="form-input" id="cardNumber" type="text" placeholder="1234 5678 9123 4567" />
        </div>

        <div>
            <label htmlFor="cardHolder">Kortinnehavare:</label>
            <input className="form-input" id="cardHolder" type="text" placeholder="Namn Efternamn" />
        </div>

    <div className="half-width">
        <div className="input-half">
            <label htmlFor="expiryDate">Utgångsdatum:</label>
            <input className="form-input" id="expiryDate" type="text" placeholder="MM/ÅÅ" />
        </div>

        <div className="input-half">
            <label htmlFor="cvv">CVV:</label>
            <input className="form-input" id="cvv" type="text" placeholder="123" />
        </div>
     </div>
        <div>
        <label htmlFor="vendor">Kortutgivare:</label>
        <select className="form-input" id="vendor">
            <option value="" disabled selected></option>
            <option value="bitcoin_inc">Bitcoin Inc</option>
            <option value="ninja_bank">Ninja Bank</option>
            <option value="block_chain_inc">Block Chain Inc</option>
            <option value="evil_corp">Evil Corp</option>
        </select>
        </div>
    </form>
    );
};

export default CardForm;