import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          className="contact youtube"
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Cal Bears</span>
          </h2>
        </a>

        <a
          className="contact whatsapp"
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            phone <span>+0 000 000 0000</span>
          </h2>
        </a>

        <a  
          className="contact instagram"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>AD</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
