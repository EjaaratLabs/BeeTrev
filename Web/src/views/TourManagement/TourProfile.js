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
import { getCustomer, GetCustomersListAsync } from '../../reducers/CustomerProfileSlice';
const statusMap = { "1": "Active", "2": "Suspended", "3": "Dropped" };

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Phone Number',
    selector: row => row.customerPhone,
  }
];


export const TourProfile = (props) => {
  
  const dispatch = useDispatch();
  let params = useParams();
  
  const token = useSelector(getToken);
  useEffect(() => {
    console.log('effect');
    dispatch(GetTourDetailsAsync({params:{tourId:params.tourId,},token}))
  }, []);

  useEffect(() => {

    dispatch(GetCustomersListAsync({params:{tourid:params.tourId,},token }));
  }, []);
  const data = useSelector(getCustomer);

  console.log('data',data)


  var formData = useSelector(state => state.TourSlice.profileData);

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
          <a href='/home/tour'>tour</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{formData.details.name}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> {formData.details.name}</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >
              <MDBCol size="12">

                <img
                  src={slider1}
                  style={{ height: "300px", width: "100%", objectFit: "cover", objectPosition: "center"}}
                />

                <h4 className='mt-3'>{formData.name}</h4>
                {/* <p className=''> {badge} </p> */}
                <hr />
              </MDBCol>
              <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Overview
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
                  
    <MDBTable>
      <MDBTableBody>
        <tr>
          <th scope='row'>Name</th>
          <td>{formData.details.name}</td>
        </tr>
        <tr>
          <th scope='row'>Days</th>
          <td>{formData.details.days}</td>
        </tr>
        <tr>
          <th scope='row'>Destination</th>
          <td>{formData.details.destination}</td>
        </tr>
        <tr>
          <th scope='row'>Departure</th>
          <td>{formData.details.departure}</td>
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
                  <MDBCard alignment='center' >
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
