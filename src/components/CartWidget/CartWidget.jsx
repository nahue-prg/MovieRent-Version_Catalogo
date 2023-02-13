import React, { useContext, useState, useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Button } from "reactstrap";
import { Carrito } from "../../App";
import { Link } from "react-router-dom";
import styles from "../NavBar/styles.module.css";

const CartWidget = () => {
  const { productosCart } = useContext(Carrito);

  const [cuenta, setContador] = useState(0);

  useEffect(() => {
    setContador(productosCart.length);
    console.log("Se actualizo productosCart");
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
          style={{
            marginRight: 10,
            borderColor: "white",
            color: "white",
            borderWidth: 1,
            display: "inline-block",
            padding: 0,
            height: 27,
            width: 27,
            borderRadius: "100%",
          }}
          className={styles.boton}
        >
          {cuenta}
        </Button>
        <BsFillCartFill />
      </Link>
    </div>
  );
};

export default CartWidget;
