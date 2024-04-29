import '../styles/button.css';

function Walletbutton(props) {
  return (
    <button onClick={props.onClick} className={`button ${props.color}`}>
      {props.text}
    </button>
  );
}

export default Walletbutton;

// import Walletbutton from './src/button.jsx';

// function App() {
//   const handleClick = () => {
//     console.log('knappen klickades');
//   };
//   return (
//     <div>
//         <Walletbutton
//           onClick={handleClick}
//           text="LÄGG TILL KORT"
//           className="button1"
//         />
//         <Walletbutton
//           onClick={handleClick}
//           text="LÄGG TILL KORT"
//           className="button2"
//         />
//     </div>
//   );
// }

// export default App;
