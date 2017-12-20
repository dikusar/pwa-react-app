import React, { Component } from 'react'

// Material components
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

// Custom styles
import './styles.css'
import styles from './stylesOption'


class CustomAppBar extends Component {

	render() {
		const { classes, handleDrawerToggle }=this.props;

		return(
			<AppBar className={ classes.appBar }>
				<Toolbar>
					<IconButton
						className={ classes.menuButton }
						color="contrast"
						aria-label="open drawer"
						onClick={ handleDrawerToggle }
					>
		            	<Icon color="white">menu</Icon>
		          	</IconButton>
					<Typography className={ classes.flex } type="title" color="inherit">
						Inspections
					</Typography>					
				</Toolbar>
			</AppBar>
		
		);
	}
}

export default withStyles(styles)(CustomAppBar)
