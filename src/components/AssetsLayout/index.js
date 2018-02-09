import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import FuelingAssets from '../FuelingAssets'
import VehicleMetrics from '../VehicleMetrics'


class AssetsLayout extends Component {


	render() {
		return (
			<div>
				<FuelingAssets />
				<VehicleMetrics {...this.props}/>
			</div>
		);
	}
}

export default AssetsLayout

