import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'

import AssetsContainer from '../AssetsContainer'
import NewFuelingContainer from '../NewFuelingContainer'
import Autocomplete from '../../components/Autocomplete'
import EmptyState from '../../components/EmptyState'

import styles from './stylesOptions'

class Main extends Component {
	
	render(){
		const { classes, vehicleId }=this.props;

		return(	
			<main className={ classes.content }>
				{/*Vehicle autocomplete*/}
				<Autocomplete inputLabel="Vehicle"/>

				<Switch>
					{/*Vehicle Assets info*/}
					<Route 
						exact path='/assets/vehicle/:vehicleId'
						render={ () => vehicleId ? <AssetsContainer /> : <EmptyState infoMess='Please, seach vehicle' /> }/>

					{/*Form for new fueling registration*/}
	      			<Route
	      				exact path='/new-fueling' 
	      				component={ NewFuelingContainer }/>
				</Switch>
			</main>
		)
	}
}

export default withStyles(styles)(Main)
