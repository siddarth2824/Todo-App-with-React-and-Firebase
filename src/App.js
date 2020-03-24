import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/layout/Layout';
//import Home from './containers/Home/Home';
import Login from './containers/Authenication/Login/Login';
import SignUp from './containers/Authenication/SignUp/SignUp';
import Logout from './containers/Authenication/Logout/Logout';
import Todos from './containers/Todos/Todos';
import VerifyEmail from './containers/Authenication/VerifyEmail/VerifyEmail';
import RecoverPassword from './containers/Authenication/RecoverPassword/RecoverPassword';
import Profile from './containers/Authenication/Profile/Profile';

const App = ({ loggedIn, emailVerified }) => {
  console.log(loggedIn);

  let routes;

    if(loggedIn && !emailVerified){
        routes= (
        <Switch>
            <Route exact path='/verify-email' component={VerifyEmail} />
            <Route exact path="/logout" component={Logout} />
            <Redirect to="/verify-email" />
        </Switch>
        )
    }

  else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);