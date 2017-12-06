import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Material theme
import { MuiThemeProvider, createMuiTheme, withTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
// import red from 'material-ui/colors/red';

// Material components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import './App.css';

const Home = () => (
  <div>
	<h2>URL Home</h2>
  </div>
)

const About = () => (
  <div>
	<h2>YRL About</h2>
  </div>
)

const defaultTheme = createMuiTheme();

debugger;

const theme = createMuiTheme({
	root: {
		marginTop: defaultTheme.spacing.unit * 3,
		width: '100%',
	},
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  }
});


class App extends Component {
  render() {
	return (
		<MuiThemeProvider theme={ theme }>
			<Router>
				<div className="App">

					
					<AppBar position="static" color='primary'>
						<Toolbar>
							<Typography type="title" color="inherit">
								Progressive Web App
							</Typography>
						</Toolbar>
					</AppBar>
						
					

					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>

				</div>
			</Router>
	  </MuiThemeProvider>
	);
  }
}

export default withTheme()(App);
