import React from "react";
import styles from "./styles.module.css";
import SemanaCount from "../SemanaCount/SemanaCount";
import { Button } from "reactstrap";

const FilaDetalle = ({ id,nombre, precio, imagen, semana, onChangeSemana, quitarDelCarrito }) => {
  return (
    <div className={`${styles.contenedor} row`} style={{}} >
     <div className="col-12 col-lg-1" >
        <img src={`https://image.tmdb.org/t/p/w300/${imagen}`} alt={nombre} style={{width:70, borderRadius:10, boxShadow: ''}}/>
      </div>
      <div className="col-12 col-lg-2 mt-1" style={{fontWeight:'bolder', minHeight:30, padding:'10px 20px' , fontSize:'1.1rem'}}>
        {nombre}
      </div>
      <div className="col-12 col-lg-2" style={{padding:'10px 0'}}>
      <span style={{fontWeight:'bolder'}}>Precio:</span>{` $${precio}`} 
      </div>
      <div className="col-12 col-lg-2" style={{padding:'10px 0'}}>
       <span style={{fontWeight:'bolder'}}>Total: </span>${(parseInt(semana) * parseFloat(precio)).toFixed(2)}
      </div>
      <div className="col-12 col-lg-3" style={{ padding:'10px 0'}}>
        <SemanaCount semana={semana} onChangeSemana={onChangeSemana} />
      </div>
      <div  className={`${styles.boton} col-12 col-lg-2`} style={{ padding:'10px 0'}}>
        <Button color="danger" onClick={() => quitarDelCarrito(id)}>Eliminar</Button>
      </div>
    </div>
  );
};

export default FilaDetalle;
