import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem, Jumbotron, Grid, Tabs, Button, Pager } from 'react-bootstrap';
import '../App.css';
var json = require('./json.js').json;

class Student extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS:", props);
    // console.log('STUDENT ID', this.studentId)
    this.state = {
      student: {},
      loading: false
    }
    this.getstudentinfo = this.getstudentinfo.bind(this)

    let nextId = parseInt(this.studentId) + 1;
    if(nextId === json.length+1) {
      nextId = 1;
    }
    console.log("nextId", nextId);
    this.nextId = nextId.toString();

    let previousId = parseInt(this.studentId) - 1;
    if(previousId < 1) {
      previousId = json.length;
    }
    console.log("previousId", previousId);
    this.previousId = previousId.toString();
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
  // getNextPage() {
  //   var appLink = "https://galvanizestudentgallery.herokuapp.com/student/";
  //   for(var i = ; i < json.length; i++) {
  //     appLink += i;
  //   }
  //   return handleClick(appLink);
  // }
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
            <div id="individualImage">
              <img id="headshot" src={this.student.headshot} title={this.student.fullname} alt={this.student.fullname}></img>
            </div>

          </Col>

            <Col md={6} mdPull={6}>
              <Row>
              <Pager>
                <Pager.Item id="previous" href={this.previousId}>Prev</Pager.Item>{' '}
                <Pager.Item id="next" href={this.nextId}>Next</Pager.Item>
              </Pager>
                <div>
                  <h1 id="studentNameDetail">{this.student.fullname}</h1>
                </div>
              </Row>
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
                  <Row id="projectRowTop">
                    <a href={this.student.capstonelink} target="_blank">
                      <i id="projectIconGradCap" className="fal fa-graduation-cap"></i>
                      View my Capstone Project
                    </a>
                  </Row>
                  <Row id="projectRowReact">
                    <a href={this.student.q3project} target="_blank">
                      <i id="projectIconReact" className="fab fa-react"></i>
                      View my 3rd Quarter Project
                    </a>
                  </Row>
                  <Row id="projectRowDb">
                    <a href={this.student.q2project} target="_blank">
                      <i id="projectIconDb" className="fal fa-database"></i>
                      View my 2nd Quarter Project
                    </a>
                  </Row>
                  <Row id="projectRowBottom">
                    <a href={this.student.q1project} target="_blank">
                      <i id="projectIconFlask" className="fal fa-flask"></i>
                    View my 1st Quarter Project
                    </a>
                  </Row>
                </Col>
              </Row>
            </Grid>
            </Col>
        </Row>
        <Row>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="About Me">
              {this.student.bio}
              <p>
                View my personal site: <a className="personalSite" href={this.student.personalsite}  target="_blank">{this.student.personalsite}</a>
              </p>
            </Tab>
            <Tab eventKey={2} title="Capstone Description">
              {this.student.capstonedesc}
            </Tab>
          </Tabs>
        </Row>
      </Grid>
    </div>
    )
  }
  get studentId() {
    return this.props.match.params.id;
  }
  get student() {
    return this.state.student;
  }

}

export default Student;

// <div className="pull-right">
// <Pager>
//   <Pager.Item id="previous" href={this.previousId}>Prev</Pager.Item>{' '}
//   <Pager.Item id="next" href={this.nextId}>Next</Pager.Item>
// </Pager>
// </div>
