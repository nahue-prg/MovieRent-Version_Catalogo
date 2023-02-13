
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'

function ModalContainer({botonActivador, titulo, descripcion, botonAccion, botonURL,botonCerrar, estado} ) {
  const [modal, setModal] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  
  /*
  Si tiene botonActivador se va a 
  utilizar como unico disparador del modal */
  const toggle = () => setModal(!modal);

  const configInicial = () =>{
    /*Si no se paso boton activador ni estado, se muestra por unica vez 
    al cargarse el componente*/
    if(botonActivador===undefined && estado === undefined){
      setModal(!modal);
    }
  }

  /*Efecto utilizado para manejar modal con estado (prop) externo de componente padre*/
  useEffect(() => {
    if (estado !== undefined && firstRender === false) {
      setModal(!modal)
    }
    setFirstRender(false);
  }, [estado !== undefined ? estado : null])

useEffect(() => {
  configInicial();
}, [])

  return (
    <div className='container modal-ofertas' style={{margin:0}}>
      {
        botonActivador!==undefined 
        ? 
          <Button color="primary" onClick={toggle}>
            {botonActivador}
          </Button> 
        : 
          ""
      }
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{titulo}</ModalHeader>
        <ModalBody>
          {descripcion !== undefined? descripcion : "Prop descripcion undefined"}
        </ModalBody>
        <ModalFooter>
        
              {
            botonAccion !== undefined  
            ? 
              <Link to={botonURL} style={{textDecoration:'none', color:'white'}}>
                <Button color="primary" onClick={toggle}>
                  {botonAccion}
                </Button> 
              </Link>
            : 
              ""}
          
          <Button color="secondary" onClick={toggle}>
            {botonCerrar !== undefined ? botonCerrar : "Cancelar"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalContainer;


