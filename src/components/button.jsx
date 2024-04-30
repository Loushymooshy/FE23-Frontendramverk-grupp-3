import '../styles/button.css';

function Walletbutton(props) {
  return (
    <button onClick={props.onClick} className={`button ${props.color}`}>
      {props.text}
    </button>
  );
}

export default Walletbutton;

