import React from "react";
import { useForm } from 'react-hook-form';
import '../css/estilos.css';
// import { createChamado } from "../../../../../Backend_atual/FocusQuestAPI/backend_BD_Rotas/src/controllers/chamados.controller"
import axios from 'axios';

type FormData = {
  idUsuario: 2, // incluir abaixo
  idCategoria: string;
  nomeChamado: string;
  descChamado: string;
  idLab: string;
  idComputador: string;
};

// JSON criado pela req:
// {
//   "idCategoria":"sem internet",
//   "idUsuario":"2",
//   "nomeChamado":"teste assunto",
//   "descChamado":"teste descricao",
//   "idLab":"teste local",
//   "idComputador":"teste computador"
// }

//OK nomeChamado: req.body.nomeChamado,
//OK descChamado: req.body.descChamado,
//OK idUsuario: req.body.idUsuario,
//OK idLab: req.body.idLab,
//OK idComputador: req.body.idComputador,
// idCategoria: req.body.idCategoria,

const FormTeste: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="Container">
      <div className="Label">
        <label>Busca serviço</label>
        <select
          className={errors?.idCategoria && "input-error"}
          defaultValue="0"
          {...register("idCategoria", { validate: (value) => value !== "0" })}
        >
          <option value="0">Selecione...</option>
          <option value="sem internet">Sem internet</option>
          <option value="software">Software</option>
          <option value="outros">Outros</option>
        </select>
      </div>
      
      {/* idUsuario deve ser puxado dos dados de login */}
      {/* <div className="Label">
        <label>Identificador do Usuário</label>
        <input
          type="hidden"
          value="2"
          placeholder="idUsuario"
          {...register("idUsuario")}
        />
      </div> */}

      <div className="Label">
        <label>Assunto</label>
        <input
          className={errors?.nomeChamado && "input-error"}
          type="text"
          placeholder="Assunto"
          {...register("nomeChamado", {
            required: true,
          })}
        />
        {errors?.nomeChamado?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
      </div>

      <div className="Label">
        <label>Descrição</label>
        <textarea
          className={errors?.descChamado && "input-error"}
          placeholder="Descrição do problema"
          {...register("descChamado", {
            required: true,
            maxLength: 1400,
            minLength: 10,
          })}
        />
        {errors?.descChamado?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
      </div>

      <div className="Label">
        <label>Local</label>
        <input
          type="text"
          placeholder="Local"
          {...register("idLab")}
        />
      </div>

      <div className="Label">
        <label>Identificador do computador</label>
        <input
          type="text"
          placeholder="IP"
          {...register("idComputador")}
        />
      </div>

      <div className="Label">
        <div className="anexo">
          <label>Anexo</label>
          <input
            type="file"
            placeholder="Clique aqui para selecionar os arquivos ou arraste-os aqui"
          />
        </div>
      </div>

      <div className="Label">
        <button onClick={handleSubmit(onSubmit)}>Enviar</button>
      </div>
    </div>
  );
};




const onSubmit = async (data: FormData) => {
  try {
    console.log('Form data:', data); // Log the form data
    const response = await axios.post('http://localhost:3000/chamados', data);
    console.log('Response:', response); // Log the response
    if (response.status === 201) {
      const createdChamado = response.data;
      // Do something with the created chamado object
      console.log('Created chamado:', createdChamado); // For example, log the created chamado
    } else {
      // Handle the error case
      console.log('Error creating chamado');
    }
  } catch (error) {
    // Handle any network or other errors
    console.error('Error:', error);
  }
};

export default FormTeste;
