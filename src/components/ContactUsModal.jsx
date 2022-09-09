import React, { useState } from 'react';
import "../scss/ContactUsModal.scss"
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBIcon,
  MDBModalFooter
} from 'mdb-react-ui-kit';
import emailjs from "emailjs-com"
 
export default function ApContactUsModalp() {
    const [basicModal, setBasicModal] = useState(false);
  
    const toggleShow = () => setBasicModal(!basicModal);

    const [successShowModal, setSuccessShowModal] = useState(false)
    const [errorShowModal, setErrorShowModal] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rymollf', 'template_a0fr687', e.target, 'w4qTvVUPQLRvJV2bs')
          .then((result) => {
              if (result.status === 200) {
                setSuccessShowModal(true)
              }
              else {
                setErrorShowModal(true)
              }
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  
    return (
      <>
        {successShowModal === true && <SuccessModal />}
        {errorShowModal === true && <ErrorModal />}
        <MDBBtn onClick={toggleShow}><MDBIcon fas icon="lightbulb" /> Fiyat Al</MDBBtn>
        {successShowModal === false  &&
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Fiyat Al</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="contactRight">
                        <form className="contactForm" onSubmit={sendEmail}>
                            <label className='contactUsLabel'>
                                <h3>Adınız</h3>
                                <input type="text" className='contactUsInput' placeholder="Adınız" name="name" required />
                            </label>
                            <label className='contactUsLabel'>
                                <h3>Soyadınız</h3>
                                <input type="text" className='contactUsInput' placeholder="Soyadınız" name="surname" required />
                            </label>
                            <label className='contactUsLabel'>
                                <h3>Telefon Numaranız</h3>
                                <input type="phone" className='contactUsInput' placeholder="Telefon Numaranız" name="phone" required />
                            </label>
                            <label className='contactUsLabel'>
                                <h3>E-mail Adresiniz</h3>
                                <input type="email" className='contactUsInput' placeholder="Email" name="email" required />
                            </label>
                            <label className='contactUsLabel'>
                                <h3>Size Nasıl Yardımcı Olabiliriz ?</h3>
                                <textarea name="subject" required className='contactUsInput'></textarea>
                            </label>
                            
                            <input type="submit" className="submitBtn" value="Fiyat Al" />
                        </form>
                    </div>
              </MDBModalBody>
  
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>Kapat</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        }
      </>
    );
  }