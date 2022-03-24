import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBCardHeader

} from 'mdb-react-ui-kit';



export function TransportSetup() {

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}>Add a Transport</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Transport Detail</h5>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Type" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Company" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Model" icon="envelope" group type="number" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Price" icon="envelope" group type="number" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Status" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                  </MDBRow>
                  <hr />

                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/transport">Close</MDBBtn><MDBBtn className="mx-2  my-5">Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
