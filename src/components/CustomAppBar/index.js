import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Material components
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

// Custom styles
import './styles.css'
import styles from './stylesOption'


class CustomAppBar extends Component {
	
	render() {
		const { classes, handleMenuClick }=this.props;

		return(
			
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="contrast"
						aria-label="open drawer"
						onClick={handleMenuClick}
					>
		            	<Icon color="white">menu</Icon>
		          	</IconButton>
					<Typography className={classes.flex} type="title" color="inherit">
						Progressive Web App
					</Typography>
					<Link to={"/"}>
						<Button color="contrast">						
							Main
						</Button>
					</Link>
					<Link to={"/about"}>
						<Button color="contrast">About</Button>
					</Link>
				</Toolbar>
			</AppBar>
		
		);
	}
}

export default withStyles(styles)(CustomAppBar)
