import "../scss/Contact.scss"
import emailjs from "emailjs-com"
import { useState } from "react";
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";

const ContactUs = () => {
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
            <div className="contact">
                <div className="contactLeft">
                    <h1>Bize Ulaşın 🚪</h1>
                    <p>ürün ve hizmetlerimizi gerçekleştirebilmemiz için görüş ve önerileriniz bizim için son derece önemlidir. Görüş ve önerileriniz en kısa zamanda değerlendirilecek ve sonucu hakkında size mutlaka geri dönülecektir. Hizmetlerimizden yararlanmak veya Hizmet ve ürünler ile ilgili görüş/öneri ve şikayetlerinizi sağdaki online başvuru formunu doldurarak ya da +90 216 573 34 72 Numaralı hattımızı arayarak ulaşabilirsiniz.</p>
                </div>
                <div className="contactRight">
                    <form className="contactForm" onSubmit={sendEmail}>
                        <label>
                            <h3>Adınız</h3>
                            <input type="text" placeholder="Adınız" name="name" required />
                        </label>
                        <label>
                            <h3>Soyadınız</h3>
                            <input type="text" placeholder="Soyadınız" name="surname" required />
                        </label>
                        <label>
                            <h3>Telefon Numaranız</h3>
                            <input type="phone" placeholder="Telefon Numaranız" name="phone" required />
                        </label>
                        <label>
                            <h3>E-mail Adresiniz</h3>
                            <input type="email" placeholder="Email" name="email" required />
                        </label>
                        <label>
                            <h3>Size Nasıl Yardımcı Olabiliriz ?</h3>
                            <textarea name="subject" required></textarea>
                        </label>
                        
                        <input type="submit" className="submitBtn" value="Gönder" />
                    </form>
                </div>
            </div>
        </>
    )
  };
  
  export default ContactUs;