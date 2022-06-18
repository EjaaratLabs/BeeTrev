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

} from 'mdb-react-ui-kit';

import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";

import { TransportSetup } from './TransportSetup';
import { AvailableTransportList } from './AvailableTransportList';

export function TransportBooking() {

  return (
    <Routes >
    <Route path={`/`} element={ <AvailableTransportList />} />
    <Route path={`book/`} element={ <TransportSetup />} />
  </Routes>
  );
}
