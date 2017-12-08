import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Material components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Home = () => (
  <div>
	<h2>URL Home</h2>
  </div>
)

const About = () => (
  <div>
	<h2>URL About</h2>
  </div>
)

export default ({childProps}) =>
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
;