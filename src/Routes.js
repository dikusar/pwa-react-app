import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'



// App's components
import InspectionList from './components/inspection-list'
import TopAppBar from './components/top-app-bar'

const About = () => (
  <div>
	<h2>URL About</h2>
  </div>
)



export default ({childProps}) =>

	<Router>
		<nav>
			<TopAppBar />

			<Route exact path="/" component={InspectionList}/>
			<Route exact path="/about" component={About}/>
		</nav>
	</Router>
;