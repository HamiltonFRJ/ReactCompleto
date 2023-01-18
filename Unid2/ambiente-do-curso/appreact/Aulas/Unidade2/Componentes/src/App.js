import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from '../Aulas/Componentes/Form/Form';

const Teste = () => {
  const active = true;
  if (active) {
    return true;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <p>Esse é o meu aplicativo</p>
      <Footer />
    </>
  );
};

export default App;
