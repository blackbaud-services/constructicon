const styles = (props, { colors, rhythm, shadows }) => ({
  root: {
    marginBottom: rhythm(1)
  },
  option: {
    marginBottom: 10,
    boxShadow: shadows.full,
    ':hover': {
      cursor: 'pointer',
      boxShadow: 'none'
    },
  },
  optionSelected: {
    border: 'thin solid black',
    p: {
      border: 'none'
    }
  },
  optionLabel: {
    textAlign: 'center',
    padding: rhythm(0.5),
    margin: 2,
    border: `thin solid ${colors.lightGrey}`
  },
  radio: {
    width: 0,
    height: 0
  },
  disabled: {
    opacity: 0.5,
    ':hover': {
      cursor: 'default'
    }
  }
})

export default styles
