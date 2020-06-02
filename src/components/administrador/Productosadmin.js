import React, { Fragment, useState, useEffect } from 'react';
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
import { v4 as uuidv4 } from 'uuid';

export default function Productosadmin () {
  const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) || []);
  const [disabled, setDisabled] = useState(true);
  const [entrada, setEntrada] = useState({
    idProducto: '',
    nombre: '',
    detalles: '',
    precio: '',
    stock: ''
  });
  const [agregarProducto, setAgregarProducto] = useState(true);
  const [disabledAgregar, setDisabledAgregar] = useState(false);
  const usuarioReg = sessionStorage.getItem('usuarioReg');

  if (usuarioReg !== 'Administrador') {
    return (<Redirect to="/"/>);
  }

  const productosCode = [
    {
      idProducto: '01',
      nombre: 'Alimento perros',
      detalles: 'Alimento balanzeado',
      precio: '$200.00',
      stock: '5'
    },
    {
      idProducto: '02',
      nombre: 'Collar pulgas',
      detalles: 'Collar para pulgas',
      precio: '$400.00',
      stock: '8'
    },
    {
      idProducto: '03',
      nombre: 'Alimento gatos',
      detalles: 'Alimento balanzeado',
      precio: '$300.00',
      stock: '15'
    }
  ];

  if (JSON.parse(localStorage.getItem('productos')).legth <= 3) {
    localStorage.setItem('productos', JSON.stringify(productosCode));
  }

  
  const editarProducto = (id) => {
    setDisabledAgregar(true);
    setAgregarProducto(true);
    setDisabled(false);
    const [productoSelec] = productos.filter(producto => producto.idProducto === id);
    setEntrada({
      idProducto: productoSelec.idProducto,
      nombre: productoSelec.nombre,
      detalles: productoSelec.detalles,
      precio: productoSelec.precio,
      stock: productoSelec.stock
    });
  }

  const onChangeProducto = (e) => {
    e.preventDefault();
    if (!agregarProducto) {
      setEntrada({
        ...entrada,
        idProducto: uuidv4(),
        [e.target.name]: e.target.value
      });
      return;
    }
    setEntrada({
      ...entrada,
      [e.target.name]: e.target.value
    });
  }

  const onClickGuardar = () => {
    setDisabledAgregar(false);
    if (!agregarProducto) {
      if (entrada.nombre === '' || entrada.detalles === '' || entrada.precio === '' || entrada.stock === '') {
        alert('Por favor llenar todos los campos');
        return;
      }
      const productosPrev = JSON.parse(localStorage.getItem('productos'));
      const productosActu = productosPrev.concat([entrada])
      setProductos(productosActu);
      localStorage.setItem('productos', JSON.stringify(productosActu));
      console.log(JSON.parse(localStorage.getItem('productos')));
      setEntrada({
        nombre: '',
        detalles: '',
        precio: '',
        stock: ''
      });
    } else {
      const productosFilt = productos.filter(producto => producto.idProducto !== entrada.idProducto);
      const productosEditado = productosFilt.concat([entrada]);
      setProductos(productosEditado);
      localStorage.setItem('productos', JSON.stringify(productosEditado));
      setEntrada({
        nombre: '',
        detalles: '',
        precio: '',
        stock: ''
      });
    }
    setDisabled(true);
  }


  const onClickCancelar = () => {
    setDisabledAgregar(false);
    setEntrada({
      nombre: '',
      detalles: '',
      precio: '',
      stock: ''
    });
    setDisabled(true);
  }

  const onClickAgregarProducto = () => {
    setDisabled(false);
    setAgregarProducto(false);
  }

  const onClickTerminarProducto = () => {
    setEntrada({
      nombre: '',
      detalles: '',
      precio: '',
      stock: ''
    });
    setDisabled(true);
    setAgregarProducto(true);
  }

  const eliminarProducto = (id) => {
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
                value={entrada.nombre}
                onChange={onChangeProducto}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="detalles"className="mb-0">Detalles</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="detalles" 
                aria-describedby="detalles" 
                type="text"
                name="detalles"
                value={entrada.detalles}
                onChange={onChangeProducto}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="precio"className="mb-0">Precio</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="precio" 
                aria-describedby="precio" 
                type="text"
                name="precio"
                value={entrada.precio}
                onChange={onChangeProducto}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="stock"className="mb-0">Stock</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="stock" 
                aria-describedby="stock" 
                type="text"
                name="stock"
                value={entrada.stock}
                onChange={onChangeProducto}
              />
            </InputGroup>
          </Col>
          <Col className="p-0 d-flex justify-content-end">
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
        <Row>
          {
            agregarProducto ?
              <Col className="d-flex justify-content-end">
                <Button 
                  disabled={disabledAgregar}
                  className="mb-3"
                  size="sm"
                  onClick={onClickAgregarProducto}
                >
                  Agregar producto
                </Button>
              </Col>
            :
              <Col className="d-flex justify-content-end">
                <Button 
                  className="mb-3"
                  size="sm"
                  onClick={onClickTerminarProducto}
                >
                  Terminar
                </Button>
              </Col>
          }
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
                  <th>Precio</th>
                  <th>Stock</th>
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
                        <td>{producto.precio}</td>
                        <td>{producto.stock}</td>
                        <td className="text-center">
                          <Button onClick={() => editarProducto(producto.idProducto)}>
                            <i className="fas fa-edit"/>
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button onClick={() => eliminarProducto(producto.idProducto)}>
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