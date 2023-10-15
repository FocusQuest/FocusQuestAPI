import React from 'react';

function Ferramentas() {
  return (
    <div className="containerFAQ">
      <h2>Ferramentas</h2>
      <hr></hr>
      <div className="faq-item">
        <h3>Software 1</h3>
        <p>
          Este é um software educacional muito útil. Você pode encontrá-lo no site oficial da empresa. Siga os passos abaixo para baixá-lo:
        </p>
        <ol>
          <li>Acesse o site oficial do Software 1 em: <a href="https://www.software1.com" target="_blank" rel="noopener noreferrer">https://www.software1.com</a></li>
          <li>Navegue até a seção de downloads.</li>
          <li>Clique no botão "Baixar agora" e siga as instruções para instalar o software em seu computador.</li>
        </ol>
      </div>

      <div className="faq-item">
        <h3>Software 2</h3>
        <p>
          O Software 2 é uma ferramenta útil para tarefas escolares. Para baixá-lo, siga estas etapas:
        </p>
        <ol>
          <li>Visite o site oficial do Software 2 em: <a href="https://www.software2.com" target="_blank" rel="noopener noreferrer">https://www.software2.com</a></li>
          <li>Procure a seção de download.</li>
          <li>Clique no link de download e siga as instruções de instalação.</li>
        </ol>
      </div>

      {/* Adicione mais informações sobre outros softwares escolares conforme necessário */}
    </div>
  );
}

export default Ferramentas;
