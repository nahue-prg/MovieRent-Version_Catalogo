import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const SemanaCount = ({semana, onChangeSemana}) => {

  const restarSemana = () => {
    if (semana > parseInt(1)) onChangeSemana(semana - 1);
  };

  return (
    <div className="container" style={{width:'max-content'}}>
      <div className="row d-flex justify-content-center">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Button color="primary" onClick={() => restarSemana()}>
            -
          </Button>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center" style={{ width:'max-content' }}>
          <span style={{ fontWeight: "bolder",padding: '5px 10px', borderRadius:10, width:120, textAlign:'center' }}>
            {semana.toString()} semana{semana == 1 ? "" : "s"}
          </span>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Button
            className=""
            color="primary"
            onClick={() => onChangeSemana(semana + 1)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SemanaCount;