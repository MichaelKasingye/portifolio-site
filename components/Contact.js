import React from "react";
import { ImMail3 } from "react-icons/im";
import { AiTwotonePhone } from "react-icons/ai";
import { contacts } from "../library/contact";
import contact from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={contact.contacts}>
         <iframe className={contact.iframe}
         id="inlineFrameExample"
    title="Inline Frame Example"
    frameBorder="0" scrolling="no"
    // width="300"
    // height="200"
    src="https://contactformmike.netlify.app/">
</iframe>
    </div>
  );
}

export default Contact;
