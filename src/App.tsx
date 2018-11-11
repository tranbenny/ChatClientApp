import * as React from 'react';
import {Route} from 'react-router-dom';

import Home from './home/Home';
import Login from './login/Login';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  
  // TODO: ADD NAV BAR ROUTER 
  public render() {
    const classes = 'App container';
    return (
      <div className={classes}>
        <Route exact={true} path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
