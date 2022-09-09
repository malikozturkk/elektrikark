import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import Content1 from "../img/content1.jpeg"
import Content2 from "../img/content2.jpeg"
import Content3 from "../img/content3.jpeg"
import "../scss/Content.scss"
import HomePageServices from "../components/HomePageServices"



export default function Content() {
  return (
    <>
        <div className="content-top">
            <div className="card-1">
                <MDBIcon fas icon="tools" />
                <img src={Content1} alt="" />
                <div className="desc">
                    <h3>7 / 24 Pano Teknik Servis</h3>
                    <p>Kompanzasyon ve diğer elektrik panolarına ait profesyonel bakım, destek ve acil malzeme çözümleriyle hizmetinizdeyiz.</p>
                </div>
            </div>

            <div className="card-2">
                <MDBIcon fas icon="clock" />
                <img src={Content2} alt="" />
                <div className="desc">
                    <h3>Kalite Yönetimi</h3>
                    <p>Firmamız için kalite bir ahlak felsefesidir. Üretimin her aşamasında, satışta, satış sonrası hizmette ve serviste vazgeçilmezimizdir.</p>
                </div>
            </div>

            <div className="card-3">
                <MDBIcon fas icon="people-carry" />
                <img src={Content3} alt=""/>
                <div className="desc">
                    <h3>Ekip Ruhu</h3>
                    <p>Yönetim kadromuz, konularında uzman çalışanlarımız ve servis elemanlarımız ile takım ruhu oluşturduk; sizlere daha iyi hizmet sağlamak için.  </p>
                </div>
            </div>
            <div className="clear"></div>
        </div>
        <div className='servicesDiv'>
            <div className="ourServicesTitle">
                <hr className='productsTitleLine left' />
                HİZMETLERİMİZ
                <hr className='productsTitleLine right' />
            </div>
            <HomePageServices />
        </div>
    </>
  );
}