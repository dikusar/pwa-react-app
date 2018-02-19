import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'

const theme = createMuiTheme()

const paddingTop = theme.spacing.unit * 10;

const customTheme = createMuiTheme({
	root: {
		// paddingTop,
		width: '100%',
		minHeight: `calc(100vh - ${paddingTop}px)`,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		height: '100%'
	},
	palette: {
		primary: blue,
		secondary: blue,
		error: red,
	},
	status: {
		danger: 'orange'
	},
	// primaryText: {
	// 	background: theme.palette.background.default,
	// 	padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	// 	color: theme.palette.text.primary,
	// },
	// primaryColor: {
	// 	background: theme.palette.primary[500],
	// 	padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	// 	color: '#fff'
	// },
	drawerWidth: 240
})

export default customTheme
