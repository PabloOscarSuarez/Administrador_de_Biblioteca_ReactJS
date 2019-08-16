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

const BasicTable = ({ suscriptores, eliminarSuscriptor }) => {
  return (
    <>
      <Link to="/admin/suscriptores/nuevo">
        <MDBBtn color="teal darken-4" size="sm" className="mb-4">
          Nuevo Suscriptor
        </MDBBtn>
      </Link>
      <MDBAnimation type="fadeInLeft">
        <h1>
          <MDBIcon far icon="address-book" /> Suscriptores
        </h1>
        <MDBTable className="mt-5">
          <MDBTableHead color="teal darken-4" textWhite>
            <tr>
              <th>Legajo</th>
              <th>Nombre y Apellido</th>
              <th>Carrera</th>
              <th className="text-center">Acciones</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {suscriptores.map((suscriptor, i) => {
              return (
                <tr key={i}>
                  <td>{suscriptor.codigo}</td>
                  <td>
                    {suscriptor.nombre} {suscriptor.apellido}
                  </td>
                  <td>{suscriptor.carrera}</td>
                  <td className="text-center">
                    <MDBBtn color="teal darken-4" size="sm" className="mt-0">
                      Info
                    </MDBBtn>
                    <MDBBtn
                      color="teal darken-4"
                      size="sm"
                      className="mt-0"
                      onClick={() => eliminarSuscriptor(suscriptor.id)}
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

export default BasicTable;
