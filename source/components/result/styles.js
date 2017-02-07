export default (props, traits) => {
  const {
    rhythm,
    scale
  } = traits

  return {
    wrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexAlign: 'justify',
      '> div': {
        padding: rhythm(0.5)
      },
      '> div + div': {
        paddingLeft: rhythm(0.1)
      }
    },

    avatar: {
      height: rhythm(1.65),
      width: rhythm(1.65),
      borderRadius: '50%'
    },

    titles: {
      flex: 1
    },

    title: {
      fontWeight: 'bold',
      paddingBottom: rhythm(0.25)
    },

    subtitle: {
      fontSize: scale(-1),
      lineHeight: '1.45em'
    }
  }
}
