import React from "react";
import { ImMail3 } from "react-icons/im";
import { AiTwotonePhone } from "react-icons/ai";
import { contacts } from "../library/contact";
import contact from "../styles/Contact.module.css";
function Contact() {
  return (
    <div className={contact.contacts}>
      <div className={contact.number}>
        <span>
          <AiTwotonePhone
            style={{ color: "#dc3545", height: "20px", width: "20px" }}
          />
        </span>
        <span className={contact.contactDetail}>{contacts.tel}</span>
      </div>
      <div className={contact.number}>
        <span>
          <ImMail3
            style={{ color: "#dc3545", height: "20px", width: "20px" }}
          />
        </span>
        <span className={contact.contactDetail}>{contacts.email}</span>
      </div>
    </div>
  );
}

export default Contact;
