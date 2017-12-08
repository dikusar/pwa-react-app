import React, { Component } from 'react';
import Routes from './Routes';

import { MuiThemeProvider, createMuiTheme, withTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';

import './App.css';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
	root: {
		marginTop: defaultTheme.spacing.unit * 3,
		width: '100%',
	},
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  }
});


class App extends Component {
  render() {
	return (
		<MuiThemeProvider theme={ theme }>
			<Routes />
	  </MuiThemeProvider>
	);
  }
}

export default withTheme()(App);
