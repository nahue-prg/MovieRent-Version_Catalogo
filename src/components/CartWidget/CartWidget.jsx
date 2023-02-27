import React, { useContext, useState, useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Button } from "reactstrap";
import { Carrito } from "../../App";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const CartWidget = () => {
  const { productosCart } = useContext(Carrito);

  const [cuenta, setContador] = useState(0);

  useEffect(() => {
    setContador(productosCart.length);
  }, [productosCart]);

  return (
    <div
      style={{
        display: "inline-block",

        color: "white",
      }}
    >
      <Link
        to="/Carrito"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Button
          color="white"
          className={styles.botonOpe}
        >
          <div >{cuenta}</div>
        </Button>
        <BsFillCartFill style={{marginRight:5, fontSize:'1.3rem'}}/>
      </Link>
    </div>
  );
};

export default CartWidget;
