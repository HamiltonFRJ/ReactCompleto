const Compras = () => {
  const [contador, setContador] = React.useState(0);
  function comprar() {
    setContador(contador + 1);
  }
  return (
    <div>
      <button onClick={comprar}>Comprar</button>
      <p>Total: {contador}</p>
      <p>Preço: R$ {contador * 250}</p>
    </div>
  );
};

const Button = () => {
  function handleClick(event) {
    console.log(event.target.innerText);
  }
  return <button onClick={handleClick}>Comprar</button>;
};

// class Button extends React.Component {
//   render() {
//     return <button>Comprar</button>;
//   }
// }

const Titulo = () => {
  const numero = Math.random() * 1000;
  return <h1>Meu Titulo {numero}</h1>;
};

const App = () => {
  return (
    <div>
      Meu App
      <Compras />
      <Titulo />
      <Button />
      <div>
        Compre aqui.
        <Button />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
