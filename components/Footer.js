import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMediumCircle, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

import { contacts } from "../library/contact";
// import { externalLinks } from "../library/icons";

import footer from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={footer.footer}>
      {/* <div className={footer.footerDetails}>
        <span>
          Haruna towers Ntinda, ground floor <br />
          P.O Box 23484 <br />
          Kampala Uganda <br />
        </span>
      </div> */}
      {/* <div className={footer.footerDetails}>
        <span>
          <span>{contacts.tel}</span> <br />
          <span>{contacts.email}</span>
        </span>
      </div> */}
      <div className={footer.footerDetails}>
      <Link href="https://www.linkedin.com/in/michaelkasingye/">
      <a target="_blank" rel="noopener noreferrer"> 
        <AiFillLinkedin style={{ height: "40px", width: "40px" }} />
        </a></Link>{" "}

        <Link href="https://github.com/MichaelKasingye">
      <a target="_blank" rel="noopener noreferrer"> 
        <AiFillGithub style={{ height: "40px", width: "40px" }} />
        </a></Link>

        <Link href="https://michaelkasingye.medium.com/">
      <a target="_blank" rel="noopener noreferrer"> 
        <AiFillMediumCircle style={{ height: "40px", width: "40px" }} />
        </a></Link>

        <Link href="https://www.youtube.com/channel/UCMsbWRujsYQAremu5Zdu-BA">
      <a target="_blank" rel="noopener noreferrer"> 
        <AiFillYoutube style={{ height: "40px", width: "40px" }} />
        </a></Link>

      </div>
    </div>
  );
}

export default Footer;
