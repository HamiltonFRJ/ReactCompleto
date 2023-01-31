import React from 'react';

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }
  return <button onClick={handleClick}>0</button>;
};

export default ButtonModal;
