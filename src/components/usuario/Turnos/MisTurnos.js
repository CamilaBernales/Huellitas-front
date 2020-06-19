import React, { useEffect, useState } from "react";
import axiosConfig from "../../../config/axios";
import { Table, Button, Card } from "react-bootstrap";
import moment from "moment";
import Swal from "sweetalert2";

const MisTurnos = () => {
  let fecha = new Date();
  let fechaActual = moment(fecha).format("YYYY-MM-DD");
  console.log(fechaActual);
  const [misTurnos, setMisTurnos] = useState([]);
  const listarMisTurnos = () => {
    axiosConfig
      .get(`/api/turnos/listadoturno`)
      .then((res) => setMisTurnos(res.data.turnos))
      .catch((err) => console.log(err.response));
  };
  const cancelarTurno = (id) => {
    Swal.fire({
      title: "Estas seguro de que quieres cancelar este turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Sí, cancelar!",
    }).then((result) => {
      if (result.value) {
        axiosConfig
          .delete(`api/turnos/delete/${id}`)
          .then((res) => {
            console.log(res);
            Swal.fire(
              "Cancelado!",
              "El turno fue cancelado con éxito.",
              "success"
            );
            listarMisTurnos();
          })
          .catch((err) => console.log(err.response));
      }
    });
  };
  useEffect(() => {
    listarMisTurnos();
  }, []);
  return (
    <div>
      <h1>Tus turnos</h1>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {misTurnos.map((turno) => {
            if (turno.fecha < fechaActual) {
              return (
                <tr key={turno._id}>
                  <td>{turno.hora}</td>
                  <td>{turno.fecha}</td>
                </tr>
              );
            } else {
              return (
                <Card>
                  <Card.Header></Card.Header>
                  <Card.Body>
                    Fecha: {turno.fecha} Hora: {turno.hora}
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={() => cancelarTurno(turno._id)}>
                      <i className="fas fa-trash" />
                    </Button>
                  </Card.Footer>
                </Card>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MisTurnos;
