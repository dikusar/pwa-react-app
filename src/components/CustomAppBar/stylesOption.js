const styles = theme => ({
	appBar: {
		position: 'absolute',
		marginLeft: theme.drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${theme.drawerWidth}px)`,
		},
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
		[theme.breakpoints.up('md')]: {
		  display: 'none',
	  }
	},
	activeLink: {
	   backgroundColor: theme.palette.primary[300]
	}
})

export default styles