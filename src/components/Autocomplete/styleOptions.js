const styles = theme => ({
  container: {
    position: 'relative',
    height: '3rem',
    width: 200,
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  input: {
    maxWidth: 200,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset'
    },
    '&:after': {
      backgroundColor: theme.palette.primary[500]
    }
  },
  prefixIcon: {
    marginRight: 20
  }
});

export default styles
