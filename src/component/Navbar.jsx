import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
        <Link to="/"> All Product</Link>
        </span>
        <MDBBtn color="light">
        <button>
        <Link to="/cart">  Cart</Link>
        </button>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}