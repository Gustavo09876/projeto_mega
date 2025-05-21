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

export default function Formulario({Text, type, placeholder}) {
  return (
    <label>
      <h3>{Text}</h3>
      <Input type={type} placeholder={placeholder} />
    </label>
  );
};