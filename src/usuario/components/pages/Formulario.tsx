import React from "react";
import { useForm } from 'react-hook-form';
import '../css/estilos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

type FormData = {
  idUsuario: number,
  idCategoria: number;
  nomeChamado: string;
  descChamado: string;
  idLab: number;
  idComputador: number;
};

const Formulario: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

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
        navigate('/usuario/Sucesso');
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

    <><div><h2> Abrir chamado</h2></div>

    <hr></hr>

    <div className="containerForm">
      <div className="Label">
        <span className="description">Tipo de serviço</span>
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
        <span className="description">Assunto</span>
        <input
          className={errors?.nomeChamado && "input-error"}
          type="text"
          placeholder="Insira o assunto"
          {...register("nomeChamado", {
            required: true,
          })} />
        {errors?.nomeChamado?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
      </div>

      <div className="Label">
        <label>Descrição</label>
        <textarea
        className={`${
          errors?.descChamado && "input-error"
        } descricao-input`} 
        placeholder="Insira a descrição do problema"
        {...register("descChamado", {
          required: true,
          maxLength: 400,
          minLength: 10,
        })}
        />
        {errors?.descChamado?.type === "required" && (
        <p className="error-message">Campo obrigatório</p>
        )}
        </div>

        <div className="LabelContainer">
        <div className="Column">
          <div className="Label">
            <label>Local</label>
            <select
              className={`${
                errors?.idLab && "input-error"
              } select-personalizado`} 
              defaultValue="0"
              {...register("idLab", { validate: (value) => value !== 0 })}
            >
              <option value="0">Selecione...</option>
              <option value="1">Lab 1</option>
              <option value="2">Lab 2</option>
              <option value="3">Lab 3</option>
              <option value="4">Lab 4</option>
              <option value="5">Sala dos professores</option>
            </select>
          </div>

          <div className="Label">
            <label>Identificador da máquina</label>
            <select
              className={`${
                errors?.idComputador && "input-error"
              } select-personalizado`} 
              defaultValue="0"
              {...register("idComputador", { validate: (value) => value !== 0 })}
            >
              <option value="0">Selecione...</option>
              <option value="7">10</option>
              <option value="8">20</option>
              <option value="9">30</option>
              <option value="10">40</option>
              <option value="11">Profs-1</option>
            </select>
          </div>
        </div>


        <div className="LabelAnexo">
          <label>Anexos</label>
          <br></br>
          <div className="Anexo">
            <div  className="anexo-input">
              <input
              type="file" />
            </div>
          </div>

        </div>
      </div>

      <div className="Label">        
        <div id="enviar">
          <Link to="/usuario/Meu_painel">
            <button onClick={handleSubmit(onSubmit)}>Enviar</button>
          </Link>
        </div>
      </div>

    </div></>
    
    
  );
};


export default Formulario;
