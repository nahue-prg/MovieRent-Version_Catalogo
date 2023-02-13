import React, { useState, useEffect, useContext } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";
import { Carrito } from "../../App";

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

  /*INPUT VERDE = <Input valid /> */
  /*INPUT ROJO = <Input invalid /> */
  /*Texto abajo = <FormFeedback valid>Sweet! that name is available</FormFeedback>*/

  const validarForm = (e) => {
    e.preventDefault();
    validateEmail(email) ? setEmailValidoPri(true) : setEmailValidoPri(false);
    email === emailR ? setEmailValido(true) : setEmailValido(false);
    !isNaN(nroTarjeta) && nroTarjeta.length >= 13 && nroTarjeta.length <= 16 ? setTarjetaValida(true) : setTarjetaValida(false);
    isExpiryDateValid(fExpiracion) ? setExpiracionValida(true) : setExpiracionValida(false);
    isSecurityCodeValid(cSeguridad) ? setCSeguridadValido(true) : setCSeguridadValido(false);
  };

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

  function isSecurityCodeValid(securityCode) {
    if (!isNaN(securityCode) && securityCode.length == 3) return true;
    else return false;
  }

  function validateEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <>
      {carrito.productosCart.length > 0 ? (
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Repita su email</Label>
            <Input
              invalid={emailValidoPri === false}
              valid={emailValidoPri === true}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
            />
            <FormFeedback invalid>
              El codigo de seguridad no es valido! Debe ser numerico y de 3
              digitos.
            </FormFeedback>
          </FormGroup>
          <FormGroup></FormGroup>
          <Button onClick={(event) => validarForm(event)}>Submit</Button>
        </Form>
      ) : (
        <div>
          No hay alquileres agregados par pagar. Agregue su contenido favorito y
          luego realize el pago.
        </div>
      )}
    </>
  );
};

export default FormularioPago;
