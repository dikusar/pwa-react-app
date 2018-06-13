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

const styles = theme => ({
	root: {
		width: 100 + '%',
	},
	paddingDefault: {
		padding: '4px 2rem 4px 1rem'
	}
	
});

function VehicleMetrics(props) {
	const { classes }=props;
	return(
		<Paper className={ classes.root }>
			<Toolbar>
				<Typography type="title">Vehicle</Typography>
			</Toolbar>
		
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className={ classes.paddingDefault } numeric>Metrics</TableCell>
						<TableCell className={ classes.paddingDefault } numeric>Refuel Interval</TableCell>
						<TableCell className={ classes.paddingDefault } numeric>Fuel Transaction Count</TableCell>
						<TableCell className={ classes.paddingDefault } numeric>Daily Usage</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(n => {
						return (
							<TableRow key={n.id}>
								<TableCell className={ classes.paddingDefault }>
									{n.name}
								</TableCell>
								<TableCell className={ classes.paddingDefault } numeric>
									{n.refuelInterval}
								</TableCell>
								<TableCell className={ classes.paddingDefault } numeric>
									{n.transactionCount}
								</TableCell>
								<TableCell className={ classes.paddingDefault } numeric>
									{n.dailyUsage}
								</TableCell>
							</TableRow>
							);
					})}
				</TableBody>
			</Table>
		</Paper>
	)

}

VehicleMetrics.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VehicleMetrics)