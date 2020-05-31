import React from 'react'
import {Modal, Button} from 'react-bootstrap'
require("react-bootstrap/ModalHeader")

export default function ModalProducto({modalShow, producto, setModalShow, onHide}) {
  
  console.log(modalShow);

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {producto.nombre}
        </Modal.Title>
      <button type="button" class="close" data-dismiss="modal" onClick={onHide}>&times;</button>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

