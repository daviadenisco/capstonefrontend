import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { matchRoutes } from 'react-router-config';
import App from '../App.js';
import Bootstrap from 'react-bootstrap';
import '../App.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      studentinfotablearr: [],
      loading: false
    }
    this.getstudentinfo = this.getstudentinfo.bind(this)
  };

  async getstudentinfo() {
    const res = await fetch('http://localhost:8000/studentInfoTable');

    const json = await res.json();

    this.setState({
      studentinfotablearr: json,
      loading: false
    })
  }
  componentDidMount() {
    this.getstudentinfo();
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
        <div id="allStudentImagesTogether" className="col s6 m6 l4" key={index}>
          <a href="/student/:id">
            <a id="studentImages">
              <img id="roundimg" src={student.headshot} title={student.fullname} responsive></img></a>
            <p id="studentName">{student.fullname}</p>
          </a>
        </div>
    )
  }
}

export default Home;
