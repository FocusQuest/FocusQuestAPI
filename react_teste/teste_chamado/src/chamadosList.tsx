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
    axios
      .get('http://localhost:3000/chamados')
      .then((response) => setChamados(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Chamados</h1>
      <table>
        <thead>
          <tr>
            <th>Nome do Chamado</th>
            <th>Descrição</th>
            <th>Nome do Usuário</th>
            <th>Email do Usuário</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.nomeChamado}</td>
              <td>{chamado.descChamado}</td>
              <td>{chamado.usuario.nomeUsuario}</td>
              <td>{chamado.usuario.emailUsuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChamadosList;
