import React from "react";

function Painel() {
  return (
    <div>
      <h2>Meu Painel</h2>
      <hr></hr>
      <div className="containerBoxes">
        <div className="box" id="box1">
          <div className="box-content">
            <h2>Chamados Abertos</h2>
            <p>10</p>
          </div>
        </div>

        <div className="box" id="box2">
          <div className="box-content">
            <h2>Chamados Concluídos</h2>
            <p>5</p>
          </div>
        </div>

        <div className="box" id="box3">
          <div className="box-content">
            <h2>Chamados Finalizados</h2>
            <p>3</p>
          </div>
        </div>

      </div>
      <h2>Chamados recentes</h2>
      <hr></hr>
    </div>
  );
}

export default Painel;
