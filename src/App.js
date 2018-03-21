import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from 'material-ui/styles'

import ResponsiveDrawer from './components/ResponsiveDrawer'
import CustomAppBar from './components/CustomAppBar'
import MainContainer from './containers/MainContainer'

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

		console.log(theme);
		
		return (

			<MuiThemeProvider theme={ theme }>
				<div className={ classes.root }>
					<ResponsiveDrawer handleDrawerToggle={ handleDrawerToggle } mobileOpen={ mobileOpen } />
					<CustomAppBar handleDrawerToggle={ handleDrawerToggle }/>
					<MainContainer />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(theme)(App);
