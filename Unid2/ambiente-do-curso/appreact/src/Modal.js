import React from 'react';

const Modal = ({ modal }) => {
  if (modal === true) return <div>Esse é um Modal</div>;
  return null;
};

export default Modal;
