import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate ,Link} from 'react-router-dom';
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
  MDBCarousel
} from 'mdb-react-ui-kit';

import { getToken, loginAsync, resetToken } from '../reducers/AuthSlice'
import logo from '../assets/logo1.png'
import banner from '../assets/landingimg.PNG'
import comakebg from '../assets/comkaebg.png'
import item1 from '../assets/signup.png'
import item2 from '../assets/connect.png'

import hero from './Assets/hero.jpg'
import swat from './Assets/swat.webp'
import naran from './Assets/naran.webp'
import shogran from './Assets/shogran.webp'
import kashmir from './Assets/kashmir.webp'
import skardu from './Assets/skardu.webp'
import hunza from './Assets/hunza.webp'
import item3 from '../assets/sahke.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import seritem1 from '../assets/leather.png'
import seritem2 from '../assets/apparels.png'
import seritem3 from '../assets/printing.png'
import seritem4 from '../assets/food.png'
import seritem5 from '../assets/soaps.png'
import seritem6 from '../assets/footwear.png'

import alitem1 from '../assets/web.png'
import alitem2 from '../assets/dm.png'
import alitem3 from '../assets/ft.png'
import alitem4 from '../assets/log.jpg'

import { Navbar } from './Navbar';
import { Footer } from './Footer';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export function Landing1() {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()
  let location = useLocation()
  const [showNav, setShowNav] = useState(false);



  return (
    <div>

      <Navbar/>
      <MDBCarousel fade>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={hero} alt='...' style={{ height: "600px"}} />
            <MDBCarouselCaption style={{ marginBottom: "200px",  background: "rgba(0, 0, 0, .6)"}}>
              <h2>Custom works make the dream happen</h2>
              <p>A place for entrepreneurs and vendors to connect.</p>
              <MDBBtn className='mx-2' style={{ backgroundColor: '#F7D402', color: "black" }} href="/tour" >Find a Tour</MDBBtn>
              <MDBBtn className='mx-2' href='/business' style={{backgroundColor:"#30B4BA"}} >Find a project</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>


        </MDBCarouselInner>
      </MDBCarousel>
      <MDBContainer>
      <MDBRow className='text-center py-5'>
         
          <h1 className='my-5'>Popular Destinations</h1>
          <Carousel responsive={responsive}>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={hunza} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/vendor/Leather" style={{color:"black"}}>Hunza</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={skardu} className="my-3" style={{ width: "300px"}} />
              <h4><Link to="/vendor/Apparels"style={{color:"black"}}>Skardu</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
          
  
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={swat} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/vendor/Printing and packaging"style={{color:"black"}}>Swat</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={naran} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/vendor/Food & Beverages"style={{color:"black"}}>Naran</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
          
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={shogran} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/vendor/Soaps & Detergents"style={{color:"black"}}>Shogran</Link></h4>

              </MDBCardBody>
            </MDBCard></div>

            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={kashmir} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/vendor/Footwear"style={{color:"black"}}>Kashmir</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
          </Carousel>;
        </MDBRow>
        <MDBRow className='text-center '>
        <hr />
          <h2 className='mb-5 mt-2'>Simple process</h2>
          <MDBCol>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <img src={item1} className="my-3" />
                  <br />
                  Sign Up</MDBCardTitle>
                <MDBCardText>
                  Are you a buyer or a vendor?
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <img src={item2} className="my-3" />
                  <br />
                  Connect</MDBCardTitle>
                <MDBCardText>
                  Post projects. Browse vendors. Send a message when you find a match!
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <img src={item3} className="my-3" />
                  <br />
                  Shake on it</MDBCardTitle>
                <MDBCardText>
                  Create & deliver products. Watch your business grow!
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
        <MDBRow>
          <hr />
          <h1 className='my-5'>Discover projects</h1>
          <Carousel responsive={responsive}>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  BeeTrev</MDBCardTitle>
                <MDBCardText>
                  Tourism B2B Platform.
                </MDBCardText>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                SDCMS</MDBCardTitle>
                <MDBCardText>
                  Smart donation collection managemnt system.
                </MDBCardText>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  Car Pool</MDBCardTitle>
                <MDBCardText>
                  Car ride sharing service.
                </MDBCardText>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  Car Pool</MDBCardTitle>
                <MDBCardText>
                  Car ride sharing service.
                </MDBCardText>

              </MDBCardBody>
            </MDBCard></div>
          
          </Carousel>;
        </MDBRow>
        
        <MDBRow>
          <hr />
          <h1>Co-make journey</h1>
          <h5>
            Every entrepreneur carries a story and a goal.</h5>
          <img className='my-5' src={banner} style={{ borderRadius: "25px" }} />
        </MDBRow>
        <MDBRow>
          <hr />
          <h1 className='my-5'>Allied services</h1>
          <Carousel responsive={responsive}>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={alitem1} className="my-3" />
              <h4>Web and Graphics</h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={alitem2} className="my-3" />
              <h4>Digital Marketing</h4>

              </MDBCardBody>
            </MDBCard></div>
          
  
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={alitem3} className="my-3" />
              <h4>Financial & Tax</h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={alitem4} className="my-3" />
              <h4>Logistics</h4>

              </MDBCardBody>
            </MDBCard></div>
         
          </Carousel>;
        </MDBRow>
      </MDBContainer>
  <Footer/>

    </div>
  );
}
