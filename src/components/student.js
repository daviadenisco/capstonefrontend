import React, {Component, ChildComponent} from 'react';
import {BrowserRouter, NavLink, Route, Link} from 'react-router-dom';
import { Bootstrap, Tabs, Tab, Row, Col, Nav, NavItem, Jumbotron, Grid, Container, Content, Pane } from 'react-bootstrap';
import '../App.css';

class Student extends Component {
  constructor(props) {
    super(props);
    console.log('STUDENT ID', this.studentId)
    this.state = {
      student: {},
      loading: false
    }
    this.getstudentinfo = this.getstudentinfo.bind(this)
  };
  async getstudentinfo() {
    const res = await fetch(`http://localhost:8000/studentInfoTable/${this.studentId}`);

    const json = await res.json();
this.setState({student: json, loading: false})
    // setTimeout(() => , 3000);
  }
  componentWillMount() {
    this.getstudentinfo();
  }
  handleClick() {
    this.props.returnStudenInfo();
  }
  render() {
    // const match = this.props.match || {params: {}}
    // const studentid = this.state.students[0];
    if (this.state.loading) {
      return <Jumbotron style={{
        backgroundImage: 'url(http://24.media.tumblr.com/tumblr_mcoee0phmA1r3p9nio1_400.gif)',
        backgroundSize: 'cover',
        color: 'white'
      }}>
        <h1>LOADING... JAVA-scripts</h1>
      </Jumbotron>;
    }
    return (
      <Grid>
        <Row className="imageRow">
          <Col xs={6} md={4}>
            <a id="studentImages">
              <img id="roundimg" src={this.student.headshot} title={this.student.fullname}></img>
            </a>
          </Col>
            <Col md={6} mdPull={6}>
            <h1>{this.student.fullname}</h1>
          </Col>
        </Row>
        <Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="tabs">
            <Row className="clearfix">
              <Col sm={3}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first" id="capstonedesc">capstone project</NavItem>
                  <NavItem eventKey="second" id="aboutme">about me</NavItem>
                </Nav>
              </Col>
              <Col sm={7}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">{this.student.capstonedesc}</Tab.Pane>
                  <Tab.Pane eventKey="second">{this.student.bio}</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </Grid>

    )
  }
  get studentId() {
    return this.props.match.params.id
  }
  get student() {
    return this.state.student;
  }
}

export default Student;
