import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/App.scss';
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
import { Login } from './Authentication/Login'
import { TourManagement } from './TourManagement/TourManagement'
import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";
import { HotelManagement } from './HotelManagement/HotelManagement';
import { TransportManagement } from './TransportManagement/TransportManagement';
import { HotelBooking } from './HotelBooking/HotelBooking';
import { TransportBooking } from './TransportBooking/TransportBooking';
import logo from './Assets/logo.png'
import { Webiste, WebsiteSetup } from './WebsiteCreation/WebsiteSetup';
import { resetToken } from './../reducers/AuthSlice'
import { CustomerManagement } from './CustomerManagement/CustomerManagement';
import { Dashboard } from './Dashboard/Dashboard';
import { TourCollabManagement } from './CollabTour/TourCollabManagement';

export function Landing() {

  const dispatch = useDispatch();

  return (
    <div style={{ height: "100%" }} >
      <div className="w-100 d-flex" style={{ height: "100%",backgroundColor:"#E4E8F1" }}>
        <div className="custom-sidebar">
          <div className="custom-sidebar-logo">
            <img width={'100px'} src={logo}/>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/dashboard`} >Dashboard</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/tour`} >Tour Management</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/customer`} >Customer Management</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/hotel`} >Hotel Management</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/transport`} >Transport Management</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/hotel-booking`} >Hotel Booking</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/transport-booking`} >Transport Booking</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/collaborate-tour`} >Collaborate Tour</Link>
            </div>
          </div>
          {/* <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/create-website`} >Website Creation</Link>
            </div>
          </div> */}
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <MDBBtn onClick={() => dispatch(resetToken({
                }))} >Log Out</MDBBtn>
            </div>
          </div>
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">
                
      </div>
          <Routes>
            <Route path={`dashboard/*`} element={ <Dashboard />} />
            <Route path={`tour/*`} element={ <TourManagement />} />
            <Route path={`customer/*`} element={ <CustomerManagement />} />
            <Route path={`hotel/*`} element={ <HotelManagement />} />
            <Route path={`transport/*`} element={ <TransportManagement />} />
            <Route path={`hotel-booking/*`} element={ <HotelBooking />} />
            <Route path={`transport-booking/*`} element={ <TransportBooking />} />
            <Route path={`collaborate-tour/*`} element={ <TourCollabManagement />} />
            <Route path={`create-website/*`} element={ <WebsiteSetup />} />

          </Routes>

        </div>
      </div>
    </div>
    
  );
}

