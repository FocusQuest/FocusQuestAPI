import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './login/contexts/auth';
import UsuariosList from './adm/pages/usuariosList';
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
import ChamadosList from './adm/pages/chamadosList';
import Formulario from './usuario/components/pages/Formulario';
import Chamados from './usuario/components/pages/Meus_chamados';
import BaseAdm from './adm/BaseAdm';
import Ferramentas from './adm/pages/ferramentas';
import Admin from './adm/pages/admin';
import ChamadosUsuarios from './usuario/components/pages/Meus_chamados';
import ChamadoEnviado from './usuario/components/pages/chamado_enviado';


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
                <Route path="Abrir_chamado" element={<Formulario/>} />
                <Route path="Meus_chamados" element={<ChamadosUsuarios/>} />
                <Route path="Sucesso" element={<ChamadoEnviado />} /> 
              </Route>
              <Route path="/adm" element={<BaseAdm />}>
                <Route path="Usuarios" element={<UsuariosList />} /> 
                <Route path="Ferramentas" element={<Ferramentas />} />        
                <Route path="Admin" element={<Admin />} />    
                <Route path="Chamados" element={<ChamadosList />} />   
              </Route>
          </Routes>
        </React.Fragment>
      </Router>
      <GlobalStyle /> 
    </AuthProvider> 
  
  )
};



export default App;
