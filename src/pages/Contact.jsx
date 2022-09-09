import "../scss/Contact.scss"

const Contact = () => {
    return (
        <>
            <div className="contactInformation">
                <h1 className="contactPageTitle">İletişim Bilgileri</h1>
                <p><b>Adres:</b> İçerenköy Mahallesi Prof. Dr. Necmettin Erbakan Cad. Yaşaroğlu Apt. No 75/8 Ataşehir, İstanbul</p>
                <p><b>Telefon:</b> <a href="tel:+902165733472">+90 216 573 34 72</a></p>
                <p><b>GSM:</b> <a href="tel:+905326613462">+90 532 661 34 62</a></p>
                <p><b>Mail:</b> <a href="mailto:info@espaelektrik.com.tr">info@elektrikark.com</a></p>
                <div className="contactMapDiv">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2455924691358!2d29.118146533546362!3d40.97610276316486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6139a328ed1%3A0x42c7e271bd222f2a!2zxLDDp2VyZW5rw7Z5LCBQcm9mLiBEci4gTmVjbWV0dGluIEVyYmFrYW4gQ2QgTm86NzUsIDM0NzUyIEF0YcWfZWhpci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1661187344178!5m2!1str!2str" className="contactMap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
  };
  
  export default Contact;