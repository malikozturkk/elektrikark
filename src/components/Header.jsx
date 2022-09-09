import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Outlet } from "react-router-dom";
import Logo from "../img/logo.png"
import ContactUsModal from '../components/ContactUsModal';
import "../scss/Header.scss"

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const isMobile = window.innerWidth <= 500;

  return (
      <>
      <div className={`headerTop ${showMobileHeader ? 'open' : 'close'}`}>
          <div className='containerFluid'>
              <div className='headerRow'>
                  <div className='headerCol'>
                      <div className='headerInfo'>
                          <div className='item'>
                            <MDBIcon fas icon="map-marked-alt" className='headerTopIcon' />
                            <span className='headerTopInfos'>İçerenköy Mahallesi Necmettin Erbakan Cad. Ataşehir/İstanbul</span>
                          </div>
                          <div className='item itemRight'>
                            <MDBIcon fas icon="clock" className='headerTopIcon' />
                            <span className='headerTopInfos'>7/24 Elektrik Hizmetleri</span>
                          </div>
                    </div>
                  </div>
                  <div className='headerCol headerColRight'>
                    <div className='phoneInfo'>
                        <div className='phoneInfo2'>
                            <MDBIcon fas icon="phone-alt" className='headerTopPhoneIcon' />
                            <a href="tel:0532 661 34 62" className='headerTopPhoneInfo'>0532 661 34 62</a>
                        </div>
                    </div>
                  </div>
                </div>
          </div>
      </div>
      { isMobile && 
            <div className='mobileArrow'>
                {showMobileHeader ? <MDBIcon fas icon="angle-up" onClick={() => setShowMobileHeader(!showMobileHeader)} /> : <MDBIcon fas icon="angle-down" onClick={() => setShowMobileHeader(!showMobileHeader)} /> }
            </div>
          }
        <MDBNavbar expand='lg' light className='navbar-menu'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='/'>
                <div className="headerNavLinks">
                    <img className="headerLogo" src={Logo} alt="Logo" />
                </div>
            </MDBNavbarBrand>

            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='/'>
                        Anasayfa
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='/taahhut'>
                        Taahhüt
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='/hizmetlerimiz'>
                        Hizmetlerimiz
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='/iletisim'>
                        İletişim
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='/bize-ulasin'>
                        Bize Ulaşın
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page'>
                        <ContactUsModal />
                    </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>
            
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
        <Outlet />
        </>
  );
}