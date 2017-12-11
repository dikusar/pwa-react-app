import React, { Component } from 'react';
import Routes from './Routes';

import { MuiThemeProvider, createMuiTheme, withTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
// import white from 'material-ui/colors/white';

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
    contrast: '#fff'
  },
  status: {
    danger: 'orange',
  },
  primaryText: {
      background: defaultTheme.palette.background.default,
      padding: `${defaultTheme.spacing.unit}px ${defaultTheme.spacing.unit * 2}px`,
      color: defaultTheme.palette.text.primary,
    },
primaryColor: {
      background: defaultTheme.palette.primary[500],
      padding: `${defaultTheme.spacing.unit}px ${defaultTheme.spacing.unit * 2}px`,
      color: '#fff',
    }
});


class App extends Component {
  render() {
	return (
		<MuiThemeProvider theme={ theme }>
			{<Routes />}
	  </MuiThemeProvider>
	);
  }
}

export default withTheme()(App);
