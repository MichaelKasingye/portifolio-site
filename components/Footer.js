import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMediumCircle, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

// import { externalLinks } from "../library/icons";

import footer from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={footer.footer}>
   
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
      <p>techymichael@gmail.com</p>
    </div>
  );
}

export default Footer;
