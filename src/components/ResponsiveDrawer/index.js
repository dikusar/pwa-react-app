import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';

import styles from './styleOptions'


class ResponsiveDrawer extends React.Component {
	render() {
		const { classes, theme, mobileOpen, handleDrawerToggle, vehicleId } = this.props;

		const drawerTmpl = (
			<div className="drawer__inner">
				<div className={classes.drawerHeader} />
				<Divider />
				<List>
					{/*  Fueling assets */}
					<ListItem button onClick={ handleDrawerToggle }>
						<ListItemIcon>
							<Icon color="black">directions_car</Icon>	
						</ListItemIcon>
						<NavLink exact to={`/assets/vehicle/${vehicleId}`} className={ classes.link }>
							<ListItemText primary="Fueling Assets" />
		          		</NavLink>
			        </ListItem>

		        	{/*  New fueling */}
					<ListItem button onClick={ handleDrawerToggle }>
						<ListItemIcon>
							<Icon color="black">local_gas_station</Icon>	
						</ListItemIcon>
						<NavLink exact to={"/new-fueling"} className={ classes.link }>
							<ListItemText primary="New Fueling" />
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

function mapStateToProps(state) {
	const { id:vehicleId }=state.autocomplete;
	return {
		vehicleId
	};
}

ResponsiveDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles, { withTheme: true }),

	connect(mapStateToProps)
)(ResponsiveDrawer)

// export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
