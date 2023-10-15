import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilos.css';

function Admin() {
  return (
    <div className="containerAdmin">
      <h2>Administração</h2>
      <hr></hr>
      <div className="button-container">
        <Link to="/criar-usuario" className="admin-link">
          <button className="admin-button" style={{ backgroundColor: '#5E5E5E' }}>
            Criar Usuário
          </button>
        </Link>
        <Link to="/redefinir-senha" className="admin-link">
          <button className="admin-button" style={{ backgroundColor: '#7E7E7E' }}>
            Redefinir Senha
          </button>
        </Link>
        <Link to="/adicionar-ferramenta" className="admin-link">
          <button className="admin-button" style={{ backgroundColor: '#8E8E8E' }}>
            Adicionar Ferramenta
          </button>
        </Link>
        <Link to="/adicionar-servico" className="admin-link">
          <button className="admin-button" style={{ backgroundColor: '#A0A0A0' }}>
            Adicionar Serviço
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Admin;


