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

const MostrarSuscriptor = ({ suscriptor, handleChange, handleSubmit }) => {
  return (
    <MDBAnimation type="fadeInLeft">
      <Link to="/suscriptores">
        <MDBBtn color="teal darken-4" size="sm" className="mb-4">
          <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de Suscriptores
        </MDBBtn>
      </Link>
      <MDBRow>
        <MDBCol md="6" style={{ margin: "auto" }}>
          <form className="mt-5" onSubmit={handleSubmit}>
            <p className="h5 text-center mb-4">Edicion de Datos</p>
            <div className="grey-text">
              <MDBInput
                valueDefault={suscriptor.nombre}
                label="Nombre"
                type="text"
                validate
                error="wrong"
                success="right"
                name="nombre"
                onChange={handleChange}
              />
              <MDBInput
                valueDefault={suscriptor.apellido}
                label="Apellido"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="apellido"
                onChange={handleChange}
              />
              <MDBInput
                valueDefault={suscriptor.carrera}
                label="Carrera"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={handleChange}
                name="carrera"
              />
              <MDBInput
                valueDefault={suscriptor.codigo}
                label="Legajo"
                group
                type="text"
                validate
                error="wrong"
                onChange={handleChange}
                success="right"
                name="codigo"
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

export default MostrarSuscriptor;
