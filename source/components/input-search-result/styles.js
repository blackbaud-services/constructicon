export default (props, traits) => {
  const { styles } = props
  const { colors } = traits

  return {
    root: {
      cursor: 'pointer',
      borderTop: `1px solid ${colors.shade}`,
      ':hover': {
        backgroundColor: colors.paleGrey
      },
      ...styles
    }
  }
}
