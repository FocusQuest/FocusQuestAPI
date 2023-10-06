import React from 'react';
import './App.css';
import './index.css';
import Painel from './components/Meu_painel';
import Abrir from './components/Abrir_chamado';
import Duvidas from './components/Duvidas_frequentes';
import Chamados from './components/Meus_chamados';
import {BrowserRouter as Router, Routes, Link, Route} from  'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <Router>
        <div id="sidebar" className="sidebar">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link as={Link} to= "/Meu_painel"> Meu painel </Nav.Link>
            <Nav.Link as={Link} to= "/Duvidas"> Dúvidas frequentes </Nav.Link>
            <Nav.Link as={Link} to= "/Abrir_chamado"> Abrir Chamado </Nav.Link>
            <Nav.Link as={Link} to= "/Meus_chamados"> Meus chamados </Nav.Link>
          </Nav>
        </div>

        <Routes>
          <Route path='/Meu_painel' index element={<Painel/>}></Route>
          <Route path='/Duvidas' element={<Duvidas/>}></Route>
          <Route path='/Abrir_chamado' element={<Abrir/>}></Route>
          <Route path='/Meus_chamados' element={<Chamados/>}></Route>
          
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
