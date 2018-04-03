import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Link } from 'react-router-dom';
import '../App.css';
// const student = {
//   fullname: "Del",
//   headshot: "https://i.imgur.com/VyH0uYF.jpg"
// };

class Student extends Component {
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
    const match = this.props.match || {params: {}}
    // const studentid = this.state.studentinfotablearr[0];
    return this.state.studentinfotablearr.map((student, index) =>

      <div>
        <h1>{student.fullname} {match.params.name}</h1>
        <a id="studentImages"><img id="roundimg" src={student.headshot} title={student.fullname}></img></a>      </div>
    )
  }
}

export default Student;
