import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from "reactstrap";
import { FiMenu } from "react-icons/fi";
import {docs} from "../library/careerData"
import navStyles from "../styles/Nav.module.css";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md sm lg" sticky="top" className="px-5 w-100">
      <NavbarBrand href="/">
        <h1 className={navStyles.title}>Michael</h1>
      </NavbarBrand>
      < FiMenu className={navStyles.icon}  onClick={toggle} />
      {/* <NavbarToggler onClick={toggle} style={{ backgroundColor: "#fff" }} /> */}
      <Collapse isOpen={isOpen} navbar >
        <Nav className="mr-auto" navbar>
          <NavItem >
            <NavLink href="/#products" > <span className={navStyles.list}>Projects</span> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#about" className="text-white"><span className={navStyles.list}>About me</span> </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/#aboutMe" className="text-white"><span className={navStyles.list}>More of me</span> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#contact"className="text-white"><span className={navStyles.list}>Contact</span> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={docs.certificates} target="_blank" rel="noopener noreferrer" className="text-white"><span className={navStyles.list}>certificates</span> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={docs.Resume} target="_blank" rel="noopener noreferrer" className="text-white"><span className={navStyles.list}>Resume</span> </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navi;
