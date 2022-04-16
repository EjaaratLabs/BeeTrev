import React, { useState, useEffect } from 'react';
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

import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";

import { getToken } from '../../reducers/AuthSlice';
import { getUser, GetUserDetailAsync } from '../../reducers/UserProfileSlice';

export function Dashboard() {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetUserDetailAsync({ token }));
  }, []);
  const data = useSelector(getUser);

  console.log(data)

  return (
    <div className="p-4 text-start ">

    <MDBCard>
      <MDBCardHeader>Dashboard</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Welcome back, {data.name}!</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
    </div>
  );
}
