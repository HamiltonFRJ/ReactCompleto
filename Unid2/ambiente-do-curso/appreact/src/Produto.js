import React from 'react';

const Produto = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return produtos.map(({ nome, propriedades }) => (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p key={nome}>{nome}</p>
      <p key={propriedades}>{propriedades}</p>
    </div>
  ));
};

export default Produto;
