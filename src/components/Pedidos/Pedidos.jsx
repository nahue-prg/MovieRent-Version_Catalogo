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
  Navbar,
} from "reactstrap";
import styles from './styles.module.css'
import { getWhereItems, getItemWhereIdDoc } from "../../code/funcionesComunes";
import DetallePedido from "./DetallePedido";

const Pedidos = () => {
    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");
    const [emailValido, setEmailValido] = useState(null);
    const [codigoValido, setCodigoValido] = useState(null);
    const [pedidoPorCodigo,setPedidoPorCodigo] = useState({});
    const [pedidosPorEmail,setPedidosPorEmail] = useState([]);

    const validateEmail = () => {
        if (email.length > 5){
        let re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(String(email).toLowerCase())? setEmailValido(true) : setEmailValido(false);
        }
    }

    const BuscarPorMail = async (e) =>{
        e.preventDefault();
        console.log("pedido por mail");
        let pedidos = await getWhereItems("Pedidos","email","==",email.toString())
        setPedidosPorEmail(pedidos);
    }

    const BuscarPorCodigo = async (e) =>{
        e.preventDefault();
        let pedidos = await getItemWhereIdDoc("Pedidos", codigo)
        setPedidoPorCodigo(pedidos)
        if(pedidos == null) 
            setCodigoValido(false)
        else 
            setCodigoValido(true)
    }



  return (
    <main >
        <h1>Mis pedidos</h1>
        <Form className="container" style={{maxWidth:600, marginTop:30}}>
          <FormGroup>
            <h3>Pedidos por mail</h3>
            <Label>Email</Label>
            <Input
              invalid={emailValido === false}
              valid={emailValido === true}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
               onBlur={() => validateEmail()}
            />
            <FormFeedback invalid>
              El email ingresado no es valido
            </FormFeedback>
          </FormGroup>
          <Button color="success" onClick={(event) => BuscarPorMail(event)}>Buscar</Button>
        </Form>
        <section>
        {pedidosPorEmail.length >0 ?
        pedidosPorEmail.map((x) => (
            <DetallePedido key={x.id} pedidos={x}/>
        ))
        :""}
        </section>
          <Form className="container" style={{maxWidth:600, marginTop:30}}>
          <FormGroup>
            <h3>Pedido por codigo</h3>
            <Label for="exampleEmail">Codigo de pedido</Label>
            <Input
              invalid={codigoValido === false}
              valid={codigoValido === true}
              onChange={(e) => setCodigo(e.target.value)}
            />
             <FormFeedback invalid>
              Codigo no valido
            </FormFeedback>
          </FormGroup>
          <Button color="success" onClick={(event) => BuscarPorCodigo(event)}>Buscar</Button>
        </Form>
        <section>
        {pedidoPorCodigo!==null ?
         <DetallePedido pedidos={pedidoPorCodigo}/>
        :""}
        </section>
    </main>
  )
}

export default Pedidos