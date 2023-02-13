import React from "react";
import styles from "./styles.module.css";
import SemanaCount from "../SemanaCount/SemanaCount";
import { Button } from "reactstrap";

const FilaDetalle = ({ id,nombre, precio, imagen, semana, onChangeSemana, quitarDelCarrito }) => {
  return (
    <div className={`${styles.contenedor} row`} style={{}} >
     <div className="col" >
        <img src={`https://image.tmdb.org/t/p/w300/${imagen}`} alt={nombre} style={{width:120}}/>
      </div>
      <div className="col" style={{}}>
        {nombre}
      </div>
      <div className="col" style={{}}>
        ${precio}
      </div>
      <div className="col" style={{}}>
        Total: ${(parseInt(semana) * parseFloat(precio)).toFixed(2)}
      </div>
      <div className="col" style={{}}>
        <SemanaCount semana={semana} onChangeSemana={onChangeSemana} />
      </div>
      <div className="col" style={{}}>
        <Button color="danger" onClick={() => quitarDelCarrito(id)}>Eliminar</Button>
      </div>
    </div>
  );
};

export default FilaDetalle;
