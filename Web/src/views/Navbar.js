import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import loginBg from './Assets/pakistan-karakorum.webp'
import logo from './Assets/logo.png'
import tours from './Assets/tours.jpg'
import hotels from './Assets/hotels.jpg'
import transports from './Assets/transports.png'

import {
    BrowserRouter as Router, Routes, Route, Link, useParams,
    useMatch
  } from "react-router-dom";

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
  MDBCardImage,
  MDBCardFooter,
  MDBCardLink
} from 'mdb-react-ui-kit';
import { TourManagement } from './TourManagement/TourManagement';
import { Tours } from './CustomerWeb/Tours';
import { Hotels } from './CustomerWeb/Hotels';
import { Transports } from './CustomerWeb/Transports';

export function Navbar() {

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
                Admin
              </MDBNavbarLink>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>


    </div>

    
  );
}
