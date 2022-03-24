import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import signupBg from '../Assets/bg1.jpg'
import logo from '../Assets/logo.png'

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
  MDBRadio
} from 'mdb-react-ui-kit';

export function Signup() {

  return (
    <div>

      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse w-100' id='navbarExample01' >
            <MDBNavbarNav left className='mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink href='/'>
                  <img width={'50px'} src={logo}/>
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
            <MDBNavbarNav right className='mb-2 mb-lg-0 text=right d-flex justify-content-end' >


              <MDBNavbarLink href='/login'>
                Login
              </MDBNavbarLink>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${signupBg})`, height: "83vh" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>

            <MDBCard style={{ minWidth: '25rem' }} >
              <MDBCardBody>
                <MDBCardTitle>Sign Up</MDBCardTitle>
                <MDBInput label="Name" className="mt-5 mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Username" className="mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Email" className="mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Phone" className="mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" />

                <label class="form-label" for="customFile">Signing up as</label>
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Tour Operator' />
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Hotel Vendor' />
                <MDBRadio name='flexRadioDefault' className="mb-3" id='flexRadioDefault2' label='Transport Vendor' />

                <label class="form-label" for="customFile">Official Document</label>
                <input type="file" class="form-control mb-2" id="customFile" />
                <MDBInput label="Password" className="mb-5 mb-2" icon="envelope" group type="password" validate error="wrong"
                  success="right" />

                <MDBBtn href="/home/tour">Sign Up</MDBBtn>
              </MDBCardBody>
            </MDBCard>

          </div>
        </div>
      </div>
      {/* <MDBContainer>
        <MDBRow>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
    </MDBContainer>*/}
      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>


        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='/'>
            Tourista
          </a>
        </div>
      </MDBFooter>

    </div>
  );
}
