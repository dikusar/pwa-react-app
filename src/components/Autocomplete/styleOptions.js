const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 200,
    width: 200,
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
    '&:after': {
      backgroundColor: theme.palette.primary[500]
    }
  }
});

export default styles
