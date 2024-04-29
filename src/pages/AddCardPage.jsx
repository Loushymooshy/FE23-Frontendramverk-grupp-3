import CardForm from '../components/CardForm.jsx';
import Card from '../components/Card.jsx';
import '../index.css';

const AddCardPage = () => {
  return (
    <div className="body">
      <div>ADD A NEW BANK CARD</div>
      <Card
        cardNumber="1234 5678 9101 1121"
        cardHolder="FIRSTNAME LASTNAME"
        expiryDate="MM/YY"
      />
      <CardForm></CardForm>
    </div>
  );
};

export default AddCardPage;
