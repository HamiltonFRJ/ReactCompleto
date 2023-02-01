import React from 'react';

const App = () => {
  const [contador, setContar] = React.useState(1);
  const [item, setItem] = React.useState(['Item 1']);

  function handleClick() {
    setContar(contador + 1);
    setItem([...item, 'Item ' + (contador + 1)]);
  }

  /*
  function handleClick() {
    setContar((contador) => {
      return contador + 1
    });
    setItem((item) => [...item, 'Item ' + (contador + 1)]);
  }
  */

  return (
    <div>
      {item.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contador}</button>
    </div>
  );
};

export default App;
