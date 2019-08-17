import React from "react";
import {
  MDBIcon,
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter
} from "mdbreact";
import { Link } from "react-router-dom";

const MostrarSuscriptor = ({ suscriptor }) => (
  <MDBAnimation type="fadeInLeft">
    <Link to="/suscriptores">
      <MDBBtn color="teal darken-4" size="sm" className="mb-4">
        <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de Suscriptores
      </MDBBtn>
    </Link>
    <MDBCard>
      <MDBCardHeader>
        <h1>
          <MDBIcon icon="info" /> Datos Personales del Suscriptor
        </h1>
      </MDBCardHeader>
      <MDBCardBody>
        <p>Nombre: {suscriptor.nombre}</p>
        <p>Apellido: {suscriptor.apellido}</p>
        <p>Carrera: {suscriptor.carrera}</p>
        <p>Codigo: {suscriptor.codigo}</p>
      </MDBCardBody>
      <MDBCardFooter className="text-center">
        <Link to={`/suscriptores/editar/${suscriptor.id}`}>
          <MDBBtn color="teal darken-4" size="sm" className="mb-4 ml-5">
            <MDBIcon icon="user-edit" /> {""} Editar Suscriptor
          </MDBBtn>
        </Link>
      </MDBCardFooter>
    </MDBCard>
  </MDBAnimation>
);
export default MostrarSuscriptor;
