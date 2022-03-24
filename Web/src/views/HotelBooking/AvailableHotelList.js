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
  MDBTooltip,
  MDBCardFooter
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';

import room from '../Assets/room.jpeg'

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
  },
  {
    name: 'Actions',
    selector: row => row.action,
  }
];

const data = [
  {
    id: 1,
    image: room,
    name: 'Skardu View Point',
    location:'Hassan Colony Skardu, Gilgit Baltistan',
    price: '5,900',
    description: 'Experience hospitality at its finest with Skardu View Point, where our priority is you! We provide an extensive variety of amenities to make sure you enjoy your stay to the fullest.',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active',
    action: <MDBBtn href='/home/hotel-booking/book' >Book</MDBBtn>
  },
  {
    id: 2,
    image: room,
    name: 'MARKHOR RESORT YOUGO',
    location:'Main Khaplu Road Yougo Baltistan',
    price: '8,000',
    description: 'Markhor Resort Yougi offers the best rooms with gorgeous valley views, and all available anemities. Book your stay with us and make your visit the most enjoyable and memorable one yet!',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active',
    action: <MDBBtn href='/home/hotel-booking/book' >Book</MDBBtn>
  },
  {
    id: 3,
    image: room,
    name: 'BALTISTAN RESORT',
    location:'Shahra E Quaide Azam Road Near Abdullah Hospital Skardu',
    price: '4,500',
    description: 'Our rooms with best view and articulate home stays environment, WiFi, 24 hours reception, garden view, cherries on season.',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active',
    action: <MDBBtn href='/home/hotel-booking/book' >Book</MDBBtn>
  },
  {
    id: 4,
    image: room,
    name: 'Hotel One Skardu',
    location:'Airport Road, Gamba',
    price: '7,999',
    description: 'Hotel One Skardu is located on Airport Road, a short distance from Skardu Airport. The hotel is in close proximity to Satpara Lake, Skardu Fort, Deosai National Park, Cold Desert of Skardu and Shigar Valley. The hotel stands out due to its warm and welcoming staff. The front desk operates 24/7 and caters to your every need.',
    facilities: 'Reception, Parking, Coffee in the Lobby, 24 Hour Reception, Extra cleaning, Extra linen, Heating',
    status:'Active',
    action: <MDBBtn href='/home/hotel-booking/book' >Book</MDBBtn>
  },
]
export function AvailableHotelList() {

  return (
    <div className="p-4 text-start ">

<h5>Available Hotels</h5>

<MDBRow>
{data.map((data, index) => (  

<MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
<MDBCardImage cascade top src={data.image} waves />
<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  {data.name}
  </MDBCardTitle>
  <MDBCardTitle tag="h6">
  {data.location}
  </MDBCardTitle>
  <MDBCardText>
  {data.description}
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
  );
}
