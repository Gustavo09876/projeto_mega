'use client';

import React from 'react';
import Link from 'next/link';

export const Checkbox = () => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px', gap: '8px', marginTop: '30px', marginBottom: '20px' }}>
      <input type="checkbox" />
      <span>
        Eu concordo com os{' '}
        <Link href="#" style={{ color: '#ef4444', textDecoration: 'underline' }}>
          Termos de Serviço
        </Link>{' '}
        e{' '}
        <Link href="#" style={{ color: '#ef4444', textDecoration: 'underline' }}>
          Política de Privacidade
        </Link>
      </span>
    </label>
  );
};
