import React from "react";
import { useForm } from 'react-hook-form';
import '../css/estilos.css';

type FormData = {
  problema: string;
  assunto: string;
  descricao: string;
  local: string;
  identificador: string;
};

const FormTeste: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
      <><div className="Label">
      <label>Busca serviço</label>
      <select
        className={errors?.problema && "input-error"}
        defaultValue="0"
        {...register("problema", { validate: (value) => value !== "0" })}
      >
        <option value="0">Selecione...</option>
        <option value="developer">Sem internet</option>
        <option value="other">Software</option>
        <option value="other">Outros</option>
      </select>
    </div><div className="Label">
        <label>Assunto</label>
        <input
          className={errors?.assunto && "input-error"}
          type="text"
          placeholder="Assunto"
          {...register("assunto", {
            required: true,
          })} />
        {errors?.assunto?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
      </div><div className="Label">
        <label>Descrição</label>
        <input
          className={errors?.descricao && "input-error"}
          type="text"
          placeholder="Descrição"
          {...register("descricao", {
            required: true,
          })} />
        {errors?.descricao?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
      </div><div className="Label">
        <label>Local</label>
        <input
          type="text"
          placeholder="Local"
          {...register("local")} />
      </div><div className="Label">
        <label>Identificador da máquina</label>
        <input
          type="text"
          placeholder="IP"
          {...register("identificador")} />
      </div><div className="Label">
        <div className="anexo">
          <label>Anexo</label>
          <input
            type="file"
            placeholder="Clique aqui para selecionar os arquivos ou arraste-os aqui" />
        </div>
      </div><div className="Label">
        <button onClick={handleSubmit(onSubmit)}>Enviar</button>
      </div></>
    
  );
};

export default FormTeste;