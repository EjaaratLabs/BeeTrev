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



export function WebsiteSetup() {

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Create a Website</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Website Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Email" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Contact No." icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput label="Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="About" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>

                    <label class="form-label" for="customFile">Logo</label>
                    <input type="file" class="form-control mb-2" id="customFile" />
                    
                    <label class="form-label" for="customFile">Slider Images</label>
                    <input type="file" class="form-control mb-2" id="customFile" />
                    
                  </MDBRow>
                  <hr />
                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/tour">Close</MDBBtn><MDBBtn className="mx-2  my-5">Add</MDBBtn>
                </div>

              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
