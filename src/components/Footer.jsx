import "../scss/Footer.scss"
import React from "react";
import Logo from "../img/logo.png"
import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div>
          <a href='https://instagram.com/arkelektrik520' className='me-4 text-reset' target='_blank'>
            İnstagramdan Bizi Takip Edin : <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footerLogoHead'>
                <Link className="footerLogoLink" to="/">
                    <img src={Logo} alt="Logo" className="footerLogo" />
                </Link>
              </h6>
              <p>
              Gençlik dinamiğimizi çözüm ortaklarımızın bilgi birikimini, deneyimini, tasarruf merkezli ve teknolojiyi teknolojiyle takip eden belgelerle onaylanmış kalitesi ile harmanlayarak yola çıktık.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <Link className="footerLink" to="/taahhut">
                  Taahhüt
                </Link>
                  </h6>
              <p>
                <a href='/taahhut' className='text-reset'>
                  Zayıf Akım
                </a>
              </p>
              <p>
                <a href='/taahhut' className='text-reset'>
                  Alçak Gerilim
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                  <Link className="footerLink" to="/hizmetlerimiz">
                    Hizmetlerimiz
                  </Link>
                  </h6>
              <p>
                <a href='/hizmetlerimiz' className='text-reset'>
                  Elektrik Arıza
                </a>
              </p>
              <p>
                <a href='/hizmetlerimiz' className='text-reset'>
                  Elektrik Montaj
                </a>
              </p>
              <p>
                <a href='/hizmetlerimiz' className='text-reset'>
                Elektrik Pano İmalat
                </a>
              </p>
              <p>
                <a href='/hizmetlerimiz' className='text-reset'>
                Güvenlik Sistemleri
                </a>
              </p>
              <p>
                <Link className="footerLink" to="/hizmetlerimiz">
                  Diğer Tüm Hizmetlerimiz
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>İletişim Bilgileri</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                İçerenköy Mahallesi Prof. Dr. Necmettin Erbakan Cad. Yaşaroğlu Apt. No 75/8 Ataşehir, İstanbul
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@elektrikark.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +90 216 573 34 72
              </p>
              <p>
                <MDBIcon icon="mobile-alt" className="me-3" /> +90 532 661 34 62
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 footerCopyright'>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
          ARK Elektrik
        </a>
      </div>
    </MDBFooter>
    )
  };
  
export default Footer;