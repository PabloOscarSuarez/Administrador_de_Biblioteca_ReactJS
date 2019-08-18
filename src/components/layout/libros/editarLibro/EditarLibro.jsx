import React from "react";
import { Link } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBAnimation,
  MDBIcon
} from "mdbreact";

const EditarLibro = ({ libro, handleChange, handleSubmit }) => {
  return (
    <MDBAnimation type="fadeInLeft">
      <Link to="/">
        <MDBBtn color="teal darken-4" size="sm" className="mb-4">
          <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de Libros
        </MDBBtn>
      </Link>
      <MDBRow>
        <MDBCol md="6" style={{ margin: "auto" }}>
          <form className="mt-5" onSubmit={handleSubmit}>
            <p className="h5 text-center mb-4">Edicion de Datos</p>
            <div className="grey-text">
              <MDBInput
                valueDefault={libro.ISBN}
                label="ISBN"
                type="text"
                validate
                error="wrong"
                success="right"
                name="ISBN"
                onChange={handleChange}
              />
              <MDBInput
                valueDefault={libro.editorial}
                label="Editorial"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="editorial"
                onChange={handleChange}
              />
              <MDBInput
                valueDefault={libro.titulo}
                label="Titulo"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={handleChange}
                name="titulo"
              />
              <MDBInput
                valueDefault={libro.existencia}
                label="Cantidad"
                group
                type="number"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
                name="existencia"
              />
            </div>
            <div className="text-center">
              <button color="teal darken-4">Guardar Cambios</button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBAnimation>
  );
};

export default EditarLibro;
