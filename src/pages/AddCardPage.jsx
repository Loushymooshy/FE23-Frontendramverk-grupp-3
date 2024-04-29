import CardForm from '../components/CardForm.jsx';


const AddCardPage = () => {
  return (
    <div>
    <div>ADD A NEW BANK CARD</div>
    <CardForm></CardForm>
    <Card
        cardNumber="1234 5678 9101 1121"
        cardHolder="FIRSTNAME LASTNAME"
        expiryDate="MM/YY"
      />
    </div>
  )
}

export default AddCardPage