import React, { useContext, useState } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import styles from "./ItemStyles.css"
import { Carrito } from '../../../App';
import ModalContainer from '../../Modal/ModalContainer';

const Item = ({id, title, overview, estreno, poster_path, precio, vote_average}) => {

  const carro = useContext(Carrito);
  const [modal, lanzarModal] = useState(false);


const agregarAlCarrito = () => {
  let aux = [...carro.productosCart];
  const index = aux.findIndex(producto => producto.id === id);
  index !== -1 ? aux[index].cantidad += 1 : aux.push({ id : id , title :  title ,  precio :  precio , cantidad:  1 }) ;
  carro.setProductosCart(aux);
  console.log(carro.productosCart);
  lanzarModal(!modal);
}

  return (
    <Card className={styles.card} key={id} sm="6" >
       <ModalContainer estado={modal} descripcion={` Titulo : ${title} | Total: ${precio} `} titulo={"Sumado al carrito!"} botonCerrar={"Ok"}/>
      <CardImg top src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} style={{width: '100%'}}/>
      <CardBody>
          <CardTitle style={{fontSize:'1.2rem', height:'1.7rem', overflow:'hidden'}}><b>{title}</b></CardTitle>
          <CardSubtitle>{`Estreno: ${estreno}`}</CardSubtitle> 
          <CardText style={{height:'110px',
                          overflowY:'hidden',
                          marginBottom:0
                          }}>{overview}</CardText> 
                          <div style={{boxShadow:'0px 0px 10px rgba( 0, 10px, 10px, 10px)', height:2, width:'100%', backgroundColor:'#ccc', marginBottom:15}}>
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
      </CardBody>
     
    </Card>
  )
}
export default Item