import React from 'react';
import Link from 'next/link';

interface BotaoEntrarProps {
  Text: string;
  href?: string;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;  // novo
}

export default function BotaoEntrar({ Text, href, onClick }: BotaoEntrarProps) {
  if (href) {
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

  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-block',
        width: '100%',
        height: '64px',
        borderRadius: '5px',
        background: '#FA8072',
        fontSize: '16px',
        marginTop: '10px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {Text}
    </button>
  );
}
