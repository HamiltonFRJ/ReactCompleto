import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const arr = ['Item 1', 'Item 1'];
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Senha" />
      <Button item={arr} />
    </div>
  );
};

export default Form;
