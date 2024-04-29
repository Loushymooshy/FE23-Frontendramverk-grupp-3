import Card from '../components/Card';
import Walletbutton from '../components/button.jsx';
import CardStack from '../components/CardStack.jsx';

const handleClick = () => {
  console.log('knappen klickades');
};

const HomePage = () => {
  return (
    <div className="container">
      <div className="header">E-WALLET</div>
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
