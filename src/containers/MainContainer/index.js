import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import AssetsContainer from '../AssetsContainer'
import NewFuelingContainer from '../NewFuelingContainer'
import Autocomplete from '../../components/Autocomplete'
import EmptyState from '../../components/EmptyState'

import styles from './stylesOptions'

// Util func to check vehicleId from url params 
const isVehicleIdPresent = function (vehicleId) {
	const isVehicleId = vehicleId || vehicleId === 0;
	return isVehicleId;
}

class Main extends Component {
	
	render(){
		const { classes, vehicleId } = this.props;

		return(	
			<main className={ classes.content }>
				{/*Vehicle autocomplete*/}
				<Autocomplete inputLabel="Vehicle"/>

				<Switch>
					{/*Vehicle Assets info*/}
					<Route 
						exact path='/assets/vehicle/:vehicleId'
						render={ ({ match }) => {
								// debugger;
								return isVehicleIdPresent(JSON.parse(match.params.vehicleId)) ?
									 <AssetsContainer />
									 : <EmptyState infoMess='Please, search vehicle' /> 
							}
						}/>

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

