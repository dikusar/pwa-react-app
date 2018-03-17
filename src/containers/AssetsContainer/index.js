import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';

import FuelingAssets from '../../components/FuelingAssets'
import VehicleMetrics from '../../components/VehicleMetrics'

import flexStyles from '../../styles/flexStyles'


class AssetsLayout extends Component {

	render() {
		const { classes }=this.props;
		return (
			<div className={ classes.flex }>
				<FuelingAssets />
				<VehicleMetrics />
			</div>
		);
	}
}

export default withStyles(flexStyles)(AssetsLayout)

