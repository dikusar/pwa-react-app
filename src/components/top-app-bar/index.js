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
import componentStyles from './styles.css'

const styles = {
	root: {
	    width: '100%',
  	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20		
	}
}

function TopAppBar(props) {
	const { classes }=props;

	return(
		<div className={classes.root}>	
			<AppBar position="static" color='primary'>
				<Toolbar>
					<IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
		            	<Icon color="white">menu</Icon>
		          	</IconButton>
					<Typography className={classes.flex} type="title" color="inherit">
						Progressive Web App
					</Typography>
					<Button color="contrast">
						<Link to={"/"}>
						
							Main
						
						</Link>
					</Button>
					<Button color="contrast">
						<Link to={"/about"}>About</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>		
	)
}

export default withStyles(styles)(TopAppBar)