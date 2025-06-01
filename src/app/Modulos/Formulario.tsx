'use client';

import React, { forwardRef } from 'react';
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
    font-size: 1rem;
  }
`;

interface FormularioProps {
  Text: string;
  type: string;
  placeholder: string;
}
const Formulario = forwardRef<HTMLInputElement, FormularioProps>(
  ({ Text, type, placeholder }, ref) => {
    return (
      <form>
        <label>
        {Text && <h3>{Text}</h3>}
        <Input
          type={type}
          placeholder={placeholder}
          ref={ref}
        />
      </label>
      </form>
    );
  }
);

Formulario.displayName = 'Formulario';

export default Formulario;
