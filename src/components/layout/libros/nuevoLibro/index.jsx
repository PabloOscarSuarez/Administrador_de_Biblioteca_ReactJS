import React, { Component } from "react";
import {
  MDBIcon,
  MDBAnimation,
  MDBBtn,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBInput
} from "mdbreact";
import { Link } from "react-router-dom";

//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
//---------
import PropTypes from "prop-types";

class NuevoLibro extends Component {
  state = {
    activeItem: "1",
    ISBN: "",
    editorial: "",
    existencia: "",
    titulo: ""
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  //agrega un nuevo Libro a la base de datos
  handleSubmit = e => {
    e.preventDefault();
    const { ISBN, editorial, existencia, titulo } = this.state;
    const nuevoLibro = { ISBN, editorial, existencia, titulo };
    nuevoLibro.prestado = [];
    const { firestore, history } = this.props;
    firestore.add({ collection: "libros" }, nuevoLibro).then(() => {
      history.push("/");
    });
  };

  //funcion que extrae los valores de los input y los agrega al state
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <MDBAnimation type="fadeInLeft">
          <form onSubmit={this.handleSubmit}>
            <Link to="/">
              <MDBBtn color="teal darken-4" size="sm" className="mb-4">
                <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de libros
              </MDBBtn>
            </Link>
            <h1>
              <p>
                <MDBIcon icon="plus-circle" /> Nuevo Libro
              </p>
            </h1>
            <MDBNav className="nav-tabs mt-5">
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab"
                >
                  ISBN
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab"
                >
                  Editorial
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "3"}
                  onClick={this.toggle("3")}
                  role="tab"
                >
                  Titulo
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "4"}
                  onClick={this.toggle("4")}
                  role="tab"
                >
                  Disponibilidad
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem} className="w-25">
              <MDBTabPane tabId="1" role="tabpanel">
                <MDBInput
                  required
                  name="ISBN"
                  label="ISBN"
                  onChange={this.handleChange}
                />
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <MDBInput
                  required
                  name="editorial"
                  label="editorial"
                  onChange={this.handleChange}
                />
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel">
                <MDBInput
                  required
                  name="titulo"
                  label="titulo"
                  onChange={this.handleChange}
                />
              </MDBTabPane>
              <MDBTabPane tabId="4" role="tabpanel">
                <MDBInput
                  required
                  type="number"
                  name="existencia"
                  label="Disponibilidad"
                  onChange={this.handleChange}
                />
              </MDBTabPane>
            </MDBTabContent>

            <button>Guardar informacion</button>
          </form>
        </MDBAnimation>
      </>
    );
  }
}

//verifico al momento de capturar por props las funcionalidaddes de firestore que sean correstas
NuevoLibro.propType = {
  firestore: PropTypes.object.isRequired
};
// conecto mi componente a react-redux-firebase para poder tener acceso por props a las acciones de firestore
export default firestoreConnect()(NuevoLibro);
