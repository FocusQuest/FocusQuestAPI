import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Base from './BaseUsuario';
import UsuariosList from './adm/usuariosList';
import useAuth from './login/hooks/useAuth';
import Home from './login/pages/Home';
import Signin from './login/pages/Signin';
import Signup from './login/pages/Signup';
import Abrir from './usuario/components/Abrir_chamado';
import Duvidas from './usuario/components/Duvidas_frequentes';
import FormTeste from './usuario/components/Formulario';
import Painel from './usuario/components/Meu_painel';
import Chamados from './usuario/components/Meus_chamados';
import ChamadosList from './usuario/components/chamadosList';

/**
 * Renders the `Item` component if the user is signed in, otherwise renders the `Signin` component.
 * @param {React.ComponentType} Item - The component to render if the user is signed in.
 * @returns {JSX.Element} - The rendered component.
 */
// const Private = ({ Item }: { Item: React.ComponentType }) => {
//   const { signed }: { signed: number } = useAuth(); // Add an explicit type for the `signed` property

//   return signed > 0 ? <Item /> : <Signin />;
// };

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signin />} />
      {/* <Route path="/home" element={<Private Item={Home} />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/usuario" element={<Base />}>
        <Route path="Meu_painel" element={<Painel />} />
        <Route path="Duvidas" element={<Duvidas />} />
        <Route path="Abrir_chamado" element={<Abrir />} />
        <Route path="Meus_chamados" element={<Chamados />} />
        <Route path="Formulario" element={<FormTeste />} />
        <Route path="Chamados" element={<ChamadosList />} />
        <Route path="usuarios" element={<UsuariosList />} />
        <Route path="*" element={<Signin />} />
      </Route>
    </Routes>
  </Router>
);

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

export default App;
