import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import "../scss/Carousel.scss"
import Carousel1 from "../img/carousel1.jpeg"
import Carousel2 from "../img/carousel2.jpeg"
import Carousel3 from "../img/carousel3.jpeg"



export default function Carousel() {
  return (
    <div className='carouselDiv'>
      <MDBCarousel showIndicators showControls fade className='homePageCarousel'>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={Carousel1} alt='...' className='carouselImg' />
            <MDBCarouselCaption>
              <h5>ARK Elektrik</h5>
              <p className='carouselContentP'>Elektrik işleriniz için <br /> doğru çözümler</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={Carousel2} alt='...' className='carouselImg' />
            <MDBCarouselCaption>
              <h5>ARK Elektrik</h5>
              <p className='carouselContentP'>Profesyonel <br /> elektrik hizmetleri</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={Carousel3} alt='...' className='carouselImg' />
            <MDBCarouselCaption>
              <h5>ARK Elektrik</h5>
              <p className='carouselContentP'>Uzman elektrikçi deneyimi ile<br />üstün çözümler sunarız</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}