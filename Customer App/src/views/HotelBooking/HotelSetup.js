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



export function HotelSetup() {

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}>Hotel Booking Confirmation</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Booking Detail</h5>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Check-In Date" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Check-Out Date" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="No. of Guest" icon="envelope" group type="number" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="No. of Guest" icon="envelope" group type="number" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    
                  </MDBRow>
                  <hr />

                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/hotel-booking">Close</MDBBtn><MDBBtn className="mx-2  my-5">Book</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
