import React from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon,
  MDBAnimation,
  MDBBtn
} from "mdbreact";

const BasicTable = ({ suscriptores }) => {
  return (
    <>
      <MDBBtn color="teal darken-4" size="sm" className="mb-4">
        Nuevo Suscriptor
      </MDBBtn>
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
            {suscriptores.map((suscriptore, id) => {
              return (
                <tr key={id}>
                  <td>{suscriptore.codigo}</td>
                  <td>
                    {suscriptore.nombre} {suscriptore.apellido}
                  </td>
                  <td>{suscriptore.carrera}</td>
                  <td className="text-center">
                    <MDBBtn color="teal darken-4" size="sm" className="mt-0">
                      Info
                    </MDBBtn>
                    <MDBBtn color="teal darken-4" size="sm" className="mt-0">
                      Editar
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
