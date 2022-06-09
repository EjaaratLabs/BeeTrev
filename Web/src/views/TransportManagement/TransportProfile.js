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
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardHeader,
  MDBBadge,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,

} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';
import { GetTourDetailsAsync } from '../../reducers/TourProfileSlice';
import { getToken } from '../../reducers/AuthSlice';
import { useParams } from 'react-router';
import slider1 from '../Assets/slider1.png'
import { getCustomer, GetCustomersListAsync, getHotelCustomer, GetHotelCustomersListAsync, getTransportCustomer, GetTransportCustomersListAsync, updateBookingStatusAsync, updateHotelBookingStatusAsync, updateTransportBookingStatusAsync } from '../../reducers/CustomerProfileSlice';

import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';
import { GetTransportDetailsAsync } from '../../reducers/TransportProfileSlice';

const statusMap = { "1": "Active", "2": "Suspended", "3": "Dropped" };

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Phone Number',
    selector: row => row.phone,
  },
  {
    name: 'Email',
    selector: row => row.email,
  },
  {
    name: 'Booking Status',
    selector: row => (row.bookingStatus == 1?"Active":"Pending"),
  },
  {
    name: 'Action',
    selector: row =>(row.bookingStatus == 0? <Active id={row.id}/>: "Active") ,
  }
];

function Active(props) {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  
  return <Link to="" onClick={()=>{
    dispatch(updateTransportBookingStatusAsync({params:{id:props.id}, token }));
  }}><MDBBtn color='danger' size='sm' >Active Booking</MDBBtn> </Link>
}

const images = [
  {
    original: 'https://foxbusinessmarket.com/wp-content/uploads/2022/01/hotl.jpg',
    thumbnail: 'https://foxbusinessmarket.com/wp-content/uploads/2022/01/hotl.jpg',
  },
  {
    original: 'http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg',
    thumbnail: 'http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg',
  },
  {
    original: 'https://www.luxurytravelmagazine.com/images/article/2021July/Raffles_Istanbul.jpg',
    thumbnail: 'https://www.luxurytravelmagazine.com/images/article/2021July/Raffles_Istanbul.jpg',
  },
];



export const TransportProfile = (props) => {
  
  const dispatch = useDispatch();
  let params = useParams();
  
  const token = useSelector(getToken);
  useEffect(() => {
    
    dispatch(GetTransportDetailsAsync({params:{transportId:params.transportId,},token}))
  }, []);

  useEffect(() => {
    dispatch(GetTransportCustomersListAsync({params:{transportid:params.transportId,},token }));
  }, []);
  const data = useSelector(getTransportCustomer);

  console.log('data',data)


  var formData = useSelector(state => state.TransportSlice.profileData);

  console.log(formData)

  const [fillActive, setFillActive] = useState('tab1');
 
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  

  // const data = useSelector(getTours);
  /*if (props.details.status == "1") {
    badge = <MDBBadge color='success'>{statusMap[props.details.status]}</MDBBadge>
  } else if (props.details.status == "2") {
    badge = <MDBBadge color='danger'>{statusMap[props.details.status]}</MDBBadge>
  } else if (props.details.status == "3") {
    badge = <MDBBadge color='danger'>{statusMap[props.details.status]}</MDBBadge>
  }*/
  return (
    <div className="p-4 text-start w-100">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/transport'>Transport</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{formData.details.company + ' ' + formData.details.model}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> {formData.details.name}</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >
              <MDBCol size="12">
              <ImageGallery items={images} />


                {/* <h4 className='mt-3'>{formData.details.hotelName}</h4> */}
                {/* <p className=''> {badge} </p> */}
                <hr />
              </MDBCol>
              <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Details
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                      Guests
                    </MDBTabsLink>
                  </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><div>
                  
    <MDBTable >
      <MDBTableBody >
        <tr>
          <th scope='row'>Type</th>
          <td>{formData.details.type}</td>
        </tr>
        <tr>
          <th scope='row'>Company</th>
          <td>{formData.details.company}</td>
        </tr>
        <tr>
          <th scope='row'>Model</th>
          <td>{formData.details.model}</td>
        </tr>
        <tr>
          <th scope='row'>Price</th>
          <td>{formData.details.price}</td>
        </tr>
        <tr>
          <th scope='row'>Status</th>
          <td>{formData.details.status}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
                    </div></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab2'}><div>
                  <MDBCard alignment='left' >
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
      </div></MDBTabsPane>
                </MDBTabsContent>
              </MDBCol>
            
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
