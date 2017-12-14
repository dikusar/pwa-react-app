import React, { Component } from 'react';
import { MuiThemeProvider, withTheme } from 'material-ui/styles'

import CustomAppBar from './components/CustomAppBar'
import Main from './components/Main'

import './App.css';
import theme from './App.theme'


class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={ theme }>
				<CustomAppBar />
				<Main />
			</MuiThemeProvider>
		);
	}
}

export default withTheme()(App);
