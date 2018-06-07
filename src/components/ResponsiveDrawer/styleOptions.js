const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: theme.drawerWidth,
      position: 'relative'
      // height: '100%',
    },
  },
  link: {
    flex: '1 1 auto',
    padding: '0 16px'
  }
});

export default styles
