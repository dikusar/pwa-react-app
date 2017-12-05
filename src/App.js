import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


class App extends Component {

    getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }

  render() {
    return (
      <Router>
            <div className="App">

              <header className="App-header">
                <AppBar />


                <h1 className="App-title">Welcome to React</h1>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

              </header>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
              
            </div>
      </Router>
    );
  }
}

// App.childContextTypes = {
//     muiTheme: React.PropTypes.object.isRequired
// };

export default App;
