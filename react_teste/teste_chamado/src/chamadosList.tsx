import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Chamado {
  id: number;
  nomeChamado: string;
  descChamado: string;
  dataAberturaChamado: string;
  usuario: {
    id: number;
    nomeUsuario: string;
    emailUsuario: string;
    telefoneUsuario: string;
  };
}

const ChamadosList: React.FC = () => {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/chamados')
      .then(response => setChamados(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Chamados</h1>
      <ul>
        {chamados.map(chamado => (
          <li key={chamado.id}>
            <h2>{chamado.nomeChamado}</h2>
            <p>{chamado.descChamado}</p>
            <p>{chamado.usuario.nomeUsuario}</p>
            <p>{chamado.usuario.emailUsuario}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChamadosList;