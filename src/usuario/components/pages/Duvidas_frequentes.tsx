import React from "react";
import "../css/estilos.css"; // Certifique-se de importar seu CSS

function Duvidas() {
  const perguntasFrequentes = [
    {
      pergunta: "Como redefinir minha senha?",
      resposta:
        "Para redefinir sua senha, contate a secretária ou envie um chamado, o pedido será encaminhado à um administrador que resolverá o problema assim que possível",
    },
    {
      pergunta: "Como relatar problemas com a conexão de internet?",
      resposta:
        "Se você estiver enfrentando problemas com a conexão de internet, verifique se os cabos estão corretamente conectados e que está na rede correta, caso o problema persista, envie um chamado pelo sistema de suporte.",
    },
    {
      pergunta: "Como solicitar assistência técnica para meu computador?",
      resposta:
        "Para solicitar assistência técnica para seu computador, acesse a página 'Abrir Chamado' e selecione a opção apropriada. Preencha os detalhes do problema e envie o chamado para nossa equipe técnica.",
    },
    {
      pergunta: "Como atualizar meu software antivírus?",
      resposta:
        "Para manter seu software antivírus atualizado, siga as instruções do seu programa antivírus. Normalmente, há uma opção de atualização automática que você pode habilitar.",
    },
  ];

  return (
    <div>
      <h2>Dúvidas Frequentes</h2>
      <hr />
      <div className="containerFAQ">
        {perguntasFrequentes.map((item, index) => (
          <div className="faq" key={index}>
            <h3>{item.pergunta}</h3>
            <p>{item.resposta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Duvidas;
