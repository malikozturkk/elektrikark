import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import ElektrikAriza from "../img/elektrik-ariza.jpeg"
import ElektrikMontaj from "../img/elektrik-montaj.jpeg"
import ElektrikPanoImalat from "../img/elektrik-pano-imalat.jpeg"
import GüvenlikSistemleri from "../img/guvenlik-sistemleri.jpeg"

export default function HomePageServices() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
    <Link to='/hizmetlerimiz'>
      <MDBCol>
        <MDBCard href='/hizmetlerimiz'>
          <MDBCardImage
            src={ElektrikAriza}
            alt='...'
            position='top'
            className='servicesImg'
          />
          <MDBCardBody>
            <MDBCardTitle>Elektrik Arıza</MDBCardTitle>
            <MDBCardText>
                <ul>
                    <li><MDBIcon fas icon="check" /> Elektrik Tesisat Arıza</li>
                    <li><MDBIcon fas icon="check" /> Pano Arıza</li>
                    <li><MDBIcon fas icon="check" /> Zayıf Akım Arıza
                    <li><MDBIcon fas icon="check" /> Kompazasyon Arıza</li>
                    </li>
                </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
    <Link to='/hizmetlerimiz'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={ElektrikMontaj}
            alt='...'
            position='top'
            className='servicesImg'
          />
          <MDBCardBody>
            <MDBCardTitle>Elektrik Montaj</MDBCardTitle>
            <MDBCardText>
                <ul>
                    <li><MDBIcon fas icon="check" /> Ofis Mimari Projeler</li>
                    <li><MDBIcon fas icon="check" /> Endüstriyel Elektrik</li>
                    <li><MDBIcon fas icon="check" /> Zayıf Akım Tesisatı</li>
                </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
    <Link to='/hizmetlerimiz'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={ElektrikPanoImalat}
            alt='...'
            position='top'
            className='servicesImg'
          />
          <MDBCardBody>
            <MDBCardTitle>Elektrik Pano İmalat</MDBCardTitle>
            <MDBCardText>
                <ul>
                    <li><MDBIcon fas icon="check" /> AG Dağıtım Panoları</li>
                    <li><MDBIcon fas icon="check" /> Kumanda Panoları</li>
                    <li><MDBIcon fas icon="check" /> Elektrik Pano Bakım Onarım</li>
                </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
    <Link to='/hizmetlerimiz'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={GüvenlikSistemleri}
            alt='...'
            position='top'
            className='servicesImg'
          />
          <MDBCardBody>
            <MDBCardTitle>Güvenlik Sistemleri</MDBCardTitle>
            <MDBCardText>
                <ul>
                    <li><MDBIcon fas icon="check" /> Kamera Sistemleri</li>
                    <li><MDBIcon fas icon="check" /> Hırsız Alarm Sistemleri</li>
                    <li><MDBIcon fas icon="check" /> Plaka Okuma</li>
                </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
    </MDBRow>
  );
}