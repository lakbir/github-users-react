import React from 'react';
import './App.css';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserItem from './components/users/UserItem';
import UserDetails from './components/users/UserDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="container mt-2">
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:login" component={UserItem} />
          <Route exact path="/users-details/:login" component={UserDetails} />
          <Route exact component={Users} />
        </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
