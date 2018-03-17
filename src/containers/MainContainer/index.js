import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'

import AssetsContainer from '../AssetsContainer'
import NewFuelingContainer from '../NewFuelingContainer'
import Autocomplete from '../../components/Autocomplete'

import styles from './stylesOptions'

class Main extends Component {
	
	render(){
		const { classes }=this.props;

		return(	
			<main className={ classes.content }>
				{/*Vehicle autocomplete*/}
				<Autocomplete />
				<Switch>
					<Route exact path='/assets' component={ AssetsContainer }/>
	      			<Route exact path='/new-fueling' component={ NewFuelingContainer }/>
				</Switch>
			</main>
		)
	}
}

export default withStyles(styles)(Main)
