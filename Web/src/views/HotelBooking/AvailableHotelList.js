import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

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
  MDBCardFooter,
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';

import room from '../Assets/room.jpeg'
import { getToken } from '../../reducers/AuthSlice';
import { getHotels, GetHotelsListAsync } from '../../reducers/HotelProfileSlice';

const columns = [
  {
    name: 'Name',
    selector: row => row.hotelName,
  },
  {
    name: 'Location',
    selector: row => row.hotelLocation,
  },
  {
    name: 'Room Price',
    selector: row => row.roomPrice,
  },
  {
    name: 'Description',
    selector: row => row.hotelDescription,
  },
  {
    name: 'Facilities',
    selector: row => row.hotelFacilities,
  },
  {
    name: 'Status',
    selector: row => row.hotelStatus,
  },
  {
    name: 'Actions',
    selector: row =>  <Link to={"/home/donors/details/"+row.regid}><MDBBtn color='warning' size='sm'>Details</MDBBtn> </Link>,
  },
  
];

const data1 = [
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

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetHotelsListAsync({ token }));
  }, []);
  const data = useSelector(getHotels);


  return (
    <div className="p-4 text-start ">

<h5>Available Hotels</h5>

<MDBRow>
{data.map((data, index) => (  

<MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
<MDBCardImage cascade top src={room} waves />
<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h5">
  {data.hotelName}
  </MDBCardTitle>
  <MDBCardTitle tag="h6">
  {data.hotelLocation}
  </MDBCardTitle>
  <MDBCardText>
  {data.hotelDescription}
  </MDBCardText>
  <MDBCardText>
  {data.hotelFacilities}
  </MDBCardText>
  <MDBCardFooter>
    <MDBCardText>
    Rs. {data.roomPrice}
  </MDBCardText>
    <MDBCardText>
    {data.hotelStatus}
  </MDBCardText>
  <MDBBtn href='/home/hotel-booking/book' >Book</MDBBtn>
  </MDBCardFooter>
</MDBCardBody>
</MDBCard>
))}
</MDBRow>

    </div>
  );
}
