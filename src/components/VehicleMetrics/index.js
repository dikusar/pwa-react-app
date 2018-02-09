import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function VehicleMetrics(props) {
	const { theme }=props;
	debugger;
	return(
		<div style={ theme.card }>
			<Card>
				<Typography gutterBottom="true" type="headline">
					Vehicle Metrics
				</Typography>
			</Card>
		</div>
	)

}

VehicleMetrics.propTypes = {
	// classes: PropTypes.object.isRequired
};

export default withStyles({ withTheme: true })(VehicleMetrics)