import React from 'react';
import './css/index.css';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/estilos.css';



function Base() {
  return (
    <>
    <div className='MenuSup'>
      {/* <div className="MenuSupImg> */}
      {/* <img src="../img/sino.png"/>  */}
    <p> este é o menu superior</p>     
    </div>
    <div className="Menu">
      <div className="container-fluid">
        <div className="row">
          <Nav  defaultActiveKey="/usuario" className="col-md-2 d-none d-md-block bg-light sidebar">
            <nav id ="sidebar">
              <div className="sidebar-header">
                <h4 > HelpDesk</h4>
              </div>
              <div className="list-unstyled components">
                <Nav.Link as={Link} to="Meu_painel"> Meu painel </Nav.Link>
                <Nav.Link as={Link} to="Duvidas"> Dúvidas frequentes </Nav.Link>
                <Nav.Link as={Link} to="Abrir_chamado"> Abrir Chamado </Nav.Link>
                <Nav.Link as={Link} to="Meus_chamados"> Meus chamados </Nav.Link>
              </div>                
            </nav>                
          </Nav>            
        </div>
      </div>
    </div>
      <div className="Container">
       <Outlet />
      </div>
    </>
    
   );
} 

export default Base;
