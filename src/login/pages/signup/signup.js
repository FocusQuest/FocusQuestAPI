import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "../../estilos/estilos_signup";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone = "", setTelefone] = useState("");
  const [nivelAcesso = "1", setNivelAcesso] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    try {
      if (!email | !emailConf | !senha) {
        setError("Preencha todos os campos");
        return;
      } else if (email !== emailConf) {
        setError("Os e-mails não são iguais");
        return;
      }

      const res = signup(email, senha);

      if (res) {
        setError(res);
        return;
      }

      const data = {
        nomeUsuario: nome,
        emailUsuario: email,
        senhaUsuario: senha,
        telefoneUsuario: telefone,
        idNivelAcesso: nivelAcesso,
      };

      setNome("");
      setTelefone("");
      setNivelAcesso("");

      const responseCadastro = await axios.post(
        `http://localhost:3000/usuarios`,
        data,
      );
      if (responseCadastro.status === 201) {
        alert("Usuário cadatrado com sucesso!");
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <C.Container>
      <C.Label>Crie seu cadastro</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu e-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
