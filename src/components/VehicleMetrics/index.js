import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

let id = 0;
function createData(name, refuelInterval, transactionCount, dailyUsage) {
  id += 1;
  return { id, name, refuelInterval, transactionCount, dailyUsage };
}

const data = [
  createData('10 Refuels', 159, 6.0, 24),
  createData('Three months', 237, 9.0, 37)
];

function VehicleMetrics(props) {
	const { classes }=props;
	return(
		
			
	<Paper>
		<Toolbar>
			<Typography type="title">Vehicle</Typography>
		</Toolbar>
	
	<Table>
		<TableHead>
			<TableRow>
			<TableCell numeric>Metrics</TableCell>
				<TableCell numeric>Refuel Interval</TableCell>
				<TableCell numeric>Fuel Transaction Count</TableCell>
				<TableCell numeric>Daily Usage</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{data.map(n => {
				return (
					<TableRow key={n.id}>
						<TableCell>{n.name}</TableCell>
						<TableCell numeric>{n.refuelInterval}</TableCell>
						<TableCell numeric>{n.transactionCount}</TableCell>
						<TableCell numeric>{n.dailyUsage}</TableCell>
					</TableRow>
					);
			})}
		</TableBody>
	</Table>
	</Paper>
			
		
	)

}

// VehicleMetrics.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

// export default withStyles(cardStyles)(VehicleMetrics)
export default VehicleMetrics