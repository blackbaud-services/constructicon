const styles = (props, { mediaQuery, rhythm }) => ({
  root: {
    marginBottom: rhythm(1)
  },
  option: {
    ':hover': {
      cursor: 'pointer'
    },
    ':hover > p': {
      border: '2px dashed black'
    },
    ':focus > p': {
      border: '2px dashed black'
    }
  },
  optionSelected: {
    border: '3px solid black',
    'p': {
      border: '3px solid black'
    }
  },
  optionLabel: {
    textAlign: 'center',
    padding: rhythm(0.5),
    margin: 2,
    border: '1px solid black'
  },
  radio: {
    width: 0,
    height: 0
  },
  disabled: {
    opacity: 0.5,
    border: '1px solid black',
    ':hover': {
      cursor: 'default'
    },
    ':hover > p': {
      border: '1px solid black'
    },
    ':focus > p': {
      border: '1px solid black'
    },
    'p': {
      border: '1px solid black'
    }
  }
})

export default styles
  