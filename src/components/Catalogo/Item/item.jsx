import React, { useContext } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import styles from "./ItemStyles.css"
import { Carrito } from '../../../App';
import toast, { Toaster } from 'react-hot-toast';

const Item = ({id, title, overview, estreno, poster_path, precio, vote_average}) => {

  const carro = useContext(Carrito);


const agregarAlCarrito = () => {
  let aux = [...carro.productosCart];
  const index = aux.findIndex(producto => producto.id === id);
  index !== -1 ? aux[index].cantidad += 1 : aux.push({ id : id , title :  title ,  precio :  precio , cantidad:  1, imagen :  poster_path}) ;
  carro.setProductosCart(aux);
  console.log(carro.productosCart);
  //lanzarModal(!modal);
  toast(`La pelicula "${title}" fue agregada al carrito!!`, {
    icon: '🎬',
  });
}

  return (
    <Card className={styles.card} key={id} sm="6" >
      <CardImg top src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} style={{width:'100%'}}/>
      <CardBody>
          <CardTitle style={{fontSize:'1.2rem', height:'1.7rem', overflow:'hidden', marginBottom: 15}}><b>{title}</b></CardTitle>
          <CardSubtitle style={{fontWeight:'', marginBottom:5}}>{`Estreno: ${estreno}`}</CardSubtitle> 
          <CardText style={{height:'62px',
                          overflowY:'hidden',
                          marginBottom:0
                          }}>{overview}</CardText> 
                          <div style={{boxShadow:'0 0 12px rgba(0, 0, 0, 1px)', height:1, width:'100%', backgroundColor:'#dddddd88', marginBottom:20}}>
                          </div>   
          <CardText style={{height:'max-content',
          overflowY:'hidden', fontWeight:"bolder", fontSize:"1.2rem" , border:'1px solid  #ccca', padding:10, borderRadius:10}}>$ {precio}</CardText>    
          <div className="container">
            <div className="row">
              <div className="col-12" style={{textAlign:"center", marginBottom:10}}>
                <Link to={`/Peliculas/${id}`}>
                  <Button color="dark" style={{width:"90%"}}>Ver detalle</Button>
                </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{textAlign:"center"}}>
              <Button color="primary" style={{width:"90%"}} onClick={() => agregarAlCarrito()}>Agregar al carrito</Button>
            </div>
          </div>
          </div>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
      </CardBody>
     
    </Card>
  )
}
export default Item