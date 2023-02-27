import React, { useContext, useRef, useEffect, useState, useHistory} from "react";
import IconCross from "./../Icons/IconCross";
import "./Content.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Carrito } from "../../App";
import toast, { Toaster } from "react-hot-toast";
import styles from "./styles.module.css";

const Content = ({
  movie,
  onClose,
}) => {
  const carro = useContext(Carrito);
  const [carrito, setCarrito] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  const agregarAlCarrito = () => {
    let aux = [...carro.productosCart];
    const index = aux.findIndex((producto) => producto.id === movie.id);
    index !== -1
      ? (aux[index].cantidad += 1)
      : aux.push({
          id: movie.id,
          title: movie.title,
          precio: movie.precio,
          cantidad: 1,
          imagen: movie.poster_path,
        });
    carro.setProductosCart(aux);
    console.log(carro.productosCart);
    toast(`La pelicula "${movie.title}" fue agregada al carrito!!`, {
      icon: "🎬",
    });
  };

  const onBlurHandler = (event) => {
    if (!divRef.current.contains(event.relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    if (carrito){
      agregarAlCarrito(); 
      setCarrito(false);
    }
  }, [carrito])

  return (
    <div
      tabIndex={0}
      onBlur={(event) => onBlurHandler(event)}
      style={{
        width: 300,
        margin: "auto",
      }}
      ref={divRef}
    >
<Card className={styles.card} key={movie.id} sm="6" >
<CardImg top src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} style={{width:'100%'}}/>
<CardBody>
    <CardTitle style={{fontSize:'1.2rem', height:'1.7rem', overflow:'hidden', marginBottom: 15}}><b>{movie.title}</b></CardTitle>
    <CardSubtitle style={{fontWeight:'', marginBottom:5}}>{`Estreno: ${movie.estreno}`}</CardSubtitle> 
    <CardText style={{height:'62px',
                    overflowY:'hidden',
                    marginBottom:0
                    }}>{movie.overview}</CardText> 
                    <div style={{boxShadow:'0 0 12px rgba(0, 0, 0, 1px)', height:1, width:'100%', backgroundColor:'#dddddd88', marginBottom:20}}>
                    </div>   
    <CardText style={{height:'max-content',
    overflowY:'hidden', fontWeight:"bolder", fontSize:"1.2rem" , border:'1px solid  #ccca', padding:10, borderRadius:10}}>$ {movie.precio}</CardText>    
    <div className="container">
      <div className="row">
        <div className="col-12" style={{textAlign:"center", marginBottom:10}}>
          <Link to={`/Peliculas/${movie.id}`}>
            <Button color="dark" style={{width:"90%"}}>Ver detalle</Button>
          </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-12" style={{textAlign:"center"}}>
        <Button color="primary" style={{width:"90%"}} onClick={() => setCarrito(true) }>Agregar al carrito</Button>
      </div>
    </div>
    </div>
</CardBody>
<button
          className="content__close"
          onClick={onClose}
          style={{ backgroundColor: "#00000099", borderRadius: "100%" }}
        >
          <IconCross style={{ color: "black" }} />
        </button>
</Card>
<Toaster
  position="top-center"
  reverseOrder={false}
  />
    </div>
  );
};

export default Content;




