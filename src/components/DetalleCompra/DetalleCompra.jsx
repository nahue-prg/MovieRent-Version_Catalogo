import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Carrito } from "../../App";
import { Button } from "reactstrap";
import styles from "./styles.module.css";
import FilaDetalle from "./FilaDetalle";

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
    <div className="container" style={{ marginTop: 20 }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Carrito</h1>
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
        <div>El carrito esta vacio</div>
      )}
      {carrito.productosCart.length > 0 ? (
        <div>
          <div>
            <span>
              Total: $
              {carrito.productosCart
                .map((x) => x.precio * x.cantidad)
                .reduce((a, b) => a + b, 0)}{" "}
            </span>
          </div>
          <div>
           <Link to="/Pagar"><Button color="success">Finalizar compra</Button></Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetalleCompra;
