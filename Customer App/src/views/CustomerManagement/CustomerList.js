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

import DataTable from 'react-data-table-component';

import { getToken, loginAsync } from '../../reducers/AuthSlice'
import { GetToursList } from '../../api/TourApis';
import { getTours, GetToursListAsync } from '../../reducers/TourProfileSlice';
const columns = [
  {
    name: 'Tour',
    selector: row => row.name,
  },
  {
    name: 'Days',
    selector: row => row.days,
  },
  {
    name: 'Departure from',
    selector: row => row.departure,
  },
  {
    name: 'Destination',
    selector: row => row.destination,
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

const tours = [
  {
    id: 1,
    name: 'Trip To Hunza',
    days:'12',
    departure: 'Karachi',
    destination: 'Hunza',
    price: '21,199',
    status:'Active',
    action: <MDBBtn href='/home/tour/add' >Add New</MDBBtn>
  },
  {
    id: 2,
    name: 'Trip To Hunza',
    days:'12',
    departure: 'Karachi',
    destination: 'Hunza',
    price: '21,199',
    status:'Active',
    action: <MDBBtn href='/home/tour/add' >Add New</MDBBtn>
  },
  {
    id: 3,
    name: 'Trip To Hunza',
    days:'12',
    departure: 'Karachi',
    destination: 'Hunza',
    price: '21,199',
    status:'Active',
    action: <MDBBtn href='/home/tour/add' >Add New</MDBBtn>
  },
  {
    id: 4,
    name: 'Trip To Hunza',
    days:'12',
    departure: 'Karachi',
    destination: 'Hunza',
    price: '21,199',
    status:'Active',
    action: <MDBBtn href='/home/tour/add' >Add New</MDBBtn>
  },
  {
    id: 5,
    name: 'Trip To Hunza',
    days:'12',
    departure: 'Karachi',
    destination: 'Hunza',
    price: '21,199',
    status:'Active',
    action: <MDBBtn href='/home/tour/add' >Add New</MDBBtn>
  },
  {
    id: 6,
    name: 'Trip To Hunza',
    days:'12',
    departure: 'Karachi',
    destination: 'Hunza',
    price: '21,199',
    status:'Active',
    action: <MDBBtn href='/home/tour/add' >Add New</MDBBtn>
  },
]
export function CustomerList() {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetToursListAsync({ token }));
  }, []);
  const data = useSelector(getTours);

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Customer Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/customer/add' >Create New</MDBBtn>
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
