import React from 'react';
import ReactDOM from 'react-dom';
import { Router, NavLink, Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { matchRoutes } from 'react-router-config'
import './index.css';
import NavBar from './components/navbar';
import App from './App';
import Footer from './components/footer';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
