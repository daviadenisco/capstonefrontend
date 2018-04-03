import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, NavLink, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { matchRoutes } from 'react-router-config';
import { Button, Card, Row, Col, CardTitle, Icon } from 'react-materialize';
import Bootstrap from 'react-bootstrap';
import NavBar from './components/navbar';
import MeetTheStudents from './components/meetthestudents';
import Footer from './components/footer';
import Student from './components/student';
import Home from './components/home';
import './App.css';

class App extends Component {
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
    //       <h1 id="loading">Loading...</h1>
    //     </div>
    //   )
    return (
      <div>
        <NavBar />
        <MeetTheStudents />

        <BrowserRouter>
          <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/student">Student</NavLink>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/student/:id" component={Student}/>
            </div>
          </div>
        </BrowserRouter>
        <Footer />
    </div>

    )
  }
}

export default App;
