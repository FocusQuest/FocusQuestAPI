import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './login/contexts/auth';
import UsuariosList from './adm/usuariosList';
import Base from './usuario/components/BaseUsuario';
import useAuth from './login/hooks/useAuth';
// import Home from './login/pages/Home';
import Signin from './login/pages/signin/login';
import Signup from './login/pages/signup/signup';
// import Abrir from './usuario/components/Abrir_chamado';
import Duvidas from './usuario/components/pages/Duvidas_frequentes';
import FormTeste from './usuario/components/pages/Formulario';
import Painel from './usuario/components/pages/Meu_painel';
// import Chamados from './usuario/components/Meus_chamados';
import GlobalStyle from './login/estilos/global.js';
import Home from './login/pages/home/home';
import ChamadosList from './técnico/chamadosList';
import Meus_chamados from './usuario/components/pages/Meus_chamados';


/**
 * Renders the `Item` component if the user is signed in, otherwise renders the `Signin` component.
 * @param {React.ComponentType} Item - The component to render if the user is signed in.
 * @returns {JSX.Element} - The rendered component.
 */
// const Private = ({ Item }: { Item: React.ComponentType }): JSX.Element => {
  
//   const { signed }: { signed: Number } = useAuth();
//   return signed > 0 ? <Item /> : <Signin />;
// };
const App = (): JSX.Element => {
  return(
  
    <AuthProvider>
      <Router>
        <React.Fragment>  
          <Routes>
            <Route path="Todos_chamados" element={<ChamadosList />} />
            {/* para usar como base para Chamados por técnico e Chamados para relatórios */}
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="*" element={<Signin />} /> */}
              {/* <Route path="/home" element={<Private Item={Home} />} />             */}
              <Route path="/usuario" element={<Base />}>
                <Route path="Meu_painel" element={<Painel />} />
                <Route path="Duvidas" element={<Duvidas />} />
                <Route path="Abrir_chamado" element={<FormTeste/>} />
                <Route path="Meus_chamados" element={<Meus_chamados />} />
                {/* <Route path="Formulario" element={<FormTeste />} /> */}
                {/* <Route path="Chamados" element={<ChamadosList />} /> */}
                <Route path="usuarios" element={<UsuariosList />} />              
              </Route>
          </Routes>
        </React.Fragment>
      </Router>
      <GlobalStyle /> 
    </AuthProvider> 
  
  )
};



export default App;
