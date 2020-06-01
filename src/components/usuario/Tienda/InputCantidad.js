import React, {useState,useEffect} from 'react'
import {Form,Col,Alert} from 'react-bootstrap'

export default function InputCantidad({producto}) {

    const {id, nombre, descripcion, precio, agregado} = producto;

    const [hayStock,
        setHayStock] = useState('')

    const [cantidad,
        setCantidad] = useState(0)

    const handleCantidad = (e) => {
        setCantidad([e.target.name] = e.target.value)
        controlaStock()
        console.log(cantidad);
    }

    const [stockDis,
        setStockDisp] = useState(producto.stock)

    const controlaStock = () => {

        setStockDisp(producto.stock - cantidad)

        if (stockDis < 0) {
            setHayStock(false)
        } else {
            setHayStock(true)
        }
    }

    useEffect(() => {
        controlaStock()
    }, [handleCantidad])

    useEffect(() => {
        console.log(producto.stock);
        console.log(cantidad);
        console.log(stockDis);
    }, [cantidad])

    return (
        <Form>
            <Form.Row style={{
                margin: 0
            }}>
                <Col>
                    <Form.Control
                        style={{
                        margin: 0
                    }}
                        name='cantidad'
                        onChange={handleCantidad}
                        size='sm'
                        type='number'
                        placeHolder='Cantidad'/>
                </Col>
                <Col>
                    {(hayStock && producto.stock > 0)
                        ? <Alert variant='success'>
                                Articulo disponible
                            </Alert>
                        : ((producto.stock > 0 && stockDis < 0)
                            ? <Alert variant='danger'>
                                    Solo tenemos {producto.stock}
                                    disponible
                                </Alert>
                            : <Alert variant='danger'>
                                Sin stock
                            </Alert>)}
                </Col>
            </Form.Row>
        </Form>
    )
}
