import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';


const styles = theme => ({
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: 250,
		[theme.breakpoints.up('md')]: {
			width: theme.drawerWidth,
			position: 'relative'
			// height: '100%',
		},
	},
	link: {
		flex: '1 1 auto' 
	}
});

class ResponsiveDrawer extends React.Component {
	render() {
		const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;

		const drawerTmpl = (
			<div className="drawer__inner">
				<div className={classes.drawerHeader} />
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<Icon color="black">home</Icon>	
						</ListItemIcon>
						<NavLink exact to={"/"} className={ classes.link }>
							<ListItemText primary="Main" />
		          		</NavLink>
			        </ListItem>


					<ListItem button>
						<ListItemIcon>
							<Icon color="black">directions_car</Icon>	
						</ListItemIcon>
						<NavLink exact to={"/vehicle-search"} className={ classes.link }>
							<ListItemText primary="Vehicle" />
						</NavLink>
					</ListItem>
					
				</List>
			</div>
		);

		return (

			<div className="drawer">
				<Hidden mdUp>
					<Drawer
						type="temporary"
						anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
						open={ mobileOpen }
						classes={{
							paper: classes.drawerPaper,
						}}
						onRequestClose={ handleDrawerToggle }
						ModalProps={{
								keepMounted: true, // Better open performance on mobile.
					}}>
						{ drawerTmpl }
					</Drawer>
				</Hidden>
				<Hidden mdDown implementation="css">
					<Drawer
						type="permanent"
						open
						classes={{
							paper: classes.drawerPaper}}>
						{ drawerTmpl }
					</Drawer>
				</Hidden>
			</div>
		);
	}
}

ResponsiveDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);