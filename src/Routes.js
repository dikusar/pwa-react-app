import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'



// App's components
import InspectionList from './components/inspection-list'
// import TopAppBar from './components/top-app-bar'
import ResponsiveDrawer from './components/responsive-drawer'

const About = () => (
	<div>
		<h2>URL About</h2>
	</div>
)

const routes = [{
        path: '/',
        component: InspectionList
    },
    {
        path: '/about',
        component: About
    }
]

const RouterFrame = (route) => (
	<Route exact path={route.path} component={route.component} />
	)

export default ({childProps}) =>

<Router>

<div>
	<ResponsiveDrawer />
	{routes.map( (route, i) => (
		<RouterFrame key={i} {...route}/>
		))}

	</div>
</Router>;