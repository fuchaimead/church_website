import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import Announcements from './Announcements';
import AnnouncementForm from './AnnouncementForm';
import Contact from './Contact';
import EpiscopalChurch from './EpiscopalChurch';
import Membership from './Membership';
import Daughters from './Daughters';
import BibleStudy from './BibleStudy';
import Resources from './Resources';
import Lent from './Lent';
import EndowmentFund from './EndowmentFund';
import Sermons from './Sermons';
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
            <Route exact path='/' component={ Home } />
            <AuthRoute exact path='/admin' component={ Login } />
            <ProtectedRoute exact path='/register' component={ Register } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/announcements' component={ Announcements } />
            <Route exact path='/announcement-form' component={ AnnouncementForm } />
            <Route exact path='/membership' component={ Membership } />
            <Route exact path='/daughters-of-the-king' component={ Daughters } />
            <Route exact path='/bible-studies' component={ BibleStudy } />
            <Route exact path='/endowment-fund' component={ EndowmentFund } />
            <Route exact path='/episcopal-church' component={ EpiscopalChurch } />
            <Route exact path='/sermons' component={ Sermons } />
            <Route exact path='/contact' component={ Contact } />
            <Route exact path='/resources' component={ Resources } />
            <Route exact path='/lent' component={ Lent } />
            <Route component={ NoMatch } />
          </Switch>
        </FetchUser>
        <Footer /> 
      </div>
    );
  }
}

export default App;
