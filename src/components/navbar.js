import React from 'react';
import { Navbar, NavItem, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import '../App.css';
import galvanize from '../images/galvanize-logo.svg';
import rsvp from '../images/rsvp.png';

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
    <Nav pullRight>
      <div>
        <ButtonToolbar>
          <Button bsStyle="xsmall">
            <a href="https://www.eventbrite.com/e/galvanize-nyc-web-development-capstone-showcase-tickets-44481279705">
            rsvp</a>
          </Button>
        </ButtonToolbar>
      </div>
    </Nav>
  </Navbar.Collapse>
  </Navbar>;

export default NavBar;
