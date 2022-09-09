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
import "../scss/Products.scss"
import ElektrikAriza from "../img/elektrik-ariza.jpeg"
import ElektrikMontaj from "../img/elektrik-montaj.jpeg"
import ElektrikPanoImalat from "../img/elektrik-pano-imalat.jpeg"
import GüvenlikSistemleri from "../img/guvenlik-sistemleri.jpeg"
import KompazePano from "../img/kompaze-pano.jpeg"
import NetworkFiber from "../img/network-fiber.jpeg"
import OtomasyonSistemleri from "../img/otomasyon-sistemleri.jpeg"
import TelefonSantrali from "../img/telefon-santrali.jpeg"
import TopraklamaParatoner from "../img/topraklama-ve-paratoner.jpeg"
import YanginIhbarSistemi from "../img/yangin-ihbar-sistemi.jpeg"

export default function Products() {
  return (
    <div className='ourServicesContainer'>
      <div className="ourServicesTitle">
        <hr className='productsTitleLine left' />
        HİZMETLERİMİZ
        <hr className='productsTitleLine right' />
      </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-3'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={ElektrikAriza}
            alt='...'
            position='top'
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
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={ElektrikMontaj}
            alt='...'
            position='top'
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
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={ElektrikPanoImalat}
            alt='...'
            position='top'
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
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={GüvenlikSistemleri}
            alt='...'
            position='top'
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
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={KompazePano}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Kompaze Pano</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li><MDBIcon fas icon="check" /> Kompaze Pano İmalatı</li>
                <li><MDBIcon fas icon="check" /> Kompazasyon Bakım Onarım ve Takibi</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={NetworkFiber}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Network Fiber</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li><MDBIcon fas icon="check" /> Rak Kabinet Sonlama</li>
                <li><MDBIcon fas icon="check" /> Data Sonlama</li>
                <li><MDBIcon fas icon="check" /> Fiber Optik Sonlama</li>
                <li><MDBIcon fas icon="check" /> Fiber Optik Ekleme</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={OtomasyonSistemleri}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Otomasyon Sistemleri</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li><MDBIcon fas icon="check" /> Bina Otomasyon Kontrolü</li>
                <li><MDBIcon fas icon="check" /> SCADA ve Enerji İzleme</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={TelefonSantrali}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Telefon Sistemleri</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li><MDBIcon fas icon="check" /> Telefon Santrali Kurulumu</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={TopraklamaParatoner}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Topraklama Paratoner</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li><MDBIcon fas icon="check" /> Topraklama Kurulum</li>
                <li><MDBIcon fas icon="check" /> Paratoner Kurulumu</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={YanginIhbarSistemi}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Yangın İhbar Sistemi</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li><MDBIcon fas icon="check" /> Yangın İhbar Sistemi</li>
                <li><MDBIcon fas icon="check" /> Acil Anons İhbar Sistemi</li>
                <li><MDBIcon fas icon="check" /> Müzik Yayını</li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}