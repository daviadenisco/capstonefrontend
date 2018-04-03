import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { matchRoutes } from 'react-router-config';
import Bootstrap from 'react-bootstrap';
import '../App.css';
import galvanize from '../images/galvanize-logo.svg';
import eventbrite from '../images/eventbrite.jpg';

const NavBar = () =>
  <div className={'navbar'}>
    <a href="https://www.galvanize.com/denver-golden-triangle" target="_blank">
        <img className="galvanize-logo" src={galvanize} alt="galvanize logo" responsive/>
    </a>
    <a href="https://www.eventbrite.com/d/ny--new-york/galvanize/?q=galvanize&loc=New+York%2C+NY&date=" target="_blank">
      <img className="eventbrite-logo" src={eventbrite} title="RSVP" alt="rsvp" responsive/>
    </a>
  </div>

export default NavBar;
