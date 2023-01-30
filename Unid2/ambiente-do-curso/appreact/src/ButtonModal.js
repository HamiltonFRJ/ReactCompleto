import React from 'react';

const ButtonModal = ({ modal, setModal }) => {
  return (
    <button onClick={() => setModal(!modal)}>
      {modal === true ? 'Fechar' : 'Abrir'}
    </button>
  );
};

export default ButtonModal;
