import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/estilos.css';

interface Chamado {
  id: number;
  nomeChamado: string;
  descChamado: string;
  dataAberturaChamado: string;
  // Include other properties here
}

function Chamados() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const userId = 2; // Replace with the actual user ID value

  useEffect(() => {
    const fetchChamados = async () => {
      try {
        const response = await axios.get<Chamado[]>(`http://localhost:3000/chamados/usuario/${userId}`);
        setChamados(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChamados();
  }, [userId]);

  return (
    <div>
      <h4>Meus chamados</h4>
      <ul>
        {chamados.map(chamado => (
          <li key={chamado.id}>
            <h5>{chamado.nomeChamado}</h5>
            <p>{chamado.descChamado}</p>
            <p>{chamado.dataAberturaChamado}</p>
            {/* Render other properties here */}
          </li>
          ))}
        </ul>
      </div>
    

  );
}

export default Chamados;