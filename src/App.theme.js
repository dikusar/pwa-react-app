import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'

const defaultTheme = createMuiTheme()

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
})

export default theme
