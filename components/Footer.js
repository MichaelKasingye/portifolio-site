import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { contacts } from "../library/contact";
import footer from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={footer.footer}>
      <div className={footer.footerDetails}>
        <span>
          Haruna towers Ntinda, ground floor <br />
          P.O Box 23484 <br />
          Kampala Uganda <br />
        </span>
      </div>
      <div className={footer.footerDetails}>
        <span>
          <span>{contacts.tel}</span> <br />
          <span>{contacts.email}</span>
        </span>
      </div>
      <div className={footer.footerDetails}>
        <AiFillInstagram style={{ height: "40px", width: "40px" }} />{" "}
        <AiFillFacebook style={{ height: "40px", width: "40px" }} />
      </div>
    </div>
  );
}

export default Footer;
