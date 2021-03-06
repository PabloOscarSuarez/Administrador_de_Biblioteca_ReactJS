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

const MostrarLibro = ({ libro, devolverLibro }) => (
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
        <p>Disponibilidad: {libro.existencia - libro.prestado.length}</p>
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
    <div className="mt-3">
      <h3 className="my-2">
        {" "}
        <strong>Personas que tienen el Libro Prestado :</strong>
      </h3>
      {libro.prestado.length === 0 ? (
        <div className="alert alert-success" role="alert">
          Nadie tiene que devolver el libro Stock completo
        </div>
      ) : (
        libro.prestado.map(prestado => (
          <div key={prestado.codigo} className="card my-2">
            <h4 className="card-header">
              {prestado.nombre} {prestado.apellido}
            </h4>

            <div className="card-body">
              <p>
                <span className="font-weight-bold">Código:</span> {""}
                {prestado.codigo}
              </p>

              <p>
                <span className="font-weight-bold">Carrera:</span> {""}
                {prestado.carrera}
              </p>

              <p>
                <span className="font-weight-bold">Fecha Solicitud:</span> {""}
                {prestado.fecha_solicitud}
              </p>
            </div>

            <div className="card-footer">
              <button
                type="button"
                className="btn btn-success font-weight-bold"
                onClick={() => devolverLibro(prestado.codigo)}
              >
                {" "}
                Realizar Devolución{" "}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </MDBAnimation>
);
export default MostrarLibro;
