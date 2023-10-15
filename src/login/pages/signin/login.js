import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "../../estilos/estilos_signin";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      if (!email | !senha) {
        setError("Preencha todos os campos");
        return;
      }

      const res = signin(email, senha);

      if (res) {
        setError(res);
        return;
      }
      const data = {
        emailUsuario: email,
        senhaUsuario: senha,
      };

      setEmail("admin@gmail.com");
      setSenha("admin");

      if (email === "admin@gmail.com" && senha === "admin") {
        navigate("/adm/admin");
      }

      if (email !== "admin@gmail.com" && senha !== "admin") {
        const responseLogin = await axios.post(
          `http://localhost:3000/usuarios/login/3`,
          data,
        );

        setId(responseLogin.data.usuario.id);

        if (responseLogin.status === 202) {
          navigate("/usuario/Meu_painel");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <C.Container>
      <C.Label>Seja bem-vindo(a)!</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Solicite seu cadastro </Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
