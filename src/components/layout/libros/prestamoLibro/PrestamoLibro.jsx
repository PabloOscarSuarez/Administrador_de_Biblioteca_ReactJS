import React from "react";
import {
  MDBIcon,
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBInput
} from "mdbreact";
import { Link } from "react-router-dom";
import Spiner from "../../spiner";

import FichaSuscriptor from "../../suscriptores/fichaDeSuscriptor";

function PrestamoLibro({
  libro,
  leerDato,
  buscarAlumno,
  resultadoAlumnos,
  solicitarPrestamo
}) {
  return (
    <MDBAnimation type="fadeInLeft">
      <Link to="/">
        <MDBBtn color="teal darken-4" size="sm" className="mb-5 mt-0">
          <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de Libros
        </MDBBtn>
      </Link>
      <MDBCard className="w-75" style={{ margin: "auto" }}>
        <MDBCardHeader>
          <MDBIcon icon="address-book" /> Titulo del libro para solicitud de
          prestamo <strong>{libro.titulo} </strong>, Disponibilidad: {""}
          <strong>{libro.existencia}</strong>
        </MDBCardHeader>
      </MDBCard>
      <MDBCard className="text-center mt-4 w-75" style={{ margin: "auto" }}>
        <MDBCardHeader>
          <strong> Buscar Alumno solicitante</strong>
          <p>Para mayor eficacia buscar por Numero de legajo </p>
        </MDBCardHeader>
        <MDBInput
          className="w-50"
          style={{ margin: "auto" }}
          onChange={leerDato}
          name="busqueda"
        >
          Ingresar datos del Alumno
        </MDBInput>
        <MDBBtn
          color="teal darken-4"
          className="mb-4"
          size="sm"
          onClick={buscarAlumno}
        >
          <MDBIcon icon="caret-right" /> {""} Buscar
        </MDBBtn>
      </MDBCard>
      {resultadoAlumnos === "" ? (
        <div className="text-center mt-2">
          <p>
            <strong>Escuchando el ingreso de datos...</strong>
          </p>
          <Spiner />
        </div>
      ) : (
        <FichaSuscriptor
          alumno={resultadoAlumnos}
          solicitarPrestamo={solicitarPrestamo}
        />
      )}
    </MDBAnimation>
  );
}

export default PrestamoLibro;
