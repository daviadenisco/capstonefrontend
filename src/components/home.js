import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import App from '../App.js';
import MeetTheStudents from './meetthestudents.js';
import Bootstrap from 'react-bootstrap';
import '../App.css';

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

  async getstudentinfo() {
    const res = await fetch('http://localhost:8000/studentInfoTable');

    const json = await res.json();

    this.setState({
      studentinfotablearr: json,
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
      <div id="studentBody" onClick={this.handleClick}>
        <div className="col s6 m6 l4" key={index}>
          <a href={`/student/${student.id}`} id="studentImages">
          <img id="roundimg" src={student.headshot} title={student.fullname} responsive></img>
          <p><a id="studentName" href={`/student/${student.id}`}>{student.fullname}</a></p>
          </a>
        </div>
      </div>
    )
  }
}

export default Home;
