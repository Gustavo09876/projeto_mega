export default function Home() {
  return (
    <div>
      {/* Coluna da Esquerda */}
      <div>
        {/* Barra de Pesquisa */}
        <div>
          <input 
            type="text" 
            placeholder="Digite aqui..." 
            style={{
              width: '300px',
              padding: '10px 15px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              outline: 'none',
            }}
          />
        </div>
      </div>
      {/* Coluna da Direita */}
      <div>
        
      </div>
    </div>
  );
}
