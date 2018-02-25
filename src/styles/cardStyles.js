const cardStyles = theme => ({
	card: {
		width: '100%',
		maxWidth: 345,
		margin: '0 10px 0 0',
		[theme.breakpoints.only('xs')]: {
			maxWidth: 'inherit',
			margin: '0 0 10px 0' 
		},
	}
	
})

export default cardStyles