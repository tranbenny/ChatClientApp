import * as React from 'react';
import Login from './login/Login';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  public render() {
    const classes = 'App container';
    return (
      <div className={classes}>
        <Login />
      </div>
    );
  }
}

export default App;
