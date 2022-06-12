import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
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
  MDBNavbarBrand,
  MDBCollapse,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBCarousel,
  MDBCheckbox,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  slider,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import { getToken, loginAsync, resetToken } from '../../reducers/AuthSlice'
import { getAllTours, GetAllToursListAsync, getCollabTours, GetCollabToursListAsync, getTours, GetToursListAsync } from '../../reducers/TourProfileSlice';
import collab from '../Assets/collaboration.png'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import { getCollaboration, GetTourCollaborateAsync } from '../../reducers/CollaborationProfileSlice';


export function CollaborationList() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  let params = useParams();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(GetTourCollaborateAsync({ token }));
  }, []);
  const data = useSelector(getCollaboration);
  console.log('collaborations', data);
  let navigate = useNavigate()
  let location = useLocation()
  const [showNav, setShowNav] = useState(false);

  const [fillActive, setFillActive] = useState('tab1');
 
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  
  var list = [];
  if (data) {
    var temp = data;
    temp.forEach(val => {
      list.push(<MDBCol size='12' className='my-3'>
        <MDBCard className="">
          <MDBCardBody className='text-start'>
            <MDBRow>
            <MDBCol size='3'>
               <div>
                 <img src={collab} width="120px"/>
               </div>
              </MDBCol>
              <MDBCol size='5'>
                <h5 className='text-left'>Tour: {val.name}</h5>
                <div className='text-left'>Operator Name: {val.Name}</div>
              </MDBCol>
              <MDBCol size='3' className='text-end'>
                <div className='text-left'><MDBIcon icon="users" /> Guests {val.collaborationQuantity}</div>
                <div className='text-left'>Amount: {val.collaborationPrice}</div>
                <br />
                <MDBBtn onClick={toggleShow}>View Details</MDBBtn></MDBCol>
                <MDBRow className='d-flex justify-content-center '>
                  <MDBCol size='2'>
                    <MDBBtn href={'/home/collaborate-tour/details/' + val.id} style={{ backgroundColor: "#30B4BA" }} >Accept</MDBBtn>
                  </MDBCol>
                  <MDBCol size='2'>
                    <MDBBtn href={'/home/collaborate-tour/details/' + val.id} style={{ backgroundColor: "#30B4BA" }} >Decline</MDBBtn>
                  </MDBCol>
                </MDBRow>
            </MDBRow>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>)
    })
  }

  return (
    <div>

      <MDBCard>
      <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}>Collaboration Management</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >

      <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Collaboration Requests Recieved
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                      My Collaboration Requests
                    </MDBTabsLink>
                  </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><div>
                  <MDBRow className='d-flex justify-content-center '>
                    <MDBCol size='8'>
                    {list}
                    </MDBCol>
                  </MDBRow>
                  </div></MDBTabsPane>

                  <MDBTabsPane show={fillActive === 'tab2'}><div>

                  </div></MDBTabsPane>
                </MDBTabsContent>
              </MDBCol>

              </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

      
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Operator Information</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <div></div>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>


    </div>
  );
}
