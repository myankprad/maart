import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
        All Product
        </span>
        <MDBBtn color="light">
        <button>Cart</button>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}