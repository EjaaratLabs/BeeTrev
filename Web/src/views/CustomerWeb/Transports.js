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
import car from '../Assets/car.jpg'
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
    image: car,
    type: 'Sedan',
    company:'Corolla',
    model: '2018',
    price: '5,000',
    status:'Active',
    action: <MDBBtn href='/home/transport-booking/book' >Book</MDBBtn>
  },
  {
    id: 2,
    image: car,
    type: 'Sedan',
    company:'City',
    model: '2019',
    price: '6,000',
    status:'Active',
    action: <MDBBtn href='/home/transport-booking/book' >Book</MDBBtn>
  },
  {
    id: 3,
    image: car,
    type: 'Van',
    company:'Hiace',
    model: '2015',
    price: '10,000',
    status:'Active',
    action: <MDBBtn href='/home/transport-booking/book' >Book</MDBBtn>
  },
  {
    id: 4,
    image: car,
    type: 'SUV',
    company:'Fortuner',
    model: '2016',
    price: '15,000',
    status:'Active',
    action: <MDBBtn href='/home/transport-booking/book' >Book</MDBBtn>
  },
  {
    id: 5,
    image: car,
    type: 'SUV',
    company:'Land Cruiser',
    model: '2014',
    price: '17,000',
    status:'Active',
    action: <MDBBtn href='/home/transport-booking/book' >Book</MDBBtn>
  }
]
export function Transports() {

  return (
    <div>
      <Navbar/>
    <div className="p-4 text-center ">

<h3>Transports</h3>

<div>

    <MDBCol lg="3" className="py-3">
      Choose Type
                      <select className="form-select">
                        <option value="All">All</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Van">Van</option>
                        <option value="SUV">SUV</option>
                      </select>
                    </MDBCol>

</div>

<MDBRow>
{data.map((data, index) => (  

<MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
<MDBCardImage cascade top src={data.image} waves />
<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  {data.type}
  </MDBCardTitle>
  <MDBCardTitle tag="h6">
  {data.company}
  </MDBCardTitle>
  <MDBCardText>
  {data.model}
  </MDBCardText>
  <MDBCardText>
  {data.facilities}
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
