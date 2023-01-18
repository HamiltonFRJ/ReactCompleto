import React from 'react';

const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
