import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
	card: {
		maxWidth: 345,
	},
	cardParagraph: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 5,
		'&:last-of-type': {
			marginBottom: 0
		}
	}
};


function FuelingAssets(props) {
	const { classes }=props;
	return(
		<div className="assets">
			<Card className={classes.card}>
				<CardContent>
					<Typography gutterBottom="true" type="headline">
						Assests
					</Typography>
					<Typography className={ classes.cardParagraph } component="p">
						<Typography component="span">
							<Typography type="caption" component="label">
								 Last Fuel Date
							</Typography>
							<Typography type="body2" component="span">
								 Date from server
							</Typography>
						</Typography>
						<Typography component="span">
							<Typography type="caption" component="label">
								 Quantity
							</Typography>
							<Typography type="body2" component="span">
								 Quantity from server
							</Typography>
						</Typography>
					</Typography>
					<Typography className={ classes.cardParagraph } component="p">
						<Typography component="span">
							<Typography type="caption" component="label">
								 Consumption deviate
							</Typography>
							<Typography type="body2" component="span">
								 Data from server
							</Typography>
						</Typography>
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

FuelingAssets.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FuelingAssets)