import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, NavLink, Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { matchRoutes } from 'react-router-config';
import { Button, Card, Row, Col, CardTitle, Icon } from 'react-materialize';
import Bootstrap from 'react-bootstrap';
import NavBar from './components/navbar';
import MeetTheStudents from './components/meetthestudents';
// import Footer from './components/footer';
import Student from './components/student';
import Home from './components/home';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentinfotablearr: [],
      loading: false,
      student: '1'
    }
    this.getstudentinfo = this.getstudentinfo.bind(this)
    this.returnStudentInfo = this.returnStudentInfo.bind(this)
  };

  async getstudentinfo() {
    const res = await fetch(`http://localhost:8000/studentInfoTable`);

    const json = await res.json();

    this.setState({
      studentinfotablearr: json,
      loading: false
    })
  }
  componentDidMount() {
    this.getstudentinfo();
  }

  returnStudentInfo() {
    // this.setState({student: "2"})
    console.log("working")
    return this.state.studentinfotablearr
  }

  // returnHeader() {
  //   return <MeetTheStudents />
  // }

  render() {
    // if (this.props.loading) {
    //   return (
    //     <div>
    //       <h1 id="loading">Loading...</h1>
    //     </div>
    //   )
    return (
        <BrowserRouter>
          <div>
            {/* <NavLink exact to="/">Home</NavLink> */}

            <NavLink to="/student"></NavLink>
              <Switch>
                <Route exact path="/" render={() =>
                  <div>
                    <MeetTheStudents />
                    <Home returnStudentInfo={this.returnStudentInfo} student={this.props.student}/>
                  </div>
                }/>
                <Route exact path="/student/:id" component={Student}/>
              </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
