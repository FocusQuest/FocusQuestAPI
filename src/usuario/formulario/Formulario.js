import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import './styles.css'


const Form = () => {
const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm();

const watchPassword = watch("password");

const onSubmit = (data) => {
  alert(JSON.stringify(data));
};

console.log("RENDER");

return (
  
    <div className="Container">
      <div className="Label">
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
              
      </div>

      <div className="Label">
        <label>Assunto</label>
        <input
          className={errors?.assunto && "input-error"}
          type="assunto"
          placeholder="Assunto"
          {...register("assunto", {
            required: true,
     
          })}
        />
        {errors?.assunto?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
        
      </div>

      <div className="Label">
        <label>Descrição</label>
        <input
          className={errors?.assunto && "input-error"}
          type="assunto"
          placeholder="Assunto"
          {...register("assunto", {
            required: true,
     
          })}
        />
        {errors?.assunto?.type === "required" && (
          <p className="error-message">Campo obrigatório</p>
        )}
        
      </div>
   

      <div className="Label">
        <label>Local</label>
        <input
          type="local"
          placeholder="Local"
        
        />
        
      </div>

      <div className="Label">
        <label>Identificador da máquina</label>
        <input
          type="identificador"
          placeholder="IP"
        
        />
        
      </div>

      
     

      <div className="Label">
        <div className="anexo">
        <label>Anexo</label>
          <input
            type="anexo"
            placeholder="Clique aqui para selecionar os arquivos ou
            arraste-os aqui"
          />
          
        </div>

       
      </div>

      <div className="Label">
        <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
      </div>
    </div>
    
  );
};

export default Form;