import React from 'react';
import { Bootstrap, Navbar, NavItem, Nav, Header, Toggle, Brand, Collapse, Button } from 'react-bootstrap';
import '../App.css';
import galvanize from '../images/galvanize-logo.svg';
import rsvp from '../images/rsvp-logo.svg';

const style = {
  border: 'none'
}

const NavBar = () =>

  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a className="navbar-brand" href="https://www.galvanize.com/denver-golden-triangle" target="_blank" rel="noopener noreferrer">
        <img className="galvanize-logo" src={galvanize} alt="galvanize logo" width="150px" responsive/>
      </a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    </Nav>
    <Nav pullRight>
    <NavItem>
      {/* <NavItem eventKey={1} href="https://www.eventbrite.com/d/ny--new-york/galvanize/?q=galvanize&loc=New+York%2C+NY&date=" target="_blank" rel="noopener noreferrer">
        <img className="eventbrite-logo" src={eventbrite} title="RSVP" alt="rsvp" responsive/> */}
        <Button bsStyle="link" className='rsvp' id="button">rsvp</Button>

      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;

export default NavBar;
