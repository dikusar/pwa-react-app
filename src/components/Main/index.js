import React from 'react';
import { Switch, Route } from 'react-router-dom'

import InpsectionList from '../InpsectionList'
import VehicleSearch from '../VehicleSearch'

function Main () {
	return(
		<main>
			<Switch>
				<Route exact path='/' component={ InpsectionList }/>
      			<Route exact path='/Vehicle-search' component={ VehicleSearch }/>
			</Switch>
		</main>
	)
}

export default Main
