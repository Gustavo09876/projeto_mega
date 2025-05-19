import Image from 'next/image';
import React from 'react';
import {Formulario_Email} from '../Modulos/Formulario';
import {Formulario_Senha} from '../Modulos/Formulario';
import {Formulario_SenhaC} from '../Modulos/Formulario';
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
        src="/assets/pictures/background/figma2 1.png"
        alt="Background"
        width={749}
        height={749}
        style={{
        position: 'fixed',
        top: 0,
        left: '50vw',
        width: '40vw', // maior para cobrir bem após inclinar
        height: '40vw',
        transformOrigin: 'top right', // ponto de rotação
        backgroundSize: 'cover',
        zIndex: 1,
        }}
    />
      <div
        style={{
          flex: 1,
          height: '100%',
          paddingLeft: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-arround',
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
          <h2>Inscreva-se</h2>
          {/* Formulário de entrada de dados */}
          <div className="Cadastro" 
            style={{
              width: '400px',
              height: '170px',
              marginTop: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start', 
            }}>
            {/* Campo de e-mail */}
            <Formulario_Email/>
            {/* Campo de senha */}
            <Formulario_Senha/>
            {/* Campo de confirmar senha */}
            <Formulario_SenhaC/>
            {/* Link para recuperação de senha */}
          </div>

          {/* Container fixo na base esquerda */}
            <div
            style={{
                position: 'fixed',
                bottom: '10px',
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 3,
                padding: '0 10px',
            }}
            >
            {/* Termos de serviço */}
            <div style={{ display: 'flex', alignItems: 'start', fontSize: '12px', textAlign: 'left', lineHeight: '1.4' }}>
                <input type="checkbox" style={{ marginRight: '6px', marginTop: '2px' }} />
                <span>
                Eu concordo com os{' '}
                <Link href="/termos" style={{ color: '#ef4444', textDecoration: 'underline' }}>
                    Termos de Serviço
                </Link>{' '}
                e{' '}
                <Link href="/privacidade" style={{ color: '#ef4444', textDecoration: 'underline' }}>
                    Política de Privacidade
                </Link>
                </span>
            </div>

            {/* Botão Criar Conta */}
            <Link
              href="/Home"
              className="CriarConta"
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
              }}
            >
              Criar Conta
            </Link>
            {/* Link para login */}
            <h5 style={{ fontSize: '12px', marginTop: '8px' }}>
                Já possui uma conta?{' '}
                <Link href="/Login" style={{ color: '#ef4444', textDecoration: 'underline' }}>
                Acesse sua conta
                </Link>
            </h5>
            </div>
        </div>
      </div>
    </div>
  );
}
