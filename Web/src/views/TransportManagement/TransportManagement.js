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

import { TransportList } from './TransportList';
import { TransportSetup } from './TransportSetup';

export function TransportManagement() {

  return (
    <Routes >
    <Route path={`/`} element={ <TransportList />} />
    <Route path={`add/`} element={ <TransportSetup />} />
  </Routes>
  );
}
