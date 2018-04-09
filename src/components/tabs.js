import React, { Component, ChildComponent } from 'react';
import { BrowserRouter, NavLink, Route, Link } from 'react-router-dom';
import { Bootstrap, Tabs, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handSelect = this.handSelect.bind(this);

    this.state = {
      key: 1
    };
  }
  handSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }
  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Capstone Description">
          {student.capstonedesc}
        </Tab>
        <Tab eventKey={2} title="About Me">
          {/* <p>{student.personalsite}</p> and other stuff too
          <p>{student.personalsite}</p> */}
        </Tab>
      </Tabs>
    );
  }
}
render(<ControlledTabs />)

export default ControlledTabs;
