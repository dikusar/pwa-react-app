import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		textAlign: 'center',
		color: theme.palette.grey[500]
	}
	
});

function EmptyState (props) {
	const { infoMess, classes }=props;

	return (
	  	<div className={ classes.root }>
	  		<Typography type="headline" gutterBottom="true" component="h3" color="inherit">
				No data
			</Typography>
			<Typography type="Subheading" component="p">
				{ infoMess }
			</Typography>
		</div>
	)
}

export default withStyles(styles)(EmptyState)
