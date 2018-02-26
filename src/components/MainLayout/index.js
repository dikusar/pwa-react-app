import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'

import AssetsLayout from '../AssetsLayout'
import NewFueling from '../NewFueling'

import styles from './stylesOption'

class Main extends Component {
	
	render(){
		const { classes }=this.props;

		return(	
			<main className={ classes.content }>
				<Switch>
					<Route exact path='/assets' component={ AssetsLayout }/>
	      			<Route exact path='/new-fueling' component={ NewFueling }/>
				</Switch>
			</main>
		)
	}
}

export default withStyles(styles)(Main)
