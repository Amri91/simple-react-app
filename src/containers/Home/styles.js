export default {
  component: {
    backgroundColor: '#C1E9E7',
    height: '100%',
    width: '100%',
    position: 'fixed'
  },
  sunAndCloud: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '50%'
  },
  sun: {
    marginRight: '-150px',
    marginBottom: '200px'
  },
  cloud: {
    marginLeft: '-150px',
    marginBottom: '100px'
  },
  form: {
    height: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '48px',
    '& input': {
      fontFamily: 'inherit',
      width: '300px',
      color: '#434343',
      backgroundColor: 'inherit',
      borderWidth: '0px',
      '&:focus': {
        outline: 'none'
      }
    }
  }
}