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

import { CustomerList } from './CustomerList';
import { CustomerSetup } from './CustomerSetup';

export function CustomerManagement() {


  var screenModule = <div></div>


  // if (screen == "list") {
  //   screenModule = <TourList
  //     openNewProfile={() => {
  //       setDetailsMode("add")
  //       setScreenMode("addscreen")
  //       setProfileDetails(null)
  //     }}
  //     openProfileDetails={(details) => {
  //       setDetailsMode("edit")
  //       setProfileDetails(details)
  //       setScreenMode("details")
  //     }} />;
  // }
  // else if (screen == "addscreen") {
  //   screenModule = <TourSetup details={details} detailsMode={detailsMode} closeProfileDetails={() => {
  //     setScreenMode("list")
  //   }} />;
  // }
  // else if (screen == "details") {
  //   screenModule = <ChildProfile details={details} closeProfileDetails={() => {
  //     setScreenMode("list")
  //   }} />;
  // }
  return (
    // screenModule

    <Routes>
      <Route path={`/`} element={<CustomerList />} />
      <Route path={`add`} element={<CustomerSetup />} />
    </Routes>
  );
}
