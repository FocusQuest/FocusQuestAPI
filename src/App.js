import React from "react";
import GlobalStyle from "./styles/global";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Abrir from './components/Abrir_chamado';
import Duvidas from './components/Duvidas_frequentes';
import Painel from './components/Meu_painel';
import Chamados from './components/Meus_chamados';
import './index.css';
import './menu.css';
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";



function RoutesApp() {
  return (
      <>
          <Routes />
          <GlobalStyle />
      </>
  );
}
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
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/Meu_painel' element={<Painel/>}></Route>
          <Route path='/Duvidas' element={<Duvidas/>}></Route>
          <Route path='/Abrir_chamado' element={<Abrir/>}></Route>
          <Route path='/Meus_chamados' element={<Chamados/>}></Route>
          
        </Routes>
      </Router>
    
    </div>
  );
}



export default App;

