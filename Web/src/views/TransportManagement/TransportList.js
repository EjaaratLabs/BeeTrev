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
  MDBCardHeader
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';

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
  }
  
];

const data = [
  {
    id: 1,
    type: 'Sedan',
    company:'Corolla',
    model: '2018',
    price: '5,000',
    status:'Active'
  },
  {
    id: 2,
    type: 'Sedan',
    company:'City',
    model: '2019',
    price: '6,000',
    status:'Active'
  },
  {
    id: 3,
    type: 'Van',
    company:'Hiace',
    model: '2015',
    price: '10,000',
    status:'Active'
  },
  {
    id: 4,
    type: 'SUV',
    company:'Fortuner',
    model: '2016',
    price: '15,000',
    status:'Active'
  },
  {
    id: 5,
    type: 'SUV',
    company:'Land Cruiser',
    model: '2014',
    price: '17,000',
    status:'Active'
  }
]
export function TransportList() {

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Transport Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/transport/add' >Add a Transport</MDBBtn>
        </div>
        <MDBRow>
          <MDBCardBody>
            <DataTable
              pagination="true"
              columns={columns}
              data={data}
           
            />
          </MDBCardBody>
        </MDBRow>
      </MDBCard>

    </div>
  );
}
