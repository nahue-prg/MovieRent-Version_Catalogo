import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import styles from './styles.module.css'


const SemanaCount = ({semana, onChangeSemana}) => {

  const restarSemana = () => {
    if (semana > parseInt(1)) onChangeSemana(semana - 1);
  };

  return (
    <div className="container" style={{width:'max-content', border:'1px solid #00000055', padding:'5px 15px', borderRadius:50}}>
      <div className="row d-flex justify-content-center" style={{padding:0}} >
        <div className="col-2 d-flex justify-content-center align-items-center" >
          <Button color="primary" className={styles.botonOpe} style={{borderRadius:'100%', padding:0}}  onClick={() => restarSemana()}>
            <div className="d-flex justify-content-center align-items-center" style={{width:30, height:30, fontWeight:'bolder',borderRadius:'100%', padding:0}}>-</div>
          </Button>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center" style={{ width:'max-content', padding:0 }}>
          <span style={{ fontWeight: "",padding: '5px 10px', borderRadius:10, width:120, textAlign:'center' }}>
            {semana.toString()} semana{semana == 1 ? "" : "s"}
          </span>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center" style={{padding:0}}>
          <Button
            color="primary"
            onClick={() => onChangeSemana(semana + 1)}
            className={styles.botonOpe} style={{borderRadius:'100%'}}
          >
             <div className="d-flex justify-content-center align-items-center" style={{width:30, height:30, fontWeight:'bolder',borderRadius:'100%', padding:0}}>+</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SemanaCount;