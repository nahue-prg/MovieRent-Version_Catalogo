
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'

function ItemListContainer(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='container modal-ofertas'>
      <Button color="primary" onClick={toggle}>
        Catalogo de peliculas
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Movie | Rent</ModalHeader>
        <ModalBody>
          Proximamente series..
        </ModalBody>
        <ModalFooter>
        <Link to="/Peliculas" style={{textDecoration:'none', color:'white'}}>
            <Button color="primary" onClick={toggle}>
              Ver catalogo
            </Button>
          </Link>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ItemListContainer;


