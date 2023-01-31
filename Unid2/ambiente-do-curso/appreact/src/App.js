import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(
    true,
    /*() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  }*/
  );
  // Essa constante representa as posições 0 e 1, que desestruturadas contem o valor na posição 0, e a função de troca na posição 1.

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default App;
