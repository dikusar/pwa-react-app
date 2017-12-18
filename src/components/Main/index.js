import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';

import InpsectionList from '../InpsectionList'
import VehicleSearch from '../VehicleSearch'

import styles from './stylesOption'

class Main extends Component {
	
	render(){
		const { classes }=this.props;

		return(	
			<main className={ classes.content }>
				<Switch>
					<Route exact path='/' component={ InpsectionList }/>
	      			<Route exact path='/vehicle-search' component={ VehicleSearch }/>
				</Switch>
			</main>
		)
	}
}

export default withStyles(styles)(Main)
