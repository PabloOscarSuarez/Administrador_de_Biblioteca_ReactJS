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

const MostrarLibro = ({ libro }) => (
  <MDBAnimation type="fadeInLeft">
    <Link to="/">
      <MDBBtn color="teal darken-4" size="sm" className="mb-4">
        <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de Libros
      </MDBBtn>
    </Link>
    <MDBCard>
      <MDBCardHeader>
        <h1>
          <MDBIcon icon="address-book" /> Datos del libro
        </h1>
      </MDBCardHeader>
      <MDBCardBody>
        <p>ISBN: {libro.ISBN}</p>
        <p>Editorial: {libro.editorial}</p>
        <p>Titulo: {libro.titulo}</p>
        <p>Disponibilidad: {libro.existencia}</p>
      </MDBCardBody>
      <MDBCardFooter className="text-center">
        <Link to={`/libros/editar/${libro.id}`}>
          <MDBBtn color="teal darken-4" size="sm" className="mb-4 ml-5">
            <MDBIcon icon="user-edit" /> {""} Editar Libro
          </MDBBtn>
        </Link>
        <Link to={`/libros/prestamo/${libro.id}`}>
          <MDBBtn color="danger" size="sm" className="mb-4 ml-5">
            <MDBIcon icon="caret-right" /> {""} Solicitar Prestamo
          </MDBBtn>
        </Link>
      </MDBCardFooter>
    </MDBCard>
  </MDBAnimation>
);
export default MostrarLibro;
