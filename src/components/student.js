import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem, Jumbotron, Grid } from 'react-bootstrap';
import '../App.css';
var json = require('./json.js').json;

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
  // async
  getstudentinfo() {
    // const res = await fetch(`http://localhost:8000/studentInfoTable/${this.studentId}`);
    // const json = await res.json();
    var matchStudent;
    for (var i = 0; i < json.length; i++) {
      if (json[i].id == this.studentId) {
        matchStudent = json[i];
      }
    }
    console.log("matchStudent", matchStudent);
    this.setState({student: matchStudent, loading: false})
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
      <div>
      <Grid id="grid">
        <Row className="imageRow">
          <Col xs={6} md={4}>
            <a id="studentImages">
              <img id="roundimg" src={this.student.headshot} title={this.student.fullname} alt={this.student.fullname}></img>
            </a>
          </Col>
            <Col md={6} mdPull={6}>
              <Row>
                <div>
                  <h1 id="studentNameDetail">{this.student.fullname}</h1>
                </div>
              </Row>
              <br></br>
            <Row id="contactRow">
              <a href={this.student.linkedin} target="_blank" id="studentIcons">
                <i id="cardIcon" className="fab fa-linkedin fa-2x fa-fw"></i>
              </a>
              <a href={this.student.github} target="_blank" id="studentIcons">
                <i id="cardIcon" className="fab fa-github fa-2x fa-fw" ></i>
              </a>
              <a href={this.student.email}>
                <i id="cardIcon" className="fas fa-envelope-square fa-2x fa-fw"></i>
              </a>
            </Row>
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Row id="projectRow">
                    <a href={this.student.capstonelink}>
                      <i id="projectIcon" className="fas fa-graduation-cap"></i>
                      View my Capstone Project
                    </a>
                  </Row>
                  <Row id="projectRow">
                    <a href={this.student.q3project}>
                      <i id="projectIcon" className="fab fa-react"></i>
                      View my Third Quarter Project
                    </a>
                  </Row>
                  <Row id="projectRow">
                    <a href={this.student.q2project}>
                      <i id="projectIcon" className="fas fa-database"></i>
                      View my Second Quarter Project
                    </a>
                  </Row>
                  <Row id="projectRow">
                    <a href={this.student.q1project}>
                      <i id="projectIcon" className="fas fa-flask"></i>
                    View my First Quarter Project
                    </a>
                  </Row>
                </Col>
              </Row>
            </Grid>
            </Col>
        </Row>
        <Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="tabs">
            <Row className="clearfix">
              <div id="capbout">
              <Col sm={3}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first" id="capstonedesc">capstone</NavItem>
                  <NavItem eventKey="second" id="aboutme">about me</NavItem>
                </Nav>
              </Col>
              <div id="aboutcap">
              <Col sm={8}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">{this.student.capstonedesc}</Tab.Pane>
                  <Tab.Pane eventKey="second">{this.student.bio}</Tab.Pane>
                </Tab.Content>
              </Col>
            </div>
            </div>

            </Row>
          </Tab.Container>
        </Row>
      </Grid>
    </div>
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
