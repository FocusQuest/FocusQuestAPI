import { Link } from 'react-router-dom';


function ChamadoEnviado(){
    return (
        <div>  
            <div>
                <h2> O chamado #1234 foi enviado com sucesso </h2>
            </div>
            <br></br>
    
            <div id= "buttonSucesso">
                <div>
                <Link to="/usuario/Abrir_chamado">
                    <button >Novo chamado</button>
                </Link>
                </div>
                <div>                
                <Link to="/usuario/Meus_chamados">
                    <button >Meus chamados</button>
                </Link>
                </div>
            </div>
        </div>  
        );
    }
    
export default ChamadoEnviado;