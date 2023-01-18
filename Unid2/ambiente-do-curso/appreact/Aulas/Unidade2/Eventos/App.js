import React from 'react';

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }
  return <button onClick={(event) => console.log(event)}>Clique</button>;
};

export default App;
