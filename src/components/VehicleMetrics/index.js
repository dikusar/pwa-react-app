import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider  } from 'material-ui/styles'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'

import cardStyles from '../../styles/cardStyles'

function VehicleMetrics(props) {
	const { classes }=props;
	return(
		
			
				<Card className={ classes.card }>
					<CardContent>
						<Typography gutterBottom="true" type="headline">
							Vehicle Metrics
						</Typography>
					</CardContent>
				</Card>
			
		
	)

}

VehicleMetrics.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(cardStyles)(VehicleMetrics)