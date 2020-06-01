import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { 
  Table, 
  Container, 
  Button, 
  Row, 
  Col, 
  InputGroup, 
  FormControl 
} from 'react-bootstrap';
import Navbaradmin from './Navbaradmin';

export default function Productosadmin () {
  const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) || []);
  const [disabled, setDisabled] = useState(true);
  const [editar, setEditar] = useState({
    idProducto: '',
    nombre: '',
    detalles: '',
    fecha: '',
    hora: ''
  });
  const usuarioReg = sessionStorage.getItem('usuarioReg');

  if (usuarioReg !== 'Administrador') {
    return (<Redirect to="/"/>);
  }

  const productosCode = [
    {
      idProducto: '01',
      nombre: 'Maria',
      detalles: 'Peluquería',
      fecha: '02/07/20',
      hora: '10:00'
    },
    {
      idProducto: '02',
      nombre: 'Pedro',
      detalles: 'Desparasitar',
      fecha: '04/07/20',
      hora: '14:00'
    },
    {
      idProducto: '03',
      nombre: 'Daniel',
      detalles: 'Vacuna',
      fecha: '05/07/20',
      hora: '10:00'
    }
  ];

  localStorage.setItem('productos', JSON.stringify(productosCode));

  const editarproducto = (id) => {
    setDisabled(false);
    const [productoSelec] = productos.filter(producto => producto.idProducto === id);
    setEditar({
      idProducto: productoSelec.idProducto,
      nombre: productoSelec.nombre,
      detalles: productoSelec.detalles,
      fecha: productoSelec.fecha,
      hora: productoSelec.hora
    });
  }

  const onChangeproducto = (e) => {
    e.preventDefault();
    setEditar({
      ...editar,
      [e.target.name]: e.target.value
    });
  }

  const onClickGuardar = () => {
    const productosFilt = productos.filter(producto => producto.idProducto !== editar.idProducto);
    const productosEdit = productosFilt.concat([editar]);
    setProductos(productosEdit);
    setEditar({
      idProducto: '',
      nombre: '',
      detalles: '',
      fecha: '',
      hora: ''
    });
    setDisabled(true);
  }

  const onClickCancelar = () => {
    setEditar({
      idProducto: '',
      nombre: '',
      detalles: '',
      fecha: '',
      hora: ''
    });
    setDisabled(true);
    return;
  }

  const eliminarproducto = (id) => {
    if (window.confirm('Desea eliminar este producto?')) {
      const productosFilt = productos.filter(producto => producto.idProducto !== id);
      localStorage.setItem('productos', JSON.stringify(productosFilt));
      setProductos(JSON.parse(localStorage.getItem('productos')));
    }
  }

  return (
    <Fragment>
      <Navbaradmin/>
      <Container className="d-flex flex-column justify-center py-5">
        <Row className="m-0 d-flex align-items-end">
          <Col className="pl-0">
            <label htmlFor="nombre"className="mb-0">Nombre</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="nombre" 
                aria-describedby="nombre"
                type="text"
                name="nombre"
                value={editar.nombre}
                onChange={onChangeproducto}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="detalles"className="mb-0">detalles</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="detalles" 
                aria-describedby="detalles" 
                type="text"
                name="detalles"
                value={editar.detalles}
                onChange={onChangeproducto}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="fecha"className="mb-0">Fecha</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="fecha" 
                aria-describedby="fecha" 
                type="text"
                name="fecha"
                value={editar.fecha}
                onChange={onChangeproducto}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="hora"className="mb-0">Hora</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="hora" 
                aria-describedby="hora" 
                type="text"
                name="hora"
                value={editar.hora}
                onChange={onChangeproducto}
              />
            </InputGroup>
          </Col>
          <Col className="p-0">
            <Button 
              disabled={disabled}
              className="mb-4" 
              size="sm"
              type="submit"
              onClick={onClickGuardar}
            >
              Guardar
            </Button>
            <Button 
              variant="outline-primary"
              disabled={disabled}
              className="mb-4 ml-3" 
              size="sm"
              type="submit"
              onClick={onClickCancelar}
            >
              Cancelar
            </Button>
          </Col>
        </Row>
        {
          productos.length === 0?
            <h2 className="p-3 mx-auto">No hay productos registardos</h2>
          :
            <Table striped bordered responsive size="sm">
              <thead>
                <tr>
                  <th>Producto Id</th>
                  <th>Nombre</th>
                  <th>Detalles del producto</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  productos.map((producto) => {
                    return(
                      <tr key={producto.idProducto}>
                        <td>{producto.idProducto}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.detalles}</td>
                        <td>{producto.fecha}</td>
                        <td>{producto.hora}</td>
                        <td className="text-center">
                          <Button onClick={() => editarproducto(producto.idProducto)}>
                            <i className="fas fa-edit"/>
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button onClick={() => eliminarproducto(producto.idProducto)}>
                            <i className="fas fa-trash"/>
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
        }
      </Container>
    </Fragment>
  );
}