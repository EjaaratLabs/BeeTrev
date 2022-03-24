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
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Location',
    selector: row => row.location,
  },
  {
    name: 'Room Price',
    selector: row => row.price,
  },
  {
    name: 'Description',
    selector: row => row.description,
  },
  {
    name: 'Facilities',
    selector: row => row.facilities,
  },
  {
    name: 'Status',
    selector: row => row.status,
  }
  
];

const data = [
  {
    id: 1,
    name: 'Skardu View Point',
    location:'Hassan Colony Skardu, Gilgit Baltistan',
    price: '5,900',
    description: 'Experience hospitality at its finest with Skardu View Point, where our priority is you! We provide an extensive variety of amenities to make sure you enjoy your stay to the fullest.',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active'
  },
  {
    id: 2,
    name: 'MARKHOR RESORT YOUGO',
    location:'Main Khaplu Road Yougo Baltistan',
    price: '8,000',
    description: 'Markhor Resort Yougi offers the best rooms with gorgeous valley views, and all available anemities. Book your stay with us and make your visit the most enjoyable and memorable one yet!',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active'
  },
  {
    id: 3,
    name: 'BALTISTAN RESORT',
    location:'Shahra E Quaide Azam Road Near Abdullah Hospital Skardu',
    price: '4,500',
    description: 'Our rooms with best view and articulate home stays environment, WiFi, 24 hours reception, garden view, cherries on season.',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active'
  },
  {
    id: 4,
    name: 'Hotel One Skardu',
    location:'Airport Road, Gamba',
    price: '7,999',
    description: 'Hotel One Skardu is located on Airport Road, a short distance from Skardu Airport. The hotel is in close proximity to Satpara Lake, Skardu Fort, Deosai National Park, Cold Desert of Skardu and Shigar Valley. The hotel stands out due to its warm and welcoming staff. The front desk operates 24/7 and caters to your every need.',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active'
  },
]
export function HotelList() {

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Hotel Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/hotel/add' >Add a Hotel</MDBBtn>
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
