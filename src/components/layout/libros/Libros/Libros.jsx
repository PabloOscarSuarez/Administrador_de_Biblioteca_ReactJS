import React from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon,
  MDBAnimation,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";

const EliminarLibro = ({ libros, eliminarLibro }) => {
  return (
    <>
      <Link to="/libros/nuevo">
        <MDBBtn color="teal darken-4" size="sm" className="mb-4">
          Nuevo Libro
        </MDBBtn>
      </Link>
      <MDBAnimation type="fadeInLeft">
        <h1>
          <MDBIcon far icon="address-book" /> Libros
        </h1>
        <MDBTable className="mt-5">
          <MDBTableHead color="teal darken-4" textWhite>
            <tr>
              <th>ISBN</th>
              <th>Titulo</th>
              <th>Editorial</th>
              <th className="text-center">Existencia</th>
              <th className="text-center">Disponible</th>
              <th className="text-center">Acciones</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {libros.map((libro, i) => {
              return (
                <tr key={i}>
                  <td>{libro.ISBN}</td>
                  <td>{libro.titulo}</td>
                  <td>{libro.editorial}</td>
                  <td className="text-center">{libro.existencia}</td>
                  <td className="text-center">
                    {libro.existencia - libro.prestado.length}
                  </td>

                  <td className="text-center">
                    <Link to={`/libros/${libro.id}`}>
                      <MDBBtn color="teal darken-4" size="sm" className="mt-0">
                        Info
                      </MDBBtn>
                    </Link>
                    <MDBBtn
                      color="teal darken-4"
                      size="sm"
                      className="mt-0"
                      onClick={() => eliminarLibro(libro.id)}
                    >
                      Eliminar
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBAnimation>
    </>
  );
};

export default EliminarLibro;
