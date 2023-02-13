import { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { getWhereItems } from "../../code/funcionesComunes";
import { Carrito } from "../../App";
import ModalContainer from "../Modal/ModalContainer";
import styles from "./styles.module.css"

const ItemDetail = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const CartData = useContext(Carrito)
  const [semana, setSemana] = useState(1);

  const getMovieDetail = async () => {
    let auxiliar = await getWhereItems("Movies","id","==",parseInt(id),1);
    console.log(auxiliar);
    setMovie(auxiliar);
  }
  
  useEffect(() => {
    getMovieDetail();
  }, [])
  
  const agregarAlCarrito = () => {
    let aux = [...CartData.productosCart];
    // Busca si el id del producto ya existe en el carrito
    const index = aux.findIndex(producto => producto.id === movie[0].id);
    //Si existe le sumo la nueva cantidad de semanas, sino agrego un nuevo producto al carrito
    index !== -1 ? aux[index].cantidad += semana :  aux.push({ id : movie[0].id , title :  movie[0].title ,  precio :  movie[0].precio , cantidad:  semana, imagen : movie[0].poster_path });
    CartData.setProductosCart(aux);
  }

  const restarSemana = () => {
    if (semana > parseInt(1) )
      setSemana(semana-1)
  }

  return (
    movie[0] !== undefined ?
    <Card key={id} style={{width:'80%', maxWidth:550, margin:'30px auto',border:'none',   background: 'linear-gradient(to left,   #ccc, #fff)'}}>
      <CardImg className="cardImg"  style={{fontWeight:'bolder', fontSize:'2rem', margin: 'auto', maxWidth:550 }} top src={`https://image.tmdb.org/t/p/w500/${movie[0].backdrop_path}`} alt={movie.title}/>
      <CardBody>
        <CardTitle style={{fontWeight:'bolder', fontSize:'1.8rem', textAlign: 'start', marginBottom:20}}>{movie[0].title}</CardTitle>
         <CardSubtitle style={{ fontSize:'1.2rem',textAlign: 'start', marginBottom:20}}>{movie[0].overview}</CardSubtitle> 
        <CardText >{`Estreno: ${movie[0].release_date}`}</CardText>
        <CardText>{`Duracion : ${movie[0].runtime ===undefined ? "Sin definir" : movie[0].runtime + " minutos"}` }</CardText>
        <CardText style={{height:'max-content',
          overflowY:'hidden', fontWeight:"bolder", fontSize:"1.2rem" , border:'1px solid  #999f', padding:10, borderRadius:10}}>{`$ ${movie[0].precio}`}</CardText>

       
        <div className="container" style={{width:"100%"}}>
          <div className="row" style={{width:"100%" , marginLeft:0}}>
            <div className="col-5 justify-content-center align-items-center" style={{textAlign:'center'}}>
              <Button color="primary" className="d-flex justify-content-center align-items-center" style={{width:'', marginRight:0}} onClick={() => agregarAlCarrito()} >Agregar al carrito</Button>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <Button color="primary" onClick={() => restarSemana()}>-</Button>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <span style={{fontWeight:"bolder"}} >{semana.toString()} semana{semana == 1 ? "" :"s" }</span>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <Button className=""  color="primary" onClick={() => setSemana(semana+1)}>+</Button>
            </div>
          </div>
          <div className="row" style={{marginTop:20}}>
            <div className="col-12" style={{textAlign:"start" , fontWeight:"bolder", fontSize:"1.5rem"}}>
              Total $ {movie[0].precio === undefined ||movie[0].precio == 0 ? 0 :   semana * parseFloat(movie[0].precio)}
            </div>
          </div>
        </div>
      <ModalContainer  estado={CartData.productosCart} descripcion={` Titulo : ${movie[0].title} | 
                                                                     Semanas de alquiller: ${semana} | \n
                                                                     Total: $${semana * parseFloat(movie[0].precio)} \n`} titulo={"Sumado al carrito!"} botonCerrar={"Ok"}/>
      </CardBody>
    </Card>: ""
  );
};

export default ItemDetail;
