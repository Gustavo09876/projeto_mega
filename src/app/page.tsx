import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
          zIndex: 2,
        }}
      >
        {/* Logo da aplicação */}
        <Image
          src="/assets/pictures/titles/Titulo.png"
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
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start', 
            }}>
            {/* Campo de e-mail */}
            <label>
              <h3>E-mail</h3>
              <input
                className="LoginInp"
                type="email"
                placeholder="Insira seu e-mail"
              />
            </label>

            {/* Campo de senha */}
            <label>
              <h3>Senha</h3>
              <input
                className="LoginInp"
                type="password"
                placeholder="Insira sua senha"
              />
            </label>
            {/* Link para recuperação de senha */}
            <h4>Esqueceu sua senha?</h4>
          </div>

          {/* Botão de acesso e link para cadastro */}
          <div
            style={{
              width: '400px',
              marginTop: '5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Botão para acessar a conta */}
            <button className="Entrar">Acessar Conta</button>

            {/* Link para cadastro de nova conta */}
            <h5 style={{ marginTop: '1rem' }}>
              Não tem uma conta? Cadastre-se
            </h5>
          </div>
        </div>
      </div>

      {/* Seção Direita: Texto Motivacional */}
      <div
        style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          color: 'black',
          fontSize: '2rem',
          lineHeight: '1.5',
          zIndex: 2,
        }}
      >
        {/* Frases motivacionais */}
        <h6>Trabalhe</h6>
        <h6>com</h6>
        <h6>clareza.</h6>
        <h6 style={{ color: 'red' }}>Viva</h6>
        <h6 style={{ color: 'red' }}>com</h6>
        <h6 style={{ color: 'red' }}>Lev  za</h6>
        <link rel="icon" href="/favicon.ico" />
      </div>
    </div>
  );
}
