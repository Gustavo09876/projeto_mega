import Image from 'next/image';
import React, { FormEvent, useCallback, useRef, useState } from 'react';
import Formulario from '../Modulos/Formulario';
import BotaoEntrar from '../Modulos/BotaoEntrar'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { debug } from 'console';

export default function Home() {
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
        src="/assets/pictures/background/figma2 1.png"
        alt="Background"
        width={749}
        height={749}
        style={{
          position: 'fixed',
          top: 0,
          left: '50vw',
          width: '40vw',
          height: '40vw',
          transformOrigin: 'top right',
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
          alignContent: 'space-around',
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
          <h2>Inscreva-se</h2>
          <div
            className="Cadastro"
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
            <Formulario
              Text=""
              type="password"
              placeholder="Insira sua senha novamente"
            />
          </div>

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
            <div
              style={{
                display: 'flex',
                fontSize: '12px',
                textAlign: 'left',
                lineHeight: '1.4',
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: '6px', marginTop: '2px' }}
              />
              <span>
                Eu concordo com os{' '}
                <Link
                  href="/termos"
                  style={{ color: '#ef4444', textDecoration: 'underline' }}
                >
                  Termos de Serviço
                </Link>{' '}
                e{' '}
                <Link
                  href="/privacidade"
                  style={{ color: '#ef4444', textDecoration: 'underline' }}
                >
                  Política de Privacidade
                </Link>
              </span>
            </div>

            
            <BotaoEntrar Text="Criar Conta" href='/'/>
            <h5 style={{ fontSize: '12px', marginTop: '8px' }}>
              Já possui uma conta?{' '}
              <Link
                href="/"
                style={{ color: '#ef4444', textDecoration: 'underline' }}
              >
                Acesse sua conta
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
