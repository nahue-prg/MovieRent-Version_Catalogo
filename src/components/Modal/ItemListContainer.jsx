
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ItemListContainer(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='container modal-ofertas'>
      <Button color="primary" onClick={toggle}>
        Ofertas
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>PILCHAS CLUB - Ofertas</ModalHeader>
        <ModalBody>
          Proximamente te traeremos las ofertas mas novedosas de PILCHAS CLUB!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
             Aceptar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ItemListContainer;


