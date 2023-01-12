import React from 'react';

const App = () => {
  const nome = 'Hamilton';
  return (
    <>
      <p>{nome}</p>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </> // React.Fragment
  );
};

export default App;
