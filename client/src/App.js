import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter  as Router , Route} from 'react-router-dom';
// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Private from './components/Private/Private'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

import PublicRoute from './utils/PublicRoute'
import PrivateRoute from './utils/PrivateRoute'

const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="App">
      <Header />
      <PublicRoute exact path="/home" component={Home} />
      <PrivateRoute exact component={Private} path="/private"/>
      <PublicRoute exact restricted={isAuthenticated} path="/register" component={Register} />
      <PublicRoute exact restricted={isAuthenticated} path="/login" component={Login} />
    </div>
    </Router>
  )
}

export default App;

