import React, { useState, useEffect, useContext } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../db/firebasea-config";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import { Carrito } from "../../App";
import { Navigate  } from 'react-router-dom';
import Loader from "../Loader/Loader";
import toast, { Toaster } from 'react-hot-toast';

const FormularioPago = () => {

  const carrito = useContext(Carrito);
  const [email, setEmail] = useState("");
  const [emailR, setEmailR] = useState("");
  const [nroTarjeta, setNroTarjeta] = useState("");
  const [fExpiracion, setFexpiracion] = useState("");
  const [cSeguridad, setCSeguridad] = useState("");
  const [emailValidoPri, setEmailValidoPri] = useState(null);
  const [emailValido, setEmailValido] = useState(null);
  const [tarjetaValida, setTarjetaValida] = useState(null);
  const [expiracionValida, setExpiracionValida] = useState(null);
  const [cSeguridadValido, setCSeguridadValido] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = collection(db, "Pedidos");

  /*INPUT VERDE = <Input valid /> */
  /*INPUT ROJO = <Input invalid /> */
  /*Texto abajo = <FormFeedback valid>Sweet! that name is available</FormFeedback>*/

  const checkoutPago = (e) =>{
    e.preventDefault();
  if( email.length > 0 && emailR.length > 0 && nroTarjeta.length > 0 && fExpiracion.length > 0 && cSeguridad.length > 0 )
    validarForm() === true ? EnviarPedido() : toast.error("Los datos ingresados no son validos")
  else
    toast.error("Llene el formulario para continuar con el pago.")
  }

  const EnviarPedido = async () =>{
    setIsLoading(true);
    const docRef = await addDoc((ref),{
        email : email,
        total : "$" + carrito.productosCart
        .map((x) => x.precio * x.cantidad)
        .reduce((a, b) => a + b, 0),
        productos: carrito.productosCart
        .map((x) => ({id: x.id, title: x.title, cantidad: x.cantidad, precio: x.precio}))

    });
    alert("Numero de pedido: " + docRef.id)
    carrito.setProductosCart([]);
    setShouldRedirect(true);
    setIsLoading(false);
  }

  const validarForm = () => {
    if(emailValidoPri && emailValido && tarjetaValida && expiracionValida && cSeguridadValido){
      return true;
    }
    else return false;
  };

  const validarFExpirtacion = () => {
    isExpiryDateValid(fExpiracion) ? setExpiracionValida(true) : setExpiracionValida(false);
  }

  const  validarTarjeta = () =>{
    !isNaN(nroTarjeta) && nroTarjeta.length >= 13 && nroTarjeta.length <= 16 ? setTarjetaValida(true) : setTarjetaValida(false);
  }

  const validarCodigo = () => {
    isSecurityCodeValid(cSeguridad) ? setCSeguridadValido(true) : setCSeguridadValido(false);
  }

  function isExpiryDateValid(expiryDate) {
    try {
      if (
        expiryDate.length == 5 &&
        expiryDate[2] == "/" &&
        !isNaN(expiryDate.substr(3, 2)) &&
        !isNaN(expiryDate.substr(0, 2))
      ) {
        let expiry = new Date(
          `20${expiryDate.substr(3, 2)}`,
          expiryDate.substr(0, 2) - 1
        );
        let currentDate = new Date();
        return expiry >= currentDate;
      } else return false;
    } catch (ex) {
      console.log(ex.toString());
      return false;
    }
  }

  const isSecurityCodeValid = (securityCode) => {
    if (!isNaN(securityCode) && securityCode.length == 3) 
      return true;
    else 
      return false;
  }

  const validateEmail = () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(String(email).toLowerCase())? setEmailValidoPri(true) : setEmailValidoPri(false);
    
    validarEmailCopia();
  }

  const validarEmailCopia = () => {
    email === emailR ? setEmailValido(true) : setEmailValido(false);
  }

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  return (
    <main style={{marginTop:60}}>
    <h1 style={{textAlign:'center'}}>Formulario de pago</h1>
      {carrito.productosCart.length > 0 ? (
        <>
        <Form className="container" style={{maxWidth:600, marginTop:30}}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              invalid={emailValidoPri === false}
              valid={emailValidoPri === true}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
               onBlur={() => validateEmail()}
            />
            <FormFeedback invalid>
              El email ingresado no es valido
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Repita su email</Label>
            <Input
              type="email"
              invalid={emailValido === false}
              valid={emailValido === true}
              onChange={(e) => setEmailR(e.target.value)}
               onBlur={() => validarEmailCopia()}
            />
            <FormFeedback invalid>
              Los emails ingresados no coinciden
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Numero de tarjeta</Label>
            <Input
              invalid={tarjetaValida === false}
              valid={tarjetaValida === true}
              onChange={(e) => setNroTarjeta(e.target.value)}
               onBlur={() => validarTarjeta()}
            />
            <FormFeedback invalid>
              La tarjeta ingresada no es valida! Debe ser numerica y contener
              entre 13 y 16 caracteres.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Fecha de expiracion</Label>
            <Input
              invalid={expiracionValida === false}
              valid={expiracionValida === true}
              placeholder="MM/YY *"
              onChange={(e) => setFexpiracion(e.target.value)}
               onBlur={() => validarFExpirtacion()}
            />
            <FormFeedback invalid>
              La fecha de expiracion no es valida (MM/YY)
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Codigo de seguridad</Label>
            <Input
              invalid={cSeguridadValido === false}
              valid={cSeguridadValido === true}
              placeholder="CVV *"
              onChange={(e) => setCSeguridad(e.target.value)}
               onBlur={() => validarCodigo()}
            />
            <FormFeedback invalid>
              El codigo de seguridad no es valido! Debe ser numerico y de 3
              digitos.
            </FormFeedback>
          </FormGroup>
          <FormGroup></FormGroup>
          <Button disabled={isLoading===true} color="success" onClick={(event) => checkoutPago(event)}>Realizar pago</Button>
        </Form>
         {isLoading === true ? <Loader padding={30}/> :  ""}
         </>
      ) : (
        <h4 style={{textAlign:'center', color:'red'}}>
          No hay alquileres agregados para pagar. Agregue su contenido favorito y
          luego realize el pago.
        </h4>
      )}
       <Toaster
        position="top-center"
        reverseOrder={false}
        />
    </main>
  );
};

export default FormularioPago;
