import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from 'material-ui/styles'

import ResponsiveDrawer from './components/ResponsiveDrawer'
import CustomAppBar from './components/CustomAppBar'
import MainLayout from './components/MainLayout'

import './App.css';
import theme from './App.theme'


class App extends Component {
	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};

	render() {
		const { handleDrawerToggle }=this;
		const { classes }=this.props;
		const  { mobileOpen }=this.state;

		return (
			<MuiThemeProvider theme={ theme }>
				<div className={ classes.root }>
					<ResponsiveDrawer handleDrawerToggle={ handleDrawerToggle } mobileOpen={ mobileOpen } />
					<CustomAppBar handleDrawerToggle={ handleDrawerToggle }/>
					<MainLayout />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(theme)(App);
