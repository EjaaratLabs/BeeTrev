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
  MDBCardHeader,
  MDBCardImage,
  MDBCardFooter,
  MDBDropdown
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';
import tour from '../Assets/tours.jpg'

import { Navbar } from '../Navbar';

const columns = [
  {
    name: 'Type',
    selector: row => row.type,
  },
  {
    name: 'Company',
    selector: row => row.company,
  },
  {
    name: 'Model',
    selector: row => row.model,
  },
  {
    name: 'Price',
    selector: row => row.price,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  }
];

const data = [
    {
      id: 1,
      image: tour,
      name: 'Trip To Hunza',
      days:'12',
      departure: 'Karachi',
      destination: 'Hunza',
      price: '21,199',
      status:'Active',
      action: <MDBBtn href='/home/tour/add' >Book</MDBBtn>
    },
    {
      id: 2,
      image: tour,
      name: 'Trip To Hunza',
      days:'12',
      departure: 'Karachi',
      destination: 'Hunza',
      price: '21,199',
      status:'Active',
      action: <MDBBtn href='/home/tour/add' >Book</MDBBtn>
    },
    {
      id: 3,
      image: tour,
      name: 'Trip To Hunza',
      days:'12',
      departure: 'Karachi',
      destination: 'Hunza',
      price: '21,199',
      status:'Active',
      action: <MDBBtn href='/home/tour/add' >Book</MDBBtn>
    },
    {
      id: 4,
      image: tour,
      name: 'Trip To Hunza',
      days:'12',
      departure: 'Karachi',
      destination: 'Hunza',
      price: '21,199',
      status:'Active',
      action: <MDBBtn href='/home/tour/add' >Book</MDBBtn>
    },
    {
      id: 5,
      image: tour,
      name: 'Trip To Hunza',
      days:'12',
      departure: 'Karachi',
      destination: 'Hunza',
      price: '21,199',
      status:'Active',
      action: <MDBBtn href='/home/tour/add' >Book</MDBBtn>
    },
    {
      id: 6,
      image: tour,
      name: 'Trip To Hunza',
      days:'12',
      departure: 'Karachi',
      destination: 'Hunza',
      price: '21,199',
      status:'Active',
      action: <MDBBtn href='/home/tour/add' >Book</MDBBtn>
    },
  ]

export function Tours() {

  return (
    <div>
      <Navbar/>
    <div className="p-4 text-center ">

<h3>Tours</h3>

<MDBRow>
{data.map((data, index) => (  

<MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
<MDBCardImage cascade top src={data.image} waves />
<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  {data.name}
  </MDBCardTitle>
  <MDBCardTitle tag="h6">
  Days: {data.days}
  </MDBCardTitle>
  <MDBCardText>
  Departure: {data.departure}
  </MDBCardText>
  <MDBCardText>
  Destination: {data.destination}
  </MDBCardText>
  <MDBCardFooter>
    <MDBCardText>
    Rs. {data.price}
  </MDBCardText>
    <MDBCardText>
    {data.status}
  </MDBCardText>
  {data.action}
  </MDBCardFooter>
</MDBCardBody>
</MDBCard>
))}
</MDBRow>
    </div>
    </div>
  );
}
