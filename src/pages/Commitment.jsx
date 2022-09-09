import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import "../scss/Commitment.scss"

export default function Contact() {

  return (
    <div className='container'>
      <div className='commitmentTitle'>
        <h2 className='title'>Elektrik Taahhüt</h2>
      </div>
      <MDBAccordion initialActive={0}>
        <MDBAccordionItem collapseId={1} headerTitle='Zayıf Akım'>
          <ol>
            <li>Kamera Sistemi</li>
            <li>Telefon Tesisatı</li>
            <li>Su Tesisatı</li>
            <li>Data Tesisatı</li>
            <li>Güvenlik ve Kart Geçiş Sistemleri</li>
            <li>Otopark Kontrol ve Yönetim Sistemleri</li>
            <li>Karbonmonoksit Algılama ve İhbar Sistemleri</li>
            <li>Acil Anons ve Müzik Yayını</li>
            <li>Yangın Algılama ve İhbar Sistemleri</li>
          </ol>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle='Alçak Gerilim'>
          <ol>
            <li>Busbar ve Alçak Gerilim Kablo Tesisatı</li>
            <li>Dağıtım, MCC ve Kompazasyon Panoları</li>
            <li>Kablo Taşıma Sistemleri</li>
            <li>Aydınlatma Armatür Tesisatı</li>
            <li>UPS Tesisatı</li>
            <li>Bina Otomasyonu</li>
            <li>Jenerator Sistemleri</li>
            <li>Topraklama ve Yıldırım Sistemleri</li>
            <li>SCADA ve Enerji İzleme Sistemleri</li>
          </ol>
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
}