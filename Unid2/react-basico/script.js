const Button = () => {
  return <button>Comprar</button>;
};

// class Button extends React.Component {
//   render() {
//     return <button>Comprar</button>;
//   }
// }

// Composição

const App = () => {
  return (
    <div>
      Meu App
      <Button />
      <div>
        Compre aqui.
        <Button />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
