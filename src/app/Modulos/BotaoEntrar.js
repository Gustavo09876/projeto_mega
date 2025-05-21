import React from 'react';
import Link from 'next/link';

export default function BotaoEntrar({ Text, href }) {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-block',
        width: '100%',
        height: '64px',
        borderRadius: '5px',
        background: '#FA8072',
        fontSize: '16px',
        marginTop: '10px',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '64px',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {Text}
    </Link>
  );
}
