import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import Membership from './Membership';
import Daughters from './Daughters';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/admin' component={Login} />
            <ProtectedRoute exact path='/register' component={Register} />
            <Route exact path='/about' component={About} />
            <Route exact path='/membership' component={Membership} />
            <Route exact path='/daughters-of-the-king' component={Daughters} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer /> 
      </div>
    );
  }
}

export default App;
