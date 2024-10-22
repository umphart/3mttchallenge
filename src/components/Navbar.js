import React from 'react'; 
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CustomNavbar = () => (
  <Navbar style={{ backgroundColor: 'cyan' }} light expand="md">
    <NavbarBrand tag={Link} to="/">CyberShield Nigeria</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/education">Education</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/training">Training</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/incident-report">Report Incident</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default CustomNavbar;
