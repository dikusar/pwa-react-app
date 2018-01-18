import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';

import FuelingAssets from '../FuelingAssets'
import newFueling from '../newFueling'

import styles from './stylesOption'

class Main extends Component {
	
	render(){
		const { classes }=this.props;

		return(	
			<main className={ classes.content }>
				<Switch>
					<Route exact path='/' component={ FuelingAssets }/>
	      			<Route exact path='/vehicle-search' component={ newFueling }/>
				</Switch>
			</main>
		)
	}
}

export default withStyles(styles)(Main)
