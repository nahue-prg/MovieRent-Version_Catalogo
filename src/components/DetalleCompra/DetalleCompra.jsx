import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Carrito } from "../../App";
import { Button } from "reactstrap";
import FilaDetalle from "./FilaDetalle";
import { BsFillCartFill } from "react-icons/bs";
const DetalleCompra = () => {
  const carrito = useContext(Carrito);
  const [semanas, setSemanas] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    renderConfig();
  }, [carrito.productosCart]);

  const renderConfig = () => {
    const semanasArray = carrito.productosCart.map((x) => x.cantidad);
    setSemanas(semanasArray);
    setProductos(carrito.productosCart);
  };

  const handleChangeSemana = (index, semana) => {
    const newSemanas = [...semanas];
    newSemanas[index] = semana;
    setSemanas(newSemanas);
    modificarCarrito(index, semana);
  };

  const modificarCarrito = (index, semana) => {
    const Productos = [...carrito.productosCart];
    Productos[index].cantidad = semana;
    carrito.setProductosCart(Productos);
    console.log("Carrito modificado desde el detalle de la compra: ");
    console.log(carrito.productosCart);
  };

  const quitarDelCarrito = (id) => {
    const Productos = [...carrito.productosCart];
    let filtrados = Productos.filter((x) => x.id !== id);
    carrito.setProductosCart(filtrados);
  };

  return (
    <div className="container" style={{ marginTop: 35, marginBottom:30 }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ textAlign: "center" }}>
          <h1 style={{fontWeight:'lighter', display:'inline-block', marginRight:10, marginBottom:0}}>Carrito </h1> <BsFillCartFill style={{fontSize:'1.5rem'}}/>
      </div>
      {productos.length > 0 ? (
        productos.map((element, index) => {
          return (
            <FilaDetalle
              key={index}
              nombre={element.title}
              precio={element.precio}
              imagen={element.imagen}
              semana={semanas[index]}
              id={element.id}
              quitarDelCarrito={(index) => quitarDelCarrito(index)}
              onChangeSemana={(semana) => handleChangeSemana(index, semana)}
            />
          );
        })
      ) : (
        <h4 style={{textAlign:'center', color:'', marginTop:30}}>Ups.. el carrito esta vacio</h4>
      )}
      {carrito.productosCart.length > 0 ? (
        <div className="row" >
        <div className="container">
          <div className="row" >
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-4" style={{textAlign:'center'}}>
              <span style={{textAlign:'center', display:'inline-block' , fontSize:'1.5rem'}}>
                    <b>Total:</b> $
                    {carrito.productosCart
                      .map((x) => x.precio * x.cantidad)
                      .reduce((a, b) => a + b, 0)}{" "}
                  </span>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-4" style={{textAlign:'center'}}>
              <Link to="/Pagar"><Button color="success" style={{fontSize:'1.4rem'}}>Finalizar compra</Button></Link>
            </div>
          </div>
        </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetalleCompra;
