import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';

import TopAppBar from '../top-app-bar'

const drawerWidth = 240;

const styles = theme => ({
	root: {
		width: '100%',
		height: 430,
		marginTop: theme.spacing.unit * 3,
		zIndex: 1,
		overflow: 'hidden',
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	appBar: {
		position: 'absolute',
		marginLeft: drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: 250,
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			position: 'relative',
			height: '100%',
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
		padding: theme.spacing.unit * 3,
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64,
		},
	},
});

class ResponsiveDrawer extends React.Component {
	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};

	render() {
		const { classes, theme } = this.props;

		const drawer = (
			<div>
				<div className={classes.drawerHeader} />
				<Divider />
				<List>Some list</List>
				<Divider />
				<List>Some list 2</List>
			</div>
		);

		return (

			<div>
				<TopAppBar handleMenuClick={this.handleDrawerToggle} classes={theme.appBar} />
				<Hidden mdUp>
					<Drawer
						type="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={this.state.mobileOpen}
						classes={{
							paper: classes.drawerPaper,
						}}
						onRequestClose={this.handleDrawerToggle}
						ModalProps={{
								keepMounted: true, // Better open performance on mobile.
					}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden mdDown implementation="css">
					<Drawer
						type="permanent"
						open
						classes={{
							paper: classes.drawerPaper
					}}>
						{drawer}
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