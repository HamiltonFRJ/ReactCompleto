import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Hamilton', idade: '21' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};

export default App;
