import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from 'material-ui/styles'

import CustomAppBar from './components/CustomAppBar'
import Main from './components/Main'

import './App.css';
import theme from './App.theme'


class App extends Component {

	render() {
		const { classes }=this.props;
		return (
			<MuiThemeProvider theme={ theme }>
				<div className={classes.root}>
					<CustomAppBar />
					<Main />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(theme, {withTheme:true})(App);
