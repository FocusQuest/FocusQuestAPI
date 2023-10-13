import React from "react";
import { useForm } from 'react-hook-form';
import '../css/estilos.css';

import axios from 'axios';

type FormData = {
  idUsuario: number,
  idCategoria: number;
  nomeChamado: string;
  descChamado: string;
  idLab: number;
  idComputador: number;
};

const FormTeste: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const idUsuario = parseInt('2', 10); // Define idUsuario as a variable
      const idCategoria = data.idCategoria;
      const idLab = data.idLab;
      const idComputador = data.idComputador; // Convert idComputador to a number
      data.idUsuario = idUsuario; // Assign the value of idUsuario to the data object
      data.idCategoria = idCategoria; // Assign the converted idCategoria to the data object
      data.idLab = idLab; // Assign the converted idLab to the data object
      data.idComputador = idComputador; // Assign the converted idComputador to the data object
      console.log('Dados do formulário:', data); // Log the form data
      const response = await axios.post('http://localhost:3000/chamados', data);
      console.log('Resposta:', response); // Log the response
      if (response.status === 201) {
        const createdChamado = response.data;
        // Do something with the created chamado object
        console.log('Chamado:', createdChamado); // For example, log the created chamado
      } else {
        // Handle the error case
        console.log('Erro ao criar chamado');
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error:', error);
    }
  };


  return (
    <div className="Container">
      <div className="Label">
        <label>Tipo de serviço</label>
        <select
          className={errors?.idCategoria && "input-error"}
          defaultValue="0"
          {...register("idCategoria", { validate: (value) => value !== 0 })}
        >
          <option value="0">Selecione...</option>
          <option value="1">Sem internet</option>
          <option value="2">Software</option>
          <option value="3">Outros</option>
        </select>
      </div>
      
      {/* idUsuario deve ser puxado dos dados de login */}

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
          // type="text"
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
          placeholder="ID do computador"
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


export default FormTeste;
