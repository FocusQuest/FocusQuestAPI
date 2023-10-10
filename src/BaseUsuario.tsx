import React from 'react';
import './index.css';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Base() {
  return (
    <>
      <div className="App">
        <div id="sidebar" className="sidebar">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link as={Link} to="Meu_painel"> Meu painel </Nav.Link>
            <Nav.Link as={Link} to="Duvidas"> Dúvidas frequentes </Nav.Link>
            <Nav.Link as={Link} to="Abrir_chamado"> Abrir Chamado </Nav.Link>
            <Nav.Link as={Link} to="Meus_chamados"> Meus chamados </Nav.Link>
          </Nav>
        </div>
        <Outlet />
      </div>
    </>

  );
}

export default Base;
