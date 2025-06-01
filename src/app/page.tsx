'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Formulario from './Modulos/Formulario';
import BotaoEntrar from './Modulos/BotaoEntrar';
import Logo from './Modulos/Leveza';
import Link from 'next/link';''
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setErro('');
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Erro ao fazer login');

      // Se login OK, redireciona para dashboard
      router.push('/Dashboard/Home');
    } catch (err: any) {
      setErro(err.message || 'Erro inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: 'linear-gradient(180deg, #F6FDFF 16.35%, #A2BFC7 100%)',
        position: 'relative',
      }}
    >
      <Image
        src="/assets/pictures/background/Background1.jpg"
        alt="Background"
        width={846}
        height={1078}
        style={{
          position: 'fixed',
          top: 0,
          right: '5vw',
          width: '45vw',
          height: '50vw',
          transformOrigin: 'top right',
          backgroundSize: 'cover',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: '-10vw',
          width: '20vw',
          height: '110vh',
          backgroundColor: '#E76052',
          transform: 'rotate(10deg)',
          transformOrigin: 'top right',
          zIndex: 1,
          border: '10px solid white',
        }}
      ></div>

      <div
        style={{
          flex: 1,
          height: '100%',
          paddingLeft: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-arround',
          alignItems: 'start',
          zIndex: 2,
        }}
      >
        <Image
          src="/assets/pictures/Icons/Titulo.png"
          alt="Logo"
          width={383}
          height={181}
        />

        <div style={{ marginTop: '5px', paddingLeft: '20px', width: '100%' }}>
          <h2>Login</h2>
          <div
            className="Login"
            style={{
              width: '400px',
              height: '170px',
              marginTop: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Formulario
              Text="E-mail"
              type="email"
              placeholder="Insira seu E-mail"
            />
            <Formulario
              Text="Senha"
              type="password"
              placeholder="Insira sua senha"
            />
          </div>

          {erro && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>
              {erro}
            </p>
          )}

          <div
            style={{
              width: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px',
            }}
          >
            <BotaoEntrar
              Text={"Acessar Conta"}
              href='Dashboard/Home'
            />

            <h5
              style={{
                fontSize: '12px',
                marginTop: '8px',
                textAlign: 'center',
              }}
            >
              Não tem uma conta?{' '}
              <Link
                href="/Cadastro"
                style={{ color: '#ef4444', textDecoration: 'underline' }}
              >
                Cadastre-se
              </Link>
            </h5>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          lineHeight: 1.1,
          fontSize: '40px',
          fontWeight: '700',
          padding: '2rem',
          zIndex: 2,
          marginRight: '30vw',
        }}
      >
        <span style={{ color: 'black' }}>Trabalhe</span>
        <span style={{ color: 'black' }}>com</span>
        <span style={{ color: 'black' }}>clareza.</span>
        <span style={{ color: '#F15A4A' }}>Viva</span>
        <span style={{ color: '#F15A4A' }}>com</span>
        <Logo />
      </div>
    </div>
  );
}
