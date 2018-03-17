import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'

import AssetsContainer from '../AssetsContainer'
import NewFueling from '../../components/NewFueling'

import styles from './stylesOptions'

class Main extends Component {
	
	render(){
		const { classes }=this.props;

		return(	
			<main className={ classes.content }>
				<Switch>
					<Route exact path='/assets' component={ AssetsContainer }/>
	      			<Route exact path='/new-fueling' component={ NewFueling }/>
				</Switch>
			</main>
		)
	}
}

export default withStyles(styles)(Main)
