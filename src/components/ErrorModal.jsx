import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import "../scss/Modal.scss"

export default function ErrorModal() {
  const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog className='errorModalDialog'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Mesajınız Gönderilirken Bir Hata Oluştu !</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Lütfen En Kısa Sürede Tekrar Deneyin veya  +90 216 573 34 72 | +90 532 661 34 62 Numaralı Hatlarımızdan Bize Ulaşın.</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn onClick={toggleShow} className='errorButton'>
                Kapat
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}