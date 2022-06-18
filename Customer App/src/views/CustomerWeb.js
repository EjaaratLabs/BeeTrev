import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import slider1 from './Assets/slider1.png'
import slider2 from './Assets/slider2.png'
import slider3 from './Assets/slider3.png'
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
  MDBCardLink,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBCarouselElement
} from 'mdb-react-ui-kit';


import { TourManagement } from './TourManagement/TourManagement';
import { Tours } from './CustomerWeb/Tours';
import { Hotels } from './CustomerWeb/Hotels';
import { Transports } from './CustomerWeb/Transports';

export function CustomerWeb() {

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

      <MDBCarousel showIndicators showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={slider1} alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={slider2} alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={slider3} alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

      <div className="p-4 mt-2 text-center ">

<h2>Choose to Book</h2>

</div>

      <MDBRow className='ml-5 mr-5 mb-10' style={{justifyContent: "space-around"}}> 
      <MDBCardLink href='/tours' style={{ width: "25rem" }}>
<MDBCard className="" style={{ width: "25rem" }} cascade ecommerce>
    
    <MDBCardImage className='img-customer-web' cascade top src={tours} waves />
    

<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  TOURS
  </MDBCardTitle>
</MDBCardBody>
</MDBCard>
</MDBCardLink>
      
      <MDBCardLink href='/hotels' style={{ width: "25rem" }} cascade ecommerce>
<MDBCard className="" style={{ width: "25rem" }} >
    
    <MDBCardImage className='img-customer-web' cascade top src={hotels} waves />
    

<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  HOTELS
  </MDBCardTitle>
</MDBCardBody>
</MDBCard>
</MDBCardLink>
      
      <MDBCardLink href='/transports' style={{ width: "25rem" }}>
<MDBCard className="" style={{ width: "25rem" }} cascade ecommerce>
    
    <MDBCardImage className='img-customer-web' cascade top src={transports} waves />
    

<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  TRANSPORTS
  </MDBCardTitle>
</MDBCardBody>
</MDBCard>
</MDBCardLink>

</MDBRow>

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
