'use client';

import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  width: 400px;
  height: 40px;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
  background: #FFFFFF;
  border: 1px solid #000000;
  margin-bottom: 10px;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    color: #7E7E7E4D;
    opacity: 45%;
    color: black;
    font-size: 1rem;
  }
`;

export const Formulario_Email = () => {
  return (
    <label>
      <h3>E-mail</h3>
      <Input type="email" placeholder="Insira seu e-mail" />
    </label>
  );
};

export const Formulario_Senha = () => {
  return (
    <label>
      <h3>Senha</h3>
      <Input type="password" placeholder="Insira sua senha" />
    </label>
  );
};
export const Formulario_SenhaC = () => {
  return (
    <label>
      <Input type="password" placeholder="Insira sua senha novamente" />
    </label>
  );
};
