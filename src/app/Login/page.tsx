import Image from 'next/image';
import React from 'react';
import Formulario from '../Modulos/Formulario';
import BotaoEntrar from '../Modulos/BotaoEntrar';
import Logo from '../Modulos/Leveza';
import Link from 'next/link';

export default function Home() {
  return (
    // Container principal com layout em flex para dividir a tela em duas seções
    <div 
      style={{ 
        display: 'flex', 
        height: '100vh',
        background: 'linear-gradient(180deg, #F6FDFF 16.35%, #A2BFC7 100%)',
        position: 'relative',
      }}>
    <Image
      src="/assets/pictures/background/Background1.jpg"
      alt="Background"
      width={846}
      height={1078}
      style={{
        position: 'fixed',
        top: 0,
        right: '5vw',
        width: '45vw', // maior para cobrir bem após inclinar
        height: '50vw',
        transformOrigin: 'top right', // ponto de rotação
        backgroundSize: 'cover',
        zIndex: 1,
      }}
    />
    {/* Imagem da base direita */}
    <div
      style={{
        position: 'fixed',
        top: 10,
        right: '-10vw', // empurra o bloco mais para fora da tela, para alinhar corretamente após a rotação
        width: '20vw', // maior para cobrir bem após inclinar
        height: '110vh',
        backgroundColor: '#E76052',
        transform: 'rotate(10deg)', // ROTACIONA para a direita
        transformOrigin: 'top right', // ponto de rotação
        zIndex: 1,
        border: '10px solid white',

      }}
    ></div>
    
      {/* Seção Esquerda: Formulário de Login */}
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
        {/* Logo da aplicação */}
        <Image
          src="/assets/pictures/Icons/Titulo.png"
          alt="Logo"
          width={383}
          height={181}
        />

        {/* Conteúdo do formulário de login */}
        <div
          style={{
            marginTop: '5px',
            paddingLeft: '20px',
            width: '100%',
          }}
        >
          {/* Título da seção de login */}
          <h2>Login</h2>
          {/* Formulário de entrada de dados */}
          <div className="Login" 
            style={{
              width: '400px',
              height: '170px',
              marginTop: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start', 
            }}>
            {/* Campo de e-mail */}
            <Formulario Text="E-mail" type="email" placeholder="Insira seu E-mail"/>
            {/* Campo de senha */}
            <Formulario Text="Senha" type="senha" placeholder="Insira sua senha"/>
            {/* Link para recuperação de senha */}
          </div>

          {/* Botão de acesso e link para cadastro */}
          <div style={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px',
          }}>
            <BotaoEntrar Text="Acessar Conta" href="/Dashboard/Home" />

            <h5 style={{ fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>
              Não tem uma conta?{' '}
              <Link href="/Cadastro" style={{ color: '#ef4444', textDecoration: 'underline' }}>
                Cadastre-se
              </Link>
            </h5>
          </div>
        </div>
      </div>

      {/* Seção Direita: Texto Motivacional */}
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
        {/* Frases motivacionais */}
        <span style={{ color: 'black' }}>Trabalhe</span>
        <span style={{ color: 'black' }}>com</span>
        <span style={{ color: 'black' }}>clareza.</span>
        <span style={{ color: '#F15A4A' }}>Viva</span>
        <span style={{ color: '#F15A4A' }}>com</span>
        <Logo />
        <link rel="icon" href="/favicon.ico" />
      </div>
    </div>
  );
}
