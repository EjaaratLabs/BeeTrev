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



export function TourSetup() {

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Create a Tour</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Tour Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Start Date" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Destination</option>
                        <option value="1">Skardu</option>
                        <option value="2">Hunza</option>
                        <option value="3">Chitral</option>
                        <option value="4">Swat</option>
                        <option value="5">Kashmir</option>
                        <option value="6">Galiyat</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Transport Included</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Accommodation Included</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Trip Days" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Starting Place" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="2" className="py-1">
                      <MDBInput label="Price Per Person" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Places to be visited" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Tour Detail" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
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
