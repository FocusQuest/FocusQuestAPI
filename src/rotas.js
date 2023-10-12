import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./BaseUsuario";
import useAuth from "./login/hooks/useAuth";
import Home from "./login/pages/Home";
import Signin from "./login/pages/Signin";
import Signup from "./login/pages/Signup";
import Abrir from "./usuario/components/Abrir_chamado";
import Duvidas from "./usuario/components/Duvidas_frequentes";
import FormTeste from "./usuario/components/Formulario";
import Painel from "./usuario/components/Meu_painel";
import Chamados from "./usuario/components/Meus_chamados";
import ChamadosList from "./usuario/components/chamadosList";
import UsuariosList from "./usuario/components/usuariosList";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usuario" element={<Base />}>
          <Route path="Meu_painel" element={<Painel />} />
          <Route path="Duvidas" element={<Duvidas />} />
          <Route path="Abrir_chamado" element={<Abrir />} />
          <Route path="Meus_chamados" element={<Chamados />} />
          <Route path="Formulario" element={<FormTeste />} />
          <Route path="Chamados" element={<ChamadosList />} />
          <Route path="/usuarios" element={<UsuariosList />} />
          <Route path="/chamados" element={<ChamadosList />} />
          <Route path="*" element={<Signin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;