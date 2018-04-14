import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../App.css';
var json = require('./json.js').json;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentinfotablearr: [],
      loading: false
    }
    this.getstudentinfo = this.getstudentinfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  // async
  getstudentinfo() {
    // const res = await fetch('http://localhost:8000/studentInfoTable');
    //
    // const json = await res.json();

    this.setState({
      studentinfotablearr: json,
      // json,
      loading: false
    })
  }
  componentWillMount() {
    this.getstudentinfo();
  }
  handleClick() {
    this.props.returnStudentInfo();
  }
  render() {
    // if (this.state.loading) {
    //   return (
    //     <div>
    //       <h1 id="loading">good stuff loading...</h1>
    //     </div>
    //   )
    // }

    return this.state.studentinfotablearr.map((student, index) =>
    <div id="allStudents">
      <div id="studentBody">
      <Col xs={6} md={4} key={index}>
          <a href={`/student/${student.id}`} id="studentImages">
          <img id="roundimg" src={student.headshot} title={student.fullname} responsive alt={student.fullname}></img>
          <p><a id="studentName">{student.fullname}</a></p>
          </a>
        </Col>
      </div>
    </div>
    )
  }
}

export default Home;
