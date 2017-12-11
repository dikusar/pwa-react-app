import React from 'react'
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

const styles = {
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20		
	}
}

function TopAppBar(props) {
	const { classes, handleMenuClick }=props;

	return(
		
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton 
					className={styles.menuButton}
					color="contrast"
					aria-label="open drawer"
					onClick={handleMenuClick}
				>
	            	<Icon color="white">menu</Icon>
	          	</IconButton>
				<Typography className={styles.flex} type="title" color="inherit">
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
	
	)
}

export default withStyles()(TopAppBar)
