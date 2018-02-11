const flexStyles = theme => ({
	flex: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			justifyContent: 'center'
		},
	}
})

export default flexStyles