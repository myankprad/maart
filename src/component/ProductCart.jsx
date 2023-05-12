import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/CartSlice";


export default function App() {
  

    const items = useSelector((state)=> state.allCart.items )

    const dispatch = useDispatch()

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
         {
            items.map((ele)=> (
            
                <MDBCol key={ele.id} size="md">
              <MDBCard>
                <MDBCardImage src={ele.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{ele.title}</MDBCardTitle>
                  <MDBCardText>{ele.price}</MDBCardText>
                  <MDBBtn onClick={()=> {dispatch(addToCart(ele))}}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            ))

           
            
            }
         
        </MDBRow>
      </MDBContainer>
    </div>
  );
}