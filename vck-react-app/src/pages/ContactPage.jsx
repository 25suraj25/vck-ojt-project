import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <><div className="body">
      <Header />
      <div className="inner-body">
        <h1 id="contact-title">Contact Us</h1>

        <p id="con-text">We'd love to hear from you! Whether you have
          questions about admissions, programs, or campus life,
          our team is here to help.</p>

        <h1 className="genral-hedline">General Enquiries</h1>

        <p id="abt-collage"><strong>Vivekanand College Main Campus</strong>
          <br></br>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br></br>India</p>
        <p className="abt-collage2">Phone: <b>+91 12345 67890</b>
          <br></br>Email: <b>info@vivekanandcollege.edu</b><br></br>
          Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

        <h1 className="genral-hedline" >Student Support Services</h1>
        <p className="abt-collage2">For current student support, academic advising, or general assistance:<br></br>
          Phone: +91 87654 32109<br></br>Email: studentsupport@vivekanandcollege.edu</p>

        <h1 className="genral-hedline" >Find us on Map</h1>
        <p id="map-link"><br></br><a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>

        <h1 className="genral-hedline" >Send Us a Message</h1>
        <p className="abt-collage2">[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
      </div>

    </div>
      <Footer /></>
  );

}

export default ContactPage;