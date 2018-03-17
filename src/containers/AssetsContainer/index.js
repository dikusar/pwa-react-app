import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';

import FuelingAssets from '../../components/FuelingAssets'
import VehicleMetrics from '../../components/VehicleMetrics'

import flexStyles from '../../styles/flexStyles'


class AssetsContainer extends Component {

	render() {
		const { classes }=this.props;
		return (
			<div>
				<div className={ classes.flex }>
					<FuelingAssets />
					<VehicleMetrics />
				</div>
			</div>
		);
	}
}

export default withStyles(flexStyles)(AssetsContainer)

