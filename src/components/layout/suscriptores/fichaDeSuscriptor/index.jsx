import React from "react";
import { MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";
const FichaSuscriptor = ({ alumno, solicitarPrestamo }) => {
  return alumno.nombre ? (
    <MDBAnimation type="fadeInLeft">
      <div className="card my-3">
        <h3 className="card-header black text-white">Datos Solicitante</h3>

        <div className="card-body">
          <p className="font-weight-bold">
            Nombre: {""}
            <span className="font-weight-normal">{alumno.nombre}</span>
          </p>
          <p className="font-weight-bold">
            Apellido: {""}
            <span className="font-weight-normal">{alumno.apellido}</span>
          </p>
          <p className="font-weight-bold">
            Código: {""}
            <span className="font-weight-normal">{alumno.codigo}</span>
          </p>
          <p className="font-weight-bold">
            Carrera: {""}
            <span className="font-weight-normal">{alumno.carrera}</span>
          </p>
        </div>
        <MDBBtn
          color="teal darken-4"
          className="mb-4"
          size="sm"
          onClick={solicitarPrestamo}
        >
          <MDBIcon icon="caret-right" /> {""} Solicitar Prestamo
        </MDBBtn>
      </div>
    </MDBAnimation>
  ) : (
    <MDBAnimation>
      <div className="alert alert-danger text-center font-weight-bold">
        No hay resultados para ese código.
      </div>
    </MDBAnimation>
  );
};

export default FichaSuscriptor;
